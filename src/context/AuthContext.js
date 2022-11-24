import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStoredUser, storeUser, getStoredEmployerUser, storeEmployerUser } from "../storage/localStorage";
import useAxios from "../utils/useAxios";
const AuthContext = createContext({
  authTokens: localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null,
  setAuthTokens: (_) => { },

  user: '', setUser: (_) => { },
  logOutUser: (_) => { }, loading: '', setLoading: (_) => { },
  updateUser: (_) => { }, getUserMeHandler: (_) => { }
});

export default AuthContext;



export const AuthProvider = ({ children }) => {
  const api = useAxios();
  const navigate = useNavigate();
  const [user, setUser] = useState(getStoredUser())
  const [employerUser, setEmployerUser] = useState(getStoredEmployerUser())
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  // console.log(authTokens);

  

  const getUserMeHandler = async () => {
    setLoading(true);
    setIsError(false);
    const response = await api.get(`/jobseeker/user-profile-update/`)
      .catch(err => {
        setIsError(true);
        console.log(err);
        setLoading(false);
      });

    if (response?.data) {
      setUser(response.data)
      storeUser(response.data)
      setLoading(false);
      setIsError(false)

    }
  }


  const getEmployerUser = async () => {
    setLoading(true)
    setIsError(false)
    const response = await api.get(`/employer/users/me/`)
      .catch(err => {
        console.log(err)
        setIsError(true)
        setLoading(false)
      })

    if (response && response.data) {
      // console.log(response.data)
      setEmployerUser(response.data)
      storeEmployerUser(response.data)
      setLoading(false);
      setIsError(false)

    }
  }

  useEffect(() => {
    getUserMeHandler();
    getEmployerUser();
  }, [])


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

  const updateUser = (updateKey, updateValue) => {
    setUser({ ...user, [updateKey]: updateValue })
    storeUser({ ...user, [updateKey]: updateValue })
  }



  let contextData = {
    user,
    setUser,
    loading,
    authTokens,
    setLoading,
    updateUser,
    logOutUser,
    employerUser,
    setAuthTokens,
    setEmployerUser,
    getEmployerUser,
    getUserMeHandler,
    storeEmployerUser,
    logOutEmployerUser,


  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )


}


