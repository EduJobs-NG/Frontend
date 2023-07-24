import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getStoredUser,
  getStoredEmployerUser,
  storeEmployerUser,
} from "../storage/localStorage";
import axios from "axios";
import dayjs from "dayjs";
import jwt from "jwt-decode";

const instance = axios.create({
  baseURL: "https://api.edujobsng.com/api/v1",
});

const AuthContext = createContext({
  authTokens: localStorage.getItem("authTokens")
    ? JSON.parse(localStorage.getItem("authTokens"))
    : null,
  setAuthTokens: (_) => {},

  user: null,
  setUser: (_) => {},
  logOutUser: (_) => {},
  loading: false,
  setLoading: (_) => {},
  updateUser: (_) => {},
  getUserMeHandler: (_) => {},
});

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [_isError, setIsError] = useState(false);
  const [employerUser, setEmployerUser] = useState(getStoredEmployerUser());
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  useEffect(() => {
    // Create an interceptor to check and update token, it runs only for a single time
    const interceptor = instance.interceptors.request.use(
      async (config) => {
        try {
          let token = JSON.parse(localStorage.getItem("authTokens") || "");
          if (token) {
            let user = jwt(token?.access);
            let [tokenExpiration, currentTime] = [
              dayjs.unix(user?.exp),
              dayjs(),
            ];

            if (tokenExpiration.diff(currentTime, "second") < 1) {
              const refreshResponse = await axios.post(
                config.baseURL.concat("/jobseeker/jwt/token/refresh/"),
                { refresh: token?.refresh }
              );
              const newTokens = refreshResponse.data;
              localStorage.setItem("authTokens", JSON.stringify(newTokens));
              config.headers.Authorization = `Bearer ${newTokens.access}`;
            }
          }
        } catch (error) {
          console.error("Token refresh failed:", error);
        }
        return config;
      },
      (error) => {
        console.error("Error from token refresh interceptor:", error);
        return Promise.reject(error);
      }
    );

    // Clean up the interceptor on component unmount
    return () => {
      instance.interceptors.request.eject(interceptor);
    };
  }, []);

  useEffect(() => {
    getEmployer();
    getJobseeker();
  }, []);

  const getJobseeker = () => {
    setLoading(true);
    instance
      .get("/jobseeker/user-profile-update/")
      .then((res) => {
        setUser(res?.data || null);
      })
      .catch((error) => {
        console.error("Error fetching jobseeker data:", error);
        setIsError(true);
      })
      .finally(() => setLoading(false));
  };

  const getEmployer = () => {
    setLoading(true);
    instance
      .get("/employer/users/me/")
      .then((res) => {
        setEmployerUser(res?.data || null);
        storeEmployerUser(res?.data || null);
      })
      .catch(() => setIsError(true))
      .finally(() => setLoading(false));
  };

  const logOutUser = () => {
    localStorage.removeItem("authTokens");
    localStorage.removeItem("user");
    setUser(null); // Clear the user data from state
    navigate("/jobseeker/login");
  };

  const logOutEmployerUser = () => {
    localStorage.removeItem("authTokens");
    localStorage.removeItem("employer_user");
    setEmployerUser(null); // Clear the employer user data from state
    navigate("/employer/login");
  };

  const contextData = {
    user,
    setUser,
    loading,
    authTokens,
    setLoading,
    logOutUser,
    employerUser,
    setAuthTokens,
    setEmployerUser,
    storeEmployerUser,
    logOutEmployerUser,
    getEmployerUser: getEmployer,
    getUserMeHandler: getJobseeker,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
