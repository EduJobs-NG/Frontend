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
    

    const LOGIN_URL = 'https://edujobsng.herokuapp.com/api/v1/auth/token/login/';
    const loginUser = async (e) =>{
        e.preventDefault()
       
        console.log('form submitted')
        console.log(e.target.email.value)
        console.log(e.target.password.value)
        if (e.target.email.value.trim().length && e.target.password.value.trim().length === ""){
            alert("Fields can't be empty")
        }
        const values = {'email':e.target.email.value, 'password': e.target.password.value}
        const response = await axios
        .post("https://edujobsng.herokuapp.com/api/v1/auth/token/login/", values)
        .catch(err =>{
            if(err){
              console.log(err)
              if(err.response.status === 400){
                alert('Cannot login with provided credentials')
              }
              else{
                alert('Something went wrong')
              }
            }
        });

        if(response && response.data){
            console.log(response.data)
            setAuthTokens(response.data)
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