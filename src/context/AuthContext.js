import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
export default AuthContext;


export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({user:{}})
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null)
  
    const logOutUser = async () =>{
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}users/me/`, {
          headers:{
            'Content-Type':'application/json',
            'Authorization': `Token ${authTokens.auth_token}`
          }
        }).catch(err =>{
          console.log(err)
        })
     
        if (response){
          console.log(response)
          localStorage.removeItem('authTokens')
          navigate('/login')
        }
    
      }
    
      const getUserMeHandler = async () =>{
        setLoading(true)
        setIsError(false)
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}account/user-profile-update/`, {
          headers:{
            'Content-Type':'application/json',
            'Authorization':`Token ${authTokens.auth_token}`
          }
        }).catch(err =>{
          console.log(err)
          setLoading(false)
          setIsError(true)
        })
     
        if (response && response.data){
          // console.log(response)
          setUser(response.data)
          setLoading(false);
          setIsError(false)
          console.log(response.data)
          
        }
      }

      const getUserEmail = async () =>{
        setLoading(true)
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}users/`, {
          headers:{
            'Content-Type':'application/json',
            'Authorization':`Token ${authTokens.auth_token}`
          }
        }).catch(err =>{
          console.log(err)
          
        })
     
        if (response && response.data){
          
          setLoading(false);
          console.log(response.data)
          
        }
      }

      
  
    let contextData = {
        user:user,
        setUser:setUser,
        authTokens:authTokens,
        setAuthTokens:setAuthTokens,
        logOutUser:logOutUser,
        getUserMeHandler:getUserMeHandler,
        loading:loading,
        setLoading:setLoading,
        getUserEmail,
        // getUserCredentials:getUserCredentials,
        // getUserEducation:getUserEducation
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
    

    }
