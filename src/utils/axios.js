import dayjs from "dayjs";
import axios from "axios";
import { token } from './storage';
import jwt_decode from 'jwt-decode';
import api from './AxiosInstance';

/* Creating an axios instance with the base url and the headers. */
// const api = axios.create({
//     baseURL: 'https://edujobsng.herokuapp.com/api/v1',
//     headers: {
//         Authorization: token.key,
//         "Content-Type": "application/json",
//     },
// });

/* Intercepting the request and checking if the token is expired. If it is expired, it sends a request
to the server to get a new token. */
// api.interceptors.request.use(async (request) => {
//     if(!token.key) return request;
    
//     console.log(token.key);
//     const user = jwt_decode(token.key);

//     const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
//     if (isExpired) return request;

//     const response = await api.post("/jobseeker/jwt/token/refresh/", { refresh: token.object?.refresh });

//     token.key = response.data;
//     request.headers.Authorization = token.key;
// });

export default api;
