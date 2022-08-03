import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({})
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
          navigate('/login')
        }
    
      }

      const getUserMeHandler = async () =>{
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}account/user-profile/`, {
          headers:{
            'Content-Type':'application/json',
            'Authorization':`Token ${authTokens.auth_token}`
          }
        }).catch(err =>{
          console.log(err)
        })
     
        if (response && response.data){
          setUser(response.data[0])
          console.log(response.data[0])
          
        }
    
      }
    
  
    let contextData = {
        user:user,
        setUser:setUser,
        authTokens:authTokens,
        setAuthTokens:setAuthTokens,
        logOutUser:logOutUser,
        getUserMeHandler:getUserMeHandler
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
    

    }
