import axios from "axios";
import dayjs from "dayjs";
import jwt from "jwt-decode";
import { token } from './storage';

const instance = axios.create({ baseURL: 'https://api.edujobsng.com/api/v1' });

// Interceptor to refresh token if it's about to expire
const refreshTokenInterceptor = instance.interceptors.request.use(async (config) => {
  const authTokens = token.object;
  
  if (authTokens) {
    const user = jwt(authTokens.access), tokenExpiration = dayjs.unix(user.exp), currentTime = dayjs();

    if (tokenExpiration.diff(currentTime) < 1) {
      try {
        const response = await axios.post(`${config.baseURL}/jobseeker/jwt/token/refresh/`, { refresh: authTokens.refresh });
        token.key = response.data;
      }
      catch (error) { console.error(error); };
    }
  }

  instance.interceptors.request.eject(refreshTokenInterceptor);
  return config;
}, (error) => {
  console.error(error, 'error from token refresh interceptor');
});

// Interceptor to set the token in the request headers
instance.interceptors.request.use(async (config) => {
  const authTokens = JSON.parse(localStorage.getItem('authTokens') || "{}");
  if (authTokens) {
    const user = jwt(authTokens.access);
    const tokenExpiration = dayjs.unix(user.exp);
    const currentTime = dayjs();

    if (tokenExpiration.diff(currentTime) > 0) {
      config.headers.Authorization = `Bearer ${authTokens.access}`;
    }
  }
  return config;
}, (error) => {
  console.error(error, 'error setting token');
});

export default instance;
