import React, { useRef, useContext, useState } from 'react'
import { FormInputBox } from './FormInputBox';
import { FaSignInAlt, FaEnvelope, FaLinkedin, FaGoogle } from 'react-icons/fa';
import * as Yup from 'yup';
import { useFormik, Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import {ThreeDots} from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import google from '../../assets/google.png'
import linkedin from '../../assets/linkedin.png';
import jwt_decode from 'jwt-decode';



const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required('Required'),
    password: Yup.string().min(8, "Enter your password").required('Required')

})



export const LoginForm = () => {
    const { setUser, setAuthTokens} = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const onSubmit = async (values) =>{
        setIsLoading(true)
        const response = await axios
        .post("https://edujobsng.herokuapp.com/api/v1/auth/token/login/", values)
        .catch(err =>{
            if(err){
              console.log(err)
              if(err.response.status === 400){
                setError('Password or email incorrect')
                setIsLoading(false)
                setTimeout(() =>{
                setError('')

                }, 1500)
              }
              else if(err.response.status === 401){
                setError('You are not registered.')
                setIsLoading(false)
                setTimeout(() =>{
                setError('')

                }, 1500)
              }
              else{
                setError('Something went wrong')
                setIsLoading(false)
                setTimeout(() =>{
                    setError('')
    
                    }, 1500)

              }
            }
        });

        if(response && response.data){
            // console.log(response.data)
            setAuthTokens(response.data)
            localStorage.setItem('authTokens', JSON.stringify(response.data))
            // setUser(jwt_decode(response.data.access))
            navigate('/dashboard')
            setIsLoading(false)

        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,

    })

    return (

        <section>
            <div className='border bg-white p-2 py-[2rem] px-[42px]  rounded-[50px] lg:w-[500px]'>
          <div className='flex my-4 gap-x-[1rem] justify-center '>
                    <FaSignInAlt className='text-[2rem] text-blue' />
                    <div className='h-[2.5rem] w-[3px] bg-black'></div>
                    <h2 className="title text-blue  text-[24px] font-[700]">LOG IN</h2>
                </div>

                {error && (

<div className="p-3 my-4 text-center">
  <p className="bg-red-600 text-white p-2 rounded-md">{error}</p>
</div>
)}
      
                <Formik>
                    {() => (

                        <Form onSubmit={formik.handleSubmit}>
                            <FormInputBox type="text" name="email" id="email" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none" icon={<FaEnvelope />}
                                onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} placeholder="Email Address" />
                            {formik.touched.email && formik.errors.email ? (<small className="text-red-600">{formik.errors.email}</small>) : null}



                            <FormInputBox type="password" name="password" id="password" className="border p-2.5 mt-[1.6rem] block w-full  border-solid border-[#808080] rounded-lg outline-none"
                                onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} placeholder="Password" />

                            {formik.touched.password && formik.errors.password ? (<small className="text-red-600">{formik.errors.password}</small>) : null}


                            <div className='mt-[1.6rem]'>
                            {!isLoading && <button disabled={!formik.isValid } className={!formik.isValid  ? 'bg-blue block w-full text-white opacity-25 rounded-sm p-2':'bg-blue opacity-100 block w-full text-white rounded-sm p-2' } type="submit">LOGIN</button>}
     {isLoading && (
        <div className='flex justify-center'>
        <ThreeDots type="ThreeDots"
        width={100} height={20} color="blue"
        />
        </div>
     )}
                            </div>

                            <div className='flex flex-row justify-between mt-[1rem] mb-[1.2rem] '>
                                <small><a className='text-blue underline' href="#">Forgot Password?</a></small>
                                <small>Don't have an account?<Link className="text-blue underline" to="/register">Sign up</Link></small>
                            </div>

                            
<div className='flex justify-between gap-x-5 items-baseline'>
    <hr className='bg-blue border-[0.9px] w-[50%] h-1' />
    <span>OR</span>
    <hr className='bg-blue border-[0.9px]  w-[50%] h-1' />
</div>

<div className='mt-4 flex justify-center flex-row gap-x-[1rem]'>
<img className='border rounded-full p-[0.3rem]  border-[#808080]' src={google} alt="" />
<img  className='border p-[0.4rem] rounded-full border-[#808080]' src={linkedin} alt="" />

</div>

<div className="text-center mt-5">
                       <h1 className="text-blue font-[700]">EduJobsNg</h1> 
                       <p>All Rights Reserved</p>
                    </div>
                        </Form>
                    )}
                 

                </Formik>


            </div>
        </section>
    )
}
