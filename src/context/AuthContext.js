import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStoredUser, storeUser, getStoredEmployerUser, storeEmployerUser } from "../storage/localStorage";
import api from "../utils/AxiosInstance";
const AuthContext = createContext({
  authTokens: localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null,
  setAuthTokens: (_) => { },

  user: '', setUser: (_) => { },
  logOutUser: (_) => { }, loading: '', setLoading: (_) => { },
  updateUser: (_) => { }, getUserMeHandler: (_) => { }
});

export default AuthContext;



export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [_isError, setIsError] = useState(false)
  const [user, setUser] = useState(getStoredUser())
  const [employerUser, setEmployerUser] = useState(getStoredEmployerUser())
  const [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)

  useEffect(() => { getEmployer(); }, []);
  useEffect(() => { getJobseeker(); }, []);

  const getJobseeker = () => {
    setLoading(() => true);
    api.get('/jobseeker/user-profile-update/')
      .then(res => {
        setUser(prev => res?.data || prev)
      })
      .catch(() => setIsError(() => true))
      .finally(() => setLoading(() => false));
  };

  const getEmployer = () => {
    setLoading(() => true);
    api.get('/employer/users/me/')
      .then(res => {
        setEmployerUser(prev => res?.data || prev);
        storeEmployerUser(prev => res?.data || prev);
      })
      .catch(() => setIsError(() => true))
      .finally(() => setLoading(() => false));
  };


  const logOutUser = () => {
    localStorage.removeItem('authTokens')
    localStorage.removeItem('user')
    navigate('/jobseeker/login')
  }

  const logOutEmployerUser = () => {
    localStorage.removeItem('authTokens')
    localStorage.removeItem('employer_user')
    navigate('/employer/login')
  }


  let contextData = {
    user,
    setUser,
    loading,
    authTokens,
    setLoading,
    logOutUser,
    employerUser,
    setAuthTokens,
    setEmployerUser,
    storeEmployerUser,
    logOutEmployerUser,
    getEmployerUser: getEmployer,
    getUserMeHandler: getJobseeker,


  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}
