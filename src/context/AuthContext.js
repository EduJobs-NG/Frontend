import { createContext, useState, useEffect } from "react";




const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({children}) => {
   
    const [user, setUser] = useState(null)
    const [authTokens, setAuthTokens] = useState(null)

    
  
    let contextData = {
        user:user,
        setUser:setUser,
        authTokens,
        setAuthTokens
    }
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
    

    }
