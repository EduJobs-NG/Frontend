import dayjs from "dayjs";
import axios from "axios";
import { token } from './storage';
import jwt_decode from 'jwt-decode';

/* Creating an axios instance with the base url and the headers. */
const api = axios.create({
    baseURL: 'https://edujobsng.herokuapp.com/api/v1',
    headers: {
        Authorization: token.key,
        "Content-Type": "application/json",
    },
});

/* Intercepting the request and checking if the token is expired. If it is expired, it sends a request
to the server to get a new token. */
/* Intercepting the request and checking if the token is expired. If it is expired, it sends a request
to the server to get a new token. */
// api.interceptors.request.use(async (request) => {
//     if(!token.key) return request;

//     const user = jwt_decode(token.object?.access);

//     const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
//     if (!isExpired) return request;

//     console.log('refreshing token');

//     const response = await api.post("/jobseeker/jwt/token/refresh/", { refresh: token.object?.refresh });

//     token.key = response.data;
//     request.headers.Authorization = token.key;
// });

export default api;
