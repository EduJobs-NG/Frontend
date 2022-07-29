import React, { useState } from 'react';
import password from '../assets/password.png';
import { Formik, Form, useFormik } from 'formik';
import { FormInputBox } from '../components/Forms/FormInputBox';
import * as Yup from 'yup';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios'


const validationSchema = Yup.object({
  re_password: Yup.string().min(8).required('Required').matches(
    /^(?=.*[a-z])(?=.*[0-9])/,
    "Must Contain 8 Characters of letters & numbers"
  ),
  re_new_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')

})

export const ResetPassword = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(true);


  const onSubmit = async (values) => {
    setIsLoading(true);
    const response = await axios.post('https://edujobsng.herokuapp.com/api/v1/auth/users/reset_password/', values)
      .catch(err => {
        setError(err.message)
        setIsLoading(false)
        console.log(err)
      })

    if (response) {
      setShow(false)
      setIsLoading(false)
      setSuccess('A reset link has been sent to the provided email address.')

      console.log(response)
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
    <section className='container mx-auto mt-[3rem] h-screen w-full  flex flex-col justify-center items-center text-center '>
      <div className='rounded-full bg-[#d5d3fe] p-5'>
        <img src={password} alt="" />
      </div>
      <div className="w-full max-w-[500px]">

      {success && (

        <div className="p-3 my-3  text-center">
          <p className="bg-green-600 text-white p-2 rounded-md">{success}</p>
        </div>
      )}

      {show && (
        <>
          <h1 className=' text-black font-[700] text-2xl'>Change Password</h1>
          <p className='mt-4'>Create a new Password with at least 8 characters and must include an uppercase letter and a number.</p>
          {error && (

            <div className="p-3 my-4 text-center">
              <p className="bg-red-600 text-white p-2 rounded-md">{error}</p>
            </div>
          )}


          <Formik>
            <div className='text-left mt-[1.8rem]'>
              <Form onSubmit={formik.handleSubmit}>
                <FormInputBox type="password" name="new_password" id="new_password" className="border p-2.5 mt-[1.6rem] block w-full   border-solid border-[#808080] rounded-lg outline-none"
                  onChange={formik.handleChange} value={formik.values.new_password} onBlur={formik.handleBlur} placeholder="Password" />

                {formik.touched.new_password && formik.errors.new_password ? (<small className="text-red-600">{formik.errors.new_password}</small>) : null}

                <FormInputBox type="password" className=" border p-2.5 my-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="Confirm Password" id="re_new_passowrd" onBlur={formik.handleBlur} name="re_new_passowrd" onChange={formik.handleChange} autoComplete="new-password" value={formik.new_password} />

                {/* {formik.touched.re_new_passowrd && formik.errors.re_new_passowrd ? (<small className="text-red-600">{formik.errors.re_new_passowrd}</small>) : null} */}
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
          </Formik>
        </>

      )}

      <div className="text-center mt-[5rem]">
        <h1 className="text-blue font-[700]">EduJobsNg</h1>
        <p>All Rights Reserved</p>

      </div>
      </div>

    </section>
  )
}

