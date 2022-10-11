import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStoredUser, storeUser } from "../storage/localStorage";
import useAxios from "../utils/useAxios";
const AuthContext = createContext({
  authTokens:localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null, 
    setAuthTokens:(_) => {},
 
  user:'', setUser:(_) => {}, 
  logOutUser:(_) => {}, loading:'', setLoading:(_) => {},
  updateUser:(_) =>{}, getUserMeHandler:(_) => {}});

export default AuthContext;



export const AuthProvider = ({children}) => {
    const api = useAxios();
    const navigate = useNavigate();
    const [user, setUser] = useState(getStoredUser())
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null)
    

    // const getCV = async () =>{

    // }
    
    const getUserMeHandler = async () =>{
      setLoading(true)
      setIsError(false)
      const response = await api.get(`/jobseeker/user-profile-update/`)
      .catch(err =>{
        console.log(err)
        setLoading(false)
        setIsError(true)
      })
   
      if (response && response.data){
        setUser(response.data)
        storeUser(response.data)
        setLoading(false);
        setIsError(false)
        
      }
    }

    // useEffect(() =>{
    //   getUserMeHandler()
    // }, [])
    

    const logOutUser = () =>{
          localStorage.removeItem('authTokens')
          localStorage.removeItem('user')
          navigate('/jobseeker/login')
      }
      
      const updateUser = (updateKey, updateValue) =>{
        setUser({...user, [updateKey]:updateValue })
        storeUser({...user, [updateKey]:updateValue})
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
        updateUser:updateUser
      
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
    

    }


