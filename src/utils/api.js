import axios from "axios";
import dayjs from "dayjs";
import jwt from "jwt-decode";
import { token } from './storage';

// Enable CORS for cross-origin requests
// axios.defaults.withCredentials = true;

export const baseURL = "https://api.edujobsng.com/api/v1", api = axios.create({ baseURL });

const renewToken = async () => {
  try {
    const res = await axios.post(baseURL + "/jobseeker/jwt/token/refresh/", { refresh: token.object.refresh });
    token.key = res.data; return res.data.access;
  } catch (error) {
    console.error('Error renewing token!', error); throw error;
  };
};

api.interceptors.request.use(async config => {
  const key = token.object;

  if (key) {
    const user = jwt(key.access), exp = dayjs.unix(user.exp), curr = dayjs();

    if (exp.diff(curr) < 1) {
      const newAccessToken = await renewToken();
      config.headers.Authorization = `Bearer ${newAccessToken}`;
    } else {
      config.headers.Authorization = `Bearer ${key.access}`;
    };
  };

  return config;
}, error => { console.error(error); return Promise.reject(error); });

export default api;
