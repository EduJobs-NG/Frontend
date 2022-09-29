import jwtDecode from "jwt-decode";
import axios from "axios";
import dayjs from "dayjs";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";


const baseURL = 'https://edujobsng.herokuapp.com/api/v1'


const useAxios = () => {
    const { authTokens, setAuthTokens } = useContext(AuthContext);
    // console.log(authTokens)
    const axiosInstance = axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens?.access}`,
          }
    })


    axiosInstance.interceptors.request.use(async req => {
    
        const user =  jwtDecode(authTokens.access);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
        // console.log('isExpired', isExpired)
        
        if(!isExpired) return req
      
        const response = await axios.post(`${baseURL}/jobseeker/jwt/token/refresh/`, {
          refresh:authTokens.refresh
        })
      
        localStorage.setItem('authTokens', JSON.stringify(response.data))
        setAuthTokens(response.data)


        req.headers.Authorization = `Bearer ${response.data.access}`
        return req
      })
    
    return axiosInstance
}

export default useAxios;