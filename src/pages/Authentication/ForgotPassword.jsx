import React, { useState } from 'react';
import password from '../../assets/password.png';
import { Formik, Form, useFormik } from 'formik';
import { FormInputBox } from '../../components/Forms/FormInputBox';
import { FaEnvelope } from 'react-icons/fa';
import * as Yup from 'yup';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required('Required'),

})

export const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);



  const onSubmit = async (values) => {
    setIsLoading(true);
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}users/reset_password/`, values)
      .catch(err => {
        toast.error(err.message)
        setIsLoading(false)
        console.log(err)
      })

    if (response) {
      setIsLoading(false)
      toast.success('A reset link has been sent to the provided email address.')

    }

  }

  const formik = useFormik({
    initialValues: {
      email: '',

    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,

  })
  return (
    <section className='container mx-auto mt-[3rem] h-screen  flex flex-col justify-center items-center text-center '>
            <ToastContainer />

      <div className='rounded-full bg-[#d5d3fe] p-5'>
        <img src={password} alt="" />
      </div>


      <h1 className=' text-black font-[700] text-2xl'>Forgot Password</h1>
      <p className='mt-4 max-w-[500px]'>Kindly enter your registered email addess below and a resent link wil be sent.
        Kindly click on it to reset your password.</p>
     




      <Formik>
        <div className='w-full max-w-[380px]'>
          <div className='text-left  mt-[1.8rem]'>
            <Form onSubmit={formik.handleSubmit}>
              <FormInputBox type="text" name="email" id="email" className="border p-2.5 block w-full border-solid border-[#808080] rounded-lg outline-none" icon={<FaEnvelope />}
                onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} placeholder="Email Address" />
              {formik.touched.email && formik.errors.email ? (<small className="text-red-600">{formik.errors.email}</small>) : null}

              <div className='mt-[1rem]'>
                {!isLoading && <button disabled={!formik.isValid} className={!formik.isValid ? 'bg-blue block w-full text-white opacity-25 rounded-sm p-2' : 'bg-blue opacity-100 block w-full text-white rounded-sm p-2'} type="submit">SEND LINK</button>}
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



      <div className="text-center mt-[5rem]">
        <h1 className="text-blue font-[700]">EduJobsNg</h1>
        <p>All Rights Reserved</p>

      </div>



    </section>
  )
}
