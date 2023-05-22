import axios from "axios";
import dayjs from "dayjs";
import jwt from "jwt-decode";

const instance = axios.create({ baseURL: 'https://api.edujobsng.com/api/v1' }); // the axios instance with the base url

// an interceptor to check and update token, it runs only for a single time
const interceptor = instance.interceptors.request.use(async config => {
  let token = JSON.parse(localStorage.getItem('authTokens') || ""); // returns an object if present else an empty string
  if (token) { // if token is an object
    let user = jwt(token?.access); // decode the token

    if (dayjs.unix(user.exp).diff(dayjs()) < 1) { // request a refresh token if the current one expires
      try {
        let { data } = await axios.post('https://api.edujobsng.com/api/v1/jobseeker/jwt/token/refresh/', { refresh: token.refresh });
        localStorage.setItem('authTokens', JSON.stringify(data)); // update localstorage with the new token
        console.log('refreshing token');
      } catch (error) {
        console.error(error, 'error refreshing token'); // logging the error to the console
        localStorage.removeItem('authTokens'); // removes the previous token, since refresh token request returns an error, it means it is also expired
      }
    }
  }
  instance.interceptors.request.eject(interceptor); // remove the interceptor after first response
  return config; // return the configuration object
}, console.error)

// an interceptor to set token if present
instance.interceptors.request.use(async config => {
  let token = JSON.parse(localStorage.getItem('authTokens') || ""); // returns an object if present else an empty string
  if (token) { // if token is an object
    let user = jwt(token?.access); // decode the token
    if (!(dayjs.unix(user.exp).diff(dayjs()) < 1)) config.headers.Authorization = `Bearer ${token?.access}`;
  }
  return config;
}, console.error);

export default instance;
