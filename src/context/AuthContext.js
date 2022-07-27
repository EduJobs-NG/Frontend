import { createContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from 'axios'


const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({children}) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',

        }
       

    })
    const [user, setUser] = useState(null)
    const [authTokens, setAuthTokens] = useState(null)
    const LOGIN_URL = 'https://edujobsng.herokuapp.com/api/v1/auth/users/token/login/';
    const loginUser = async (e) =>{
        e.preventDefault()
       
        console.log('form submitted')
        console.log(e.target.email.value)
        console.log(e.target.password.value)
        const values = {'email':e.target.email.value, 'password': e.target.password.value}
        const response = await axios
        .post("https://edujobsng.herokuapp.com/api/v1/auth/users/token/login/", values)
        .catch(err =>{
            if(err && err.response){
              console.log(err)
            }
        });

        if(response && response.data){
            console.log(response)
        }
    }
    const contextData = {
        loginUser:loginUser
    }
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}