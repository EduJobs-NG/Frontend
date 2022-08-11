import React, { useRef, useContext, useEffect, useState } from 'react'
import { FormInputBox } from '../../../components/Forms/FormInputBox';
import { FaSignInAlt, FaEnvelope, FaLinkedin, FaGoogle } from 'react-icons/fa';
import * as Yup from 'yup';
import { useFormik, Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';


const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required('Required'),
  password: Yup.string().min(8, "Enter your password").required('Required')

})
export const PersonalInfo = () => {
 
  const { user, getUserMeHandler } = useContext(AuthContext);
  const first_name = user.user && user.user.first_name;
  const last_name = user.user && user.user.last_name;
  const middle_name = user.user ? user.user.middle_name: '';
  // useEffect(() => {
  //   getUserMeHandler();
  // }, [])
  const onSubmit = () => { }

  const formik = useFormik({
    initialValues: {
      first_name:first_name,
      middle_name: middle_name,
      last_name:last_name

    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,

  })

  return (
    <section className='bg-white rounded-[40px]'>
      <Formik>
        <Form>
          <div className='flex w-full  md:flex-row justify-between gap-x-[1rem]'>
            <div className='w-full max-w-lg'>

              <FormInputBox type="text" label="First Name" className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                placeholder="First Name" id="first_name" name="first_name" onChange={formik.handleChange} value={formik.values.first_name} onBlur={formik.handleBlur} />

              {formik.touched.first_name && formik.errors.first_name ? (<small className="text-red-600">{formik.errors.first_name}</small>) : null}
            </div>
            <div className='w-full  max-w-lg'>

              <FormInputBox type="text" label="Middle Name" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Middle Name" id="middle_name" name="middle_name" onChange={formik.handleChange} value={formik.values.middle_name} onBlur={formik.handleBlur} />
              {formik.touched.middle_name && formik.errors.middle_name ? (<small className="text-red-600">{formik.errors.middle_name}</small>) : null}
            </div>

          </div>

          <div className='flex mt-[2rem] w-full  md:flex-row justify-between gap-x-[1rem]'>
            <div className='w-full max-w-lg'>

              <FormInputBox type="text" label="Last Name" className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Last Name" id="last_name" name="last_name" onChange={formik.handleChange} value={formik.values.last_name} onBlur={formik.handleBlur} />

              {formik.touched.last_name && formik.errors.last_name ? (<small className="text-red-600">{formik.errors.last_name}</small>) : null}
            </div>
            <div className='w-full  max-w-lg'>

              <FormInputBox type="text" label="Gender" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Gender" id="gender" name="gender" onChange={formik.handleChange} value={formik.values.gender} onBlur={formik.handleBlur} />
              {formik.touched.middle_name && formik.errors.middle_name ? (<small className="text-red-600">{formik.errors.middle_name}</small>) : null}
            </div>

          </div>

        </Form>

      </Formik>

    </section>
  )
}
