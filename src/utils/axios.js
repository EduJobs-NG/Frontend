import dayjs from "dayjs";
import axios from "axios";
import { token } from './storage';
import jwt_decode from 'jwt-decode';

const api = axios.create({
    baseURL: 'https://edujobsng.herokuapp.com/api/v1',
    headers: {
        Authorization: token.key,
        "Content-Type": "application/json",
    },
});

// api.interceptors.request.use(async (request) => {
//     console.log(token.key);
//     const user = jwt_decode(token.key);

//     const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
//     if (isExpired) return request;

//     const response = await api.post("/jobseeker/jwt/token/refresh/", { refresh: token.object?.refresh });

//     token.key = response.data;
//     request.headers.Authorization = token.key;
// });

export default api;
