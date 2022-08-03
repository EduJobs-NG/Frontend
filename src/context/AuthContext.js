import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null)
    const logOutUser = async () =>{
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}users/me/`, {
          headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authTokens}`
          }
        }).catch(err =>{
          console.log(err)
        })
     
        if (response){
          console.log(response)
        }
    
      }
  
    let contextData = {
        user:user,
        setUser:setUser,
        authTokens:authTokens,
        setAuthTokens:setAuthTokens,
        logOutUser:logOutUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
    

    }
