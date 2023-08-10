import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import api from "../utils/api";

import {
  getStoredEmployerUser,
  storeEmployerUser,
} from "../storage/localStorage";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [_isError, setIsError] = useState(false);
  const [employerUser, setEmployerUser] = useState(getStoredEmployerUser());
  const [authTokens, setAuthTokens] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const decoded = jwtDecode(accessToken);
      setUser(decoded);
    }
  }, []);

  useEffect(() => {
    // Get access token
    const token = getAccessToken();
    if (token) {
      setAccessToken(token);
      setAuthTokens(token);
      setExpired(false);
    }
  }, []);

  useEffect(() => {
    // Intercept requests
    const interceptor = api.interceptors.request.use(async (config) => {
      // Check expired state
      if (expired) {
        const newAccessToken = await refreshAccessToken();
        setAccessToken(newAccessToken);
        setAuthTokens(newAccessToken);
        setExpired(false);

        // Set authorization header with the new access token
        config.headers.Authorization = `Bearer ${newAccessToken}`;
      } else if (accessToken) {
        // Check if accessToken is defined
        // Set authorization header with the current access token
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    });

    // Cleanup
    return () => {
      api.interceptors.request.eject(interceptor);
    };
  }, [expired, accessToken]);

  useEffect(() => {
    if (accessToken) {
      // Call your API to get user data
      getJobseeker();
      // Call your API to get employer user data
      getEmployer();
    }
  }, [accessToken]);

  const getAccessToken = () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) return null;

    const { exp } = jwtDecode(accessToken);

    // Check expiration
    if (Date.now() >= exp * 1000) {
      setExpired(true);
      return null;
    }

    setExpired(false);

    return accessToken;
  };

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    const response = await api.post("/jobseeker/jwt/token/refresh/", {
      refreshToken,
    });

    const { access, refresh } = response.data;
    localStorage.setItem("accessToken", JSON.stringify(access));
    localStorage.setItem("refreshToken", JSON.stringify(refresh));

    console.log(access, refresh);

    return access;
  };

  const getJobseeker = async () => {
    setLoading(true);
    try {
      const response = await api.get("/jobseeker/user-profile-update/");
      if (response.status === 200) {
        console.log(response.data);
        setUser(response.data || null);
      }
    } catch (e) {
      console.log(e);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  const getEmployer = async () => {
    setLoading(true);
    try {
      const res = await api.get("/employer/users/me/");
      setEmployerUser(res?.data || null);
      storeEmployerUser(res?.data || null);
    } catch (error) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  const logOutUser = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setUser(null); // Clear the user data from state
    navigate("/jobseeker/login");
  };

  const logOutEmployerUser = () => {
    localStorage.removeItem("accessToken");
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
    setIsError,
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
