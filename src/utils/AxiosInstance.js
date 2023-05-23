import axios from "axios";
import dayjs from "dayjs";
import jwt from "jwt-decode";

const instance = axios.create({ baseURL: 'https://api.edujobsng.com/api/v1' }); // the axios instance with the base url

// an interceptor to check and update token, it runs only for a single time
const interceptor = instance.interceptors.request.use(config => {
  let token = JSON.parse(localStorage.getItem('authTokens') || ""); // returns an object if present else an empty string
  if (token) { // if token is an object
    let user = jwt(token?.access); // decode the token
    let [tokenExpiration, currentTime] = [dayjs.unix(user?.exp), dayjs()];

    // attempt refreshing the token if it expires
    if (tokenExpiration.diff(currentTime) < 1) axios.post(config.baseURL.concat("/jobseeker/jwt/token/refresh/"), { refresh: token?.refresh })
      .then(res => { localStorage.setItem('authTokens', JSON.stringify(res.data)); }) // update authtoken localstorage
      .catch(console.error); // log the error if not successful
  }
  instance.interceptors.request.eject(interceptor); // remove the interceptor after first response
  return config; // return the configuration object
}, err => {
  console.error(err, 'error from token refresh interceptors')
});

// an interceptor to set token if present
instance.interceptors.request.use(async config => {
  let token = JSON.parse(localStorage.getItem('authTokens') || ""); // returns an object if present else an empty string
  if (token) { // if token is an object
    let user = jwt(token?.access); // decode the token
    let [tokenExpiration, currentTime] = [dayjs.unix(user?.exp), dayjs()];

    if (tokenExpiration.diff(currentTime) > 0) config.headers.Authorization = `Bearer ${token?.access}`;
  }
  return config;
}, err => {
  console.error(err, 'error setting token');
});

export default instance;
