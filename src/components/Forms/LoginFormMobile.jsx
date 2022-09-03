import React, { useRef, useContext, useState } from 'react'
import { FormInputBox } from './FormInputBox';
import { FaSignInAlt, FaEnvelope, FaLinkedin, FaGoogle } from 'react-icons/fa';
import { useFormik, Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import google from '../../assets/google.png'
import linkedin from '../../assets/linkedin.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginSchema } from './schema';


export const LoginFormMobile = () => {
    const { setUser, setAuthTokens } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const onSubmit = async (values) => {
        setIsLoading(true)
        const response = await axios
            .post(`${process.env.REACT_APP_BASE_URL}token/login/`, values)
            .catch(err => {
                if (err) {
                    if (err.response.status === 400) {
                        toast.error('Password or email incorrect')
                        setIsLoading(false)
                      
                    }
                    else if (err.response.status === 401) {
                        toast.error('You are not registered.')
                        setIsLoading(false)
                    }
                    else {
                        toast.error('Something went wrong')
                        setIsLoading(false)
                    }
                }
            });

        if (response && response.data) {
            setAuthTokens(response.data)
            localStorage.setItem('authTokens', JSON.stringify(response.data))
            navigate('/dashboard/find-jobs')
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
        validationSchema: LoginSchema,

    })

    return (
        <>
            <ToastContainer />

            <div className='bg-white flex flex-col h-screen justify-center  px-[20px] '>
                <div className='flex my-4  md:gap-x-[1rem] justify-center '>
                    <FaSignInAlt className='text-[2rem] text-blue' />
                    <div className='h-[2.5rem] ml-[1rem] mr-[1rem] w-[3px] bg-black'></div>
                    <h2 className="title text-blue  text-[24px] font-[700]">LOG IN</h2>
                </div>

           
                <Formik>
                    {() => (

                        <Form onSubmit={formik.handleSubmit}>
                            <FormInputBox type="text" name="email" id="email" className="border p-2.5 block   w-full  border-solid border-[#808080] rounded-lg outline-none" icon={<FaEnvelope />}
                                onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} placeholder="Email Address" />
                            {formik.touched.email && formik.errors.email ? (<small className="text-red-600">{formik.errors.email}</small>) : null}



                            <FormInputBox type="password" name="password" id="password" className="border p-2.5 mt-[1.6rem] block w-full  border-solid border-[#808080] rounded-lg outline-none"
                                onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} placeholder="Password" />

                            {formik.touched.password && formik.errors.password ? (<small className="text-red-600">{formik.errors.password}</small>) : null}

                            <div className='mt-[1.6rem]'>
                                {!isLoading && <button disabled={!formik.isValid} className={!formik.isValid ? 'bg-blue block w-full text-white opacity-25 rounded-sm p-2' : 'bg-blue opacity-100 block w-full text-white rounded-sm p-2'} type="submit">LOGIN</button>}
                                {isLoading && (
                                    <div className='flex justify-center'>
                                        <ThreeDots type="ThreeDots"
                                            width={100} height={20} color="blue"
                                        />
                                    </div>

                                )}
                            </div>

                        </Form>
                    )}


                </Formik>
                <div className='flex flex-col text-center gap-y-[1rem] justify-between mt-[1rem] mb-[1.2rem] '>
                    <small>Don't have an account?<Link className="text-blue underline" to="/jobseeker/register"> Sign up</Link></small>
                    <small><Link className='text-blue underline' to="/forgot-password">Forgot Password?</Link></small>
                </div>


                <div className='flex justify-between gap-x-5 items-baseline'>
                    <hr className='bg-blue border-[0.1px] w-[35%] ' />
                    <span>OR</span>
                    <hr className='bg-blue border-[0.1px]  w-[35%]' />
                </div>

                <div className='mt-4 flex justify-center flex-row gap-x-[1rem]'>
                    <img className='border rounded-full p-[0.3rem]  border-[#808080]' src={google} alt="" />
                    <img className='border p-[0.4rem] rounded-full ml-[1rem] border-[#808080]' src={linkedin} alt="" />

                </div>

                <div className="text-center mt-5">
                    <h1 className="text-blue font-[700]">EduJobsNg</h1>
                    <p>All Rights Reserved</p>
                </div>

            </div>
        </>

    )
}
