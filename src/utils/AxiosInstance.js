import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'
import axios from 'axios'


const baseURL = 'https://edujobsng.up.railway.app/api/v1'
let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null

const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${authTokens?.access}`,
      }
})


// axiosInstance.interceptors.request.use(async req => {
//   if (!authTokens){ 
//     authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null
//     req.headers.Authorization = `Bearer ${authTokens?.access}`
//   }
//   const user =  jwt_decode(authTokens?.access);
//   // console.log(user)
//   const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
//   // console.log('isExpired', isExpired)
  
//   if(!isExpired) return req

//   const response = await axios.post(`${baseURL}/jobseeker/jwt/token/refresh/`, {
//     refresh:authTokens.refresh
//   })
//   // console.log(response)

//   localStorage.setItem('authTokens', JSON.stringify(response.data))
//   req.headers.Authorization = `Bearer ${response.data.access}`


//   return req
// })



export default axiosInstance;


