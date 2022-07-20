import React from 'react'
import { FormInputBox } from './FormInputBox';
import {FaSignInAlt,FaEnvelope, FaLinkedin, FaGoogle} from 'react-icons/fa'
import {Formik, Form} from 'formik'

export const LoginForm  = () => {
  return (
    <section>
 <div className='border bg-white p-2 py-[2rem] px-[42px]  rounded-[50px] lg:w-[500px]'>
            <div className='flex my-4 gap-x-[1rem] justify-center '>
             <FaSignInAlt className='text-[2rem] text-blue' />
             <div className='h-[2.5rem] w-[3px] bg-black'></div>
            <h2 className="title text-blue  text-[24px] font-[700]">LOG IN</h2>
            </div>

            <Formik>
                <Form>
                    <FormInputBox type="text" name="email" id="email" className="border p-2.5 block my-[1.6rem]  w-full  border-solid border-[#808080] rounded-lg outline-none" icon={<FaEnvelope />} placeholder="Email Address" />
                    <FormInputBox type="password" name="password" id="password" className="border p-2.5 my-[1.6rem] block w-full  border-solid border-[#808080] rounded-lg outline-none" placeholder="Password" />

                    <div>
                        <button type="submit" className='bg-blue opacity-100 block w-full text-white rounded-sm p-2'>LOG IN</button>
                    </div>
                    <div className='flex justify-between mt-[1rem] mb-[1.2rem] '>
                        <small><a className='text-blue underline' href="#">Forgot Password?</a></small>
                        <small>Don't have an account?<a className="text-blue underline" href="#">Sign up</a></small>
                    </div>

                    <div>
                        <p className='text-center'>OR</p>
                    </div>
                </Form>
            </Formik>


</div>
    </section>
  )
}
