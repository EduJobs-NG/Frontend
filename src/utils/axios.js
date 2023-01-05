import axios from "axios";
import { token } from './storage';

/* Creating an axios instance with the base url and the headers. */
const api = axios.create({

    baseURL: 'https://api.edujobsng.com/api/v1/',
    headers: {
        Authorization: token.key,
        "Content-Type": "application/json",
    },
});

export default api;
