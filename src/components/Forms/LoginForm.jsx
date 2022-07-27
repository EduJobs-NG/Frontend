import React, { useRef, useContext } from 'react'
import { FormInputBox } from './FormInputBox';
import { FaSignInAlt, FaEnvelope, FaLinkedin, FaGoogle } from 'react-icons/fa';
import * as Yup from 'yup';
import { useFormik, Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required('Required'),
    password: Yup.string().min(8, "Enter your password").required('Required')

})



export const LoginForm = () => {
    const { loginUser } = useContext(AuthContext);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        validateOnBlur: true,
        onSubmit: loginUser,
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

                <Formik>
                    {() => (

                        <Form onSubmit={loginUser}>
                            <FormInputBox type="text" name="email" id="email" className="border p-2.5 block my-[1.6rem]  w-full  border-solid border-[#808080] rounded-lg outline-none" icon={<FaEnvelope />}
                                onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} placeholder="Email Address" />
                            {formik.touched.email && formik.errors.email ? (<small className="text-red-600">{formik.errors.email}</small>) : null}



                            <FormInputBox type="password" name="password" id="password" className="border p-2.5 my-[1.6rem] block w-full  border-solid border-[#808080] rounded-lg outline-none"
                                onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} placeholder="Password" />

                            {formik.touched.password && formik.errors.password ? (<small className="text-red-600">{formik.errors.password}</small>) : null}


                            <div>
                                <button disabled={!formik.isValid} type="submit" className={!formik.isValid ? 'bg-blue block w-full text-white opacity-25 rounded-sm p-2' : 'bg-blue opacity-100 block w-full text-white rounded-sm p-2'}>LOG IN</button>
                            </div>
                            <div className='flex justify-between mt-[1rem] mb-[1.2rem] '>
                                <small><a className='text-blue underline' href="#">Forgot Password?</a></small>
                                <small>Don't have an account?<Link className="text-blue underline" to="/register">Sign up</Link></small>
                            </div>

                            <div>
                                {/* <p className='text-center'>OR</p> */}
                            </div>
                        </Form>
                    )}

                </Formik>


            </div>
        </section>
    )
}
