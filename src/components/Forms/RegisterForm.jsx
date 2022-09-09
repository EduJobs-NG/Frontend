import React, { useState } from 'react';
import { FormInputBox } from './FormInputBox';
import { useFormik } from 'formik';
import axios from 'axios';
import { FaUserPlus, FaUserCircle, FaEnvelope } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png'
import linkedin from '../../assets/linkedin.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  FaTimes } from 'react-icons/fa';
import CustomCheckbox from './CustomCheckbox';
import { RegistrationSchema } from './schema';



export const RegisterForm = ({showModal, setShowRegister}) => {
   
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        setIsLoading(true)
        const response = await axios
            .post(`${process.env.REACT_APP_BASE_URL}jobseeker/users/`, values)
            .catch(err => {
                if (err && err.response) {
                    if (err.message === 'Request failed with status code 400') {
                        setIsLoading(false)
                        toast.error("User with this email already exists")
                        
                    } else {
                        setIsLoading(false)
                        toast.error("An error occured. Try again")
                     
                    }
                }
            });

        if (response && response.data) {
            toast.success("Account created successfully.")
            setTimeout(() => {
                navigate('/verify');
            }, 1000)
        }


    }

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            re_password: '',
            acceptedTos:false
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: RegistrationSchema,

    })


    return (
        <div className=' border relative bg-white p-2 py-[2rem] px-[20px] mx-[1.5rem] md:px-[42px] rounded-[30px] md:rounded-[50px] max-w-[500px]'>
            <ToastContainer />

            <div className=' flex my-4 gap-x-[1rem] justify-center '>
                <FaUserPlus className='text-[2rem] text-blue' />
                <div className='h-[2.5rem] w-[3px] bg-black'></div>
                <h2 className="title text-blue  text-[24px] font-[700]">SIGN UP</h2>
                {showModal ? <FaTimes onClick={() => setShowRegister(false)} className='text-blue z-[99999] text-[1.3rem] absolute top-[1rem] right-[1.5rem] mt-3 cursor-pointer' /> : null } 

            </div>
            <Formik>

                {() => (

                    <Form onSubmit={formik.handleSubmit}>
                        <div className='flex flex-row w-full  gap-x-[0.4rem]'>
                            <div>
                                <FormInputBox type="text" className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                                    placeholder="First Name" icon={<FaUserCircle />} id="first_name" name="first_name" onChange={formik.handleChange} value={formik.values.first_name} onBlur={formik.handleBlur} />

                                {formik.touched.first_name && formik.errors.first_name ? (<small className="text-red-600">{formik.errors.first_name}</small>) : null}
                            </div>

                            <div>
                                <FormInputBox type="text" className="border p-2.5 block  w-full  border-solid border-[#808080] rounded-lg outline-none"
                                    placeholder="Last  Name" icon={<FaUserCircle />} id="last_name" name="last_name" onChange={formik.handleChange} value={formik.values.last_name} onBlur={formik.handleBlur} />
                                {formik.touched.last_name && formik.errors.last_name ? (<small className="text-red-600">{formik.errors.last_name}</small>) : null}

                            </div>


                        </div>


                        <FormInputBox type="email" className="border p-2.5 mt-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
                            icon={<FaEnvelope />} placeholder="Email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />

                        {formik.touched.email && formik.errors.email ? (<small className="text-red-600">{formik.errors.email}</small>) : null}

                        <FormInputBox type="password" className=" border p-2.5 mt-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
                            placeholder="Password" id="password" name="password" onChange={formik.handleChange} autoComplete="new-password" value={formik.values.password} onBlur={formik.handleBlur} />
                        {formik.touched.password && formik.errors.password ? (<small className="text-red-600">{formik.errors.password}</small>) : null}



                        <FormInputBox type="password" className=" border p-2.5 mt-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
                            placeholder="Confirm Password" id="re_password" onBlur={formik.handleBlur} name="re_password" onChange={formik.handleChange} autoComplete="new-password" value={formik.values.re_password} />

                        {formik.touched.re_password && formik.errors.re_password ? (<small className="text-red-600">{formik.errors.re_password}</small>) : null}
                        <div className='my-3'>
                        <CustomCheckbox type="checkbox" id="acceptedTos"  name="acceptedTos" value={formik.values.acceptedTos} onChange={formik.handleChange} />
                       <label for="acceptedTos"> By signing up on this platform,
                         you agree to EduJobs NG’s</label> <Link className='text-blue underline' to="terms-and-condition"> Terms & Conditions.</Link>
                         <div>
                         {formik.touched.acceptedTos && formik.errors.acceptedTos ? (<small className="text-red-600">{formik.errors.acceptedTos}</small>) : null}

                         </div>
                      
                        </div>

                        {!isLoading && <button disabled={!formik.isValid} className={!formik.isValid  ? 'bg-blue block w-full text-white opacity-25 rounded-sm p-2' : 'bg-blue opacity-100 block w-full text-white rounded-sm p-2'} type="submit">SIGN UP</button>}
                        {isLoading && (
                            <div className='flex justify-center'>
                                <ThreeDots type="ThreeDots"
                                    width={100} height={20} color="blue"
                                />
                            </div>

                        )}
                    </Form>

                )}

            </Formik>
            <div className='flex justify-center my-3'>
                <p> Already have an account?
                    <Link className='underline text-blue' to="/login"> Login</Link>
                </p>
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

            
        </div>
    )
}
