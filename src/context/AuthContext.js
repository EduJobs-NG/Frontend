import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getStoredUser,
  storeUser,
  getStoredEmployerUser,
  storeEmployerUser,
} from "../storage/localStorage";
// import instance from "../utils/AxiosInstance";
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

  user: "",
  setUser: (_) => {},
  logOutUser: (_) => {},
  loading: "",
  setLoading: (_) => {},
  updateUser: (_) => {},
  getUserMeHandler: (_) => {},
});

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [_isError, setIsError] = useState(false);
  const [user, setUser] = useState(getStoredUser());
  const [employerUser, setEmployerUser] = useState(getStoredEmployerUser());
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  useEffect(() => {
    // Create an interceptor to check and update token, it runs only for a single time
    const interceptor = instance.interceptors.request.use(
      (config) => {
        let token = JSON.parse(localStorage.getItem("authTokens") || ""); // returns an object if present else an empty string
        if (token) {
          // if token is an object
          let user = jwt(token?.access); // decode the token
          let [tokenExpiration, currentTime] = [dayjs.unix(user?.exp), dayjs()];

          // attempt refreshing the token if it expires
          if (tokenExpiration.diff(currentTime, "second") < 1) {
            return axios
              .post(config.baseURL.concat("/jobseeker/jwt/token/refresh/"), {
                refresh: token?.refresh,
              })
              .then((res) => {
                localStorage.setItem("authTokens", JSON.stringify(res.data)); // update authtoken localstorage
                config.headers.Authorization = `Bearer ${res.data.access}`; // Update the Authorization header with the new token
                return config;
              })
              .catch((error) => {
                console.error("Token refresh failed:", error);
                return Promise.reject(error);
              });
          }
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
      .catch(() => setIsError(true))
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
