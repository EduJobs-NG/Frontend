import React, { useRef, useContext, useEffect, useState } from 'react'
import { FormInputBox } from '../../../components/Forms/FormInputBox';
import { FaSignInAlt, FaEnvelope, FaLinkedin, FaGoogle } from 'react-icons/fa';
import * as Yup from 'yup';
import { useFormik, Formik, Form } from 'formik';
import AuthContext from '../../../context/AuthContext';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';


const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address"),
  // phone_number: Yup.string().phone(null, true, "Has to be a number").min(11,'Has to be up to digits long').max(12, "Can't be more than 12 digits"),


})
export const PersonalInfo = () => {
  const [isLoading, setIsLoading] = useState(false);


  const { user, authTokens, loading } = useContext(AuthContext);
  const first_name = user.user?.first_name || '';
  const last_name = user.user?.last_name || '';
  const middle_name = user?.middle_name || '';
  const email = user.user?.email || '';
  const home_address = user?.home_address || '';
  const phone_number = user?.phone_number || '';
  const city = user?.city || '';
  const state = user?.state || '';
  const gender = user?.gender || '';
  const facebook_url = user?.facebook_url || '';
  const twitter_url = user?.twitter_url || '';
  const linkedin_url = user?.linkedin_url || '';
  const instagram_url = user?.instagram_url || '';

  const onSubmit = async (values) => {
    setIsLoading(true)
    const response = await axios
      .put(`${process.env.REACT_APP_BASE_URL}account/user-profile-update/`, values, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${authTokens.auth_token}`
        }
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
      });

    if (response) {
      setIsLoading(false)
      console.log(response)


    }
  }

  const formik = useFormik({
    initialValues: {
      first_name: first_name,
      middle_name: middle_name,
      last_name: last_name,
      phone_number: phone_number,
      email: email,
      gender: gender,
      home_address: home_address,
      city: city,
      state: state,
      facebook_url: facebook_url,
      instagram_url: instagram_url,
      twitter_url: twitter_url,
      linkedin_url: linkedin_url

    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,

  })

  return (
    <section className='bg-white rounded-[40px]'>
      {loading && <p>loading...</p>}
      {!loading &&
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <div className='grid md:grid-cols-2 md:gap-3'>
            <div className='w-full  max-w-lg'>

              <FormInputBox type="text" label="First Name" className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                placeholder="First Name" id="first_name" name="first_name" onChange={formik.handleChange} value={formik.values.first_name} onBlur={formik.handleBlur} />

              {formik.touched.first_name && formik.errors.first_name ? (<small className="text-red-600">{formik.errors.first_name}</small>) : null}
            </div>
            <div className='w-full md:mt-0 mt-[1rem] max-w-lg'>

              <FormInputBox type="text" label="Middle Name" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Middle Name" id="middle_name" name="middle_name" onChange={formik.handleChange} value={formik.values.middle_name} onBlur={formik.handleBlur} />
              {formik.touched.middle_name && formik.errors.middle_name ? (<small className="text-red-600">{formik.errors.middle_name}</small>) : null}
            </div>

          </div>

          <div className='grid md:grid-cols-2 md:gap-3 mt-[1rem]'>
            <div className='w-full max-w-lg'>

              <FormInputBox type="text" label="Last Name" className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Last Name" id="last_name" name="last_name" onChange={formik.handleChange} value={formik.values.last_name} onBlur={formik.handleBlur} />

              {formik.touched.last_name && formik.errors.last_name ? (<small className="text-red-600">{formik.errors.last_name}</small>) : null}
            </div>
            <div className='w-full md:mt-0 mt-[1rem]  max-w-lg'>

              <FormInputBox type="text" label="Gender" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Gender" id="gender" name="gender" onChange={formik.handleChange} value={formik.values.gender} onBlur={formik.handleBlur} />
              {formik.touched.gender && formik.errors.gender ? (<small className="text-red-600">{formik.errors.gender}</small>) : null}
            </div>

          </div>

          <div className='grid  md:grid-cols-2 md:gap-3 mt-[1rem]'>
            <div className='w-full max-w-lg'>

              <FormInputBox type="tel" label="Phone Number" className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Phone Number" id="phone_number" name="phone_number" onChange={formik.handleChange} value={formik.values.phone_number} onBlur={formik.handleBlur} />

              {formik.touched.phone_number && formik.errors.phone_number ? (<small className="text-red-600">{formik.errors.phone_number}</small>) : null}
            </div>
            <div className='w-full md:mt-0 mt-[1rem]  max-w-lg'>

              <FormInputBox type="email" label="Email" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Email" id="gender" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
              {formik.touched.email && formik.errors.email ? (<small className="text-red-600">{formik.errors.email}</small>) : null}
            </div>

          </div>

          <div className='w-full grid  mt-[1rem]'>
            <label>Home Address</label>
            <textarea value={formik.values.home_address} name="home_address" id="home_address" onChange={formik.handleChange} className='w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 '
              placeholder='Epe, Lagos' cols="100" rows="4">
            </textarea>
          </div>

          <div className='grid md:grid-cols-2 md:gap-3 mt-[1rem]'>
            <div className='w-full max-w-lg'>

              <FormInputBox type="text" label="City" className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                placeholder="City" id="city" name="city" onChange={formik.handleChange} value={formik.values.city} onBlur={formik.handleBlur} />

              {formik.touched.city && formik.errors.city ? (<small className="text-red-600">{formik.errors.city}</small>) : null}
            </div>
            <div className='w-full md:mt-0 mt-[1rem]  max-w-lg'>

              <FormInputBox type="text" label="State" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                placeholder="State" id="state" name="state" onChange={formik.handleChange} value={formik.values.state} onBlur={formik.handleBlur} />
              {formik.touched.state && formik.errors.state ? (<small className="text-red-600">{formik.errors.state}</small>) : null}
            </div>

          </div>


          <h1 className='text-2xl mt-[2.3rem] font-[700]'>
            Social Media Links
          </h1>

          <div className='grid md:grid-cols-2 md:gap-3 mt-[1rem]'>
            <div className='w-full max-w-lg'>

              <FormInputBox type="url" label="Facebook" className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Facebook" id="facebook_url" name="facebook_url" onChange={formik.handleChange} value={formik.values.facebook_url} onBlur={formik.handleBlur} />

            </div>
            <div className='w-full md:mt-0 mt-[1rem]  max-w-lg'>

              <FormInputBox type="url" label="Linkedin" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Linkedin" id="linkedin_url" name="linkedin_url" onChange={formik.handleChange} value={formik.values.linkedin_url} onBlur={formik.handleBlur} />
            </div>

          </div>

          <div className='grid md:grid-cols-2 md:gap-3 mt-[1rem]'>
            <div className='w-full max-w-lg'>

              <FormInputBox type="url" label="Twitter" className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Twitter" id="twitter_url" name="twitter_url" onChange={formik.handleChange} value={formik.values.twitter_url} onBlur={formik.handleBlur} />

            </div>
            <div className='w-full md:mt-0 mt-[1rem]  max-w-lg'>

              <FormInputBox type="url" label="Instagram" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Instagram" id="instagram_url" name="instagram_url" onChange={formik.handleChange} value={formik.values.instagram_url} onBlur={formik.handleBlur} />
            </div>

          </div>

          <div className='mt-[3rem] flex justify-center'>
            {!isLoading && <button className='bg-blue opacity-100  px-[5rem] text-white rounded-sm p-2' type="submit">SAVE</button>}
            {isLoading && (
              <div className='flex justify-center'>
                <ThreeDots type="ThreeDots"
                  width={100} height={20} color="blue"
                />
              </div>
            )}
          </div>
        </Form>

      </Formik>
}
    </section>
  )
}
