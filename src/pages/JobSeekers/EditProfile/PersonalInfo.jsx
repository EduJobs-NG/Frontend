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
  const email = user.user ? user.user.email: '';
  const home_address = user ? user.home_address: '';
  // useEffect(() => {
  //   getUserMeHandler();
  // }, [])
  const onSubmit = () => { }

  const formik = useFormik({
    initialValues: {
      first_name:first_name,
      middle_name: middle_name,
      last_name:last_name,
      phone_number:'',
      email:email,
      home_address:home_address,
      city:'',
      state:'',
      facebook:'',
      instagram:'',
      twitter:'',
      linkedin:''

    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,

  })

  return (
    <section className='bg-white rounded-[40px]'>
      <Formik>
        <Form>
          <div className='flex w-full  md:flex-row justify-between gap-x-[2rem]'>
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

          <div className='flex mt-[2rem] w-full  md:flex-row justify-between gap-x-[2rem]'>
            <div className='w-full max-w-lg'>

              <FormInputBox type="text" label="Last Name" className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Last Name" id="last_name" name="last_name" onChange={formik.handleChange} value={formik.values.last_name} onBlur={formik.handleBlur} />

              {formik.touched.last_name && formik.errors.last_name ? (<small className="text-red-600">{formik.errors.last_name}</small>) : null}
            </div>
            <div className='w-full  max-w-lg'>

              <FormInputBox type="text" label="Gender" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Gender" id="gender" name="gender" onChange={formik.handleChange} value={formik.values.gender} onBlur={formik.handleBlur} />
              {formik.touched.gender && formik.errors.gender ? (<small className="text-red-600">{formik.errors.gender}</small>) : null}
            </div>

          </div>

          <div className='flex mt-[2rem] w-full  md:flex-row justify-between gap-x-[2rem]'>
            <div className='w-full max-w-lg'>

              <FormInputBox type="text" label="Phone Number" className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Phone Number" id="phone_number" name="Phone Number" onChange={formik.handleChange} value={formik.values.phone_number} onBlur={formik.handleBlur} />

              {formik.touched.phone_number && formik.errors.phone_number ? (<small className="text-red-600">{formik.errors.phone_number}</small>) : null}
            </div>
            <div className='w-full  max-w-lg'>

              <FormInputBox type="text" label="email" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Email" id="gender" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
              {formik.touched.email && formik.errors.email ? (<small className="text-red-600">{formik.errors.email}</small>) : null}
            </div>

          </div>

          <div className='w-full  max-w-lg'>
            <label>Home Address</label>
          <textarea value={formik.values.home_address} onChange={formik.handleChange} className='w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 ' placeholder='Give a short description of yourself to help employers know more about you.' name="" id="" cols="100" rows="7">
</textarea>
</div>

        </Form>

      </Formik>

    </section>
  )
}
