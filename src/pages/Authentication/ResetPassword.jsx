import React, { useState } from 'react';
import password from '../../assets/password.png';
import { Formik, Form, useFormik } from 'formik';
import { FormInputBox } from '../../components/Forms/FormInputBox';
import * as Yup from 'yup';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtDecode from "jwt-decode";


const validationSchema = Yup.object({
  new_password: Yup.string().min(8).required('Required').matches(
    /^(?=.*[a-z])(?=.*[0-9])/,
    "Must Contain 8 Characters of letters & numbers"
  ),
  re_new_password: Yup.string().required('Required')
    .oneOf([Yup.ref('new_password'), null], 'Passwords must match')

})

export const ResetPassword = () => {
  const navigate = useNavigate();
  const { uid, token } = useParams();
  const [isLoading, setIsLoading] = useState(false);



  const onSubmit = async (values) => {
    setIsLoading(true);
    const { new_password, re_new_password } = values;
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}jobseeker/user/account/reset_password_confirm/`,
      { uid, token, new_password, re_new_password })
      .catch(err => {
        toast.error("Something went wrong. Try again")
    
        setIsLoading(false)
        console.log(err)
      })

    if (response && response.data) {
       
      setIsLoading(false)
      console.log(response)
      toast.success('Password has been reset successfully.')
      const {is_jobseeker, is_employer} =  response.data
      if(is_jobseeker === true){
        setTimeout(() => {
          navigate('/jobseeker/login')
  
        }, 2500)
      }

      if(is_employer === true){
        setTimeout(() => {
          navigate('/employer/login')
  
        }, 2500)
      }
     

    }

  }

  const formik = useFormik({
    initialValues: {
      new_password: '',
      re_new_password: '',

    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,

  })
  return (
    <section className="bg-blue" >
      <ToastContainer />

      <div className="container mx-auto  h-screen  flex flex-col justify-center items-center text-center " >
        <div className="w-full max-w-[500px] py-[2rem] px-[1rem] rounded-[30px] bg-white">

      <div className='flex justify-center'>
        <img src={password} alt="" />
      </div>

      <div className='max-w-[380px] mx-auto'>

        <h1 className=' text-black font-[700] text-2xl'>Change Password</h1>
        <p className='mt-4'>Create a new Password with at least 8 characters and must include an uppercase letter and a number.</p>

      </div>


<div className='flex justify-center'>

      <Formik>
        <div className="w-full max-w-[380px]">
          <div className='text-left mt-[1.8rem]'>
            <Form onSubmit={formik.handleSubmit}>
              <FormInputBox type="password" name="new_password" id="new_password" className="border p-2.5 mt-[1.6rem] block w-full   border-solid border-[#808080] rounded-lg outline-none"
                onChange={formik.handleChange} value={formik.values.new_password} onBlur={formik.handleBlur} placeholder="New Password" />

              {formik.touched.new_password && formik.errors.new_password ? (<small className="text-red-600">{formik.errors.new_password}</small>) : null}

              <FormInputBox type="password" name="re_new_password" id="re_new_password" className=" border p-2.5 mt-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Confirm Password" onBlur={formik.handleBlur} onChange={formik.handleChange} autoComplete="new-password" value={formik.new_password} />

              {formik.touched.re_new_password && formik.errors.re_new_password ? (<small className="text-red-600">{formik.errors.re_new_password}</small>) : null}
              <div className='mt-[1rem]'>
                {!isLoading && <button disabled={!formik.isValid} className={!formik.isValid ? 'bg-blue block w-full text-white opacity-25 rounded-sm p-2' : 'bg-blue opacity-100 block w-full text-white rounded-sm p-2'} type="submit">RESET PASSWORD</button>}
                {isLoading && (
                  <div className="flex justify-center">
                    <ThreeDots type="ThreeDots"
                      width={100} height={20} color="blue"
                    />

                  </div>

                )}
              </div>

            </Form>

          </div>
        </div>
      </Formik>
      </div>

</div>
</div>

    </section>
  )
}

