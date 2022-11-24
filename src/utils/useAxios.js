import jwtDecode from "jwt-decode";
import axios from "axios";
import dayjs from "dayjs";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const baseURL = "https://edujobsng.herokuapp.com/api/v1";

const useAxios = () => {
  const { authTokens, setAuthTokens } = useContext(AuthContext);
  // console.log(authTokens)
  const accessToken = localStorage.getItem("authTokens")
    ? localStorage.getItem("authTokens")
    : null;
  const tokens = JSON.parse(accessToken);
  console.log("outside", tokens);
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${tokens?.access}`,
    },
  });

  // Create instance
  let instance = axios.create(axiosInstance);

  // Set the AUTH token for any request
  axiosInstance.interceptors.request.use(async function (config) {
    console.log("inside", tokens);
    const user = jwtDecode(tokens?.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if (isExpired) {
      const response = await axios.post(
        `${baseURL}/jobseeker/jwt/token/refresh/`,
        {
          refresh: tokens.refresh,
        }
      );

      localStorage.setItem("authTokens", JSON.stringify(response.data));
      setAuthTokens(response.data);

      config.headers.Authorization = tokens ? `Bearer ${tokens?.access}` : "";

      return config;
    }
    config.headers.Authorization = tokens ? `Bearer ${tokens?.access}` : "";
    return config;

    //     // console.log('isExpired', isExpired)

    // if (!isExpired) return req;

    //     const response = await axios.post(
    //       `${baseURL}/jobseeker/jwt/token/refresh/`,
    //       {
    //         refresh: authTokens.refresh,
    //       }
    //     );

    //     localStorage.setItem("authTokens", JSON.stringify(response.data));
    //     setAuthTokens(response.data);

    //     req.headers.Authorization = `Bearer ${response.data.access}`;
    //     return req;
  });
  //   axiosInstance.interceptors.request.use(async (req) => {
  //     const user = jwtDecode(authTokens?.access);
  //     const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
  //     // console.log('isExpired', isExpired)

  //     if (!isExpired) return req;

  //     const response = await axios.post(
  //       `${baseURL}/jobseeker/jwt/token/refresh/`,
  //       {
  //         refresh: authTokens.refresh,
  //       }
  //     );

  //     localStorage.setItem("authTokens", JSON.stringify(response.data));
  //     setAuthTokens(response.data);

  //     req.headers.Authorization = `Bearer ${response.data.access}`;
  //     return req;
  //   });

  return axiosInstance;
};

export default useAxios;
