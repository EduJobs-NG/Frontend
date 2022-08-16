import React, { useRef, useContext, useEffect, useState } from 'react'
import { FormInputBox } from '../../../components/Forms/FormInputBox';
import { FaSignInAlt, FaEnvelope, FaLinkedin, FaGoogle } from 'react-icons/fa';
import * as Yup from 'yup';
import { useFormik, Formik, Form } from 'formik';
import AuthContext from '../../../context/AuthContext';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';




const validationSchema = Yup.object({
  // email: Yup.string().email("Invalid email address"),
  // phone_number: Yup.string().phone(null, true, "Has to be a number").min(11,'Has to be up to digits long').max(12, "Can't be more than 12 digits"),


})
export const ContactInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  

 
  const { user, authTokens } = useContext(AuthContext);
  const next_kin_fname = user.contact_info?.next_kin_fname || '';
  const next_kin_lname = user.contact_info?.next_kin_lname || '';
  const next_kin_address = user.contact_info?.next_kin_address || '';
  const next_kin_email = user.contact_info?.next_kin_email || '';
  const next_kin_phone = user.contact_info?.next_kin_phone || '';
  const first_ref_fname = user.contact_info?.first_ref_fname || '';
  const first_ref_lname = user.contact_info?.first_ref_lname || '';
  const first_ref_phone = user.contact_info?.first_ref_phone || '';
  const first_ref_jtitle = user.contact_info?.first_ref_jtitle || '';
  const second_ref_jtitle = user.contact_info?.second_ref_jtitle || '';
  const second_ref_fname = user.contact_info?.second_ref_fname || '';
  const second_ref_lname = user.contact_info?.second_ref_lname || '';
  const second_ref_phone = user.contact_info?.second_ref_phone || '';

  const onSubmit = async (values) => {
    setIsLoading(true)
    const response = await axios
      .put(`${process.env.REACT_APP_BASE_URL}account/user-profile/me/contact_info/{id}/`, values, {
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
      first_ref_fname:first_ref_fname ,
      first_ref_jtitle:first_ref_jtitle ,
      first_ref_lname: first_ref_lname,
      first_ref_phone: first_ref_phone,
      next_kin_address: next_kin_address,
      next_kin_email: next_kin_email,
      next_kin_fname: next_kin_fname,
      next_kin_lname: next_kin_lname,
      next_kin_phone: next_kin_phone,
      second_ref_fname: second_ref_fname,
      second_ref_lname: second_ref_lname,
      second_ref_jtitle: second_ref_jtitle,
      second_ref_phone: second_ref_phone

    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,

  })

  return (
    <section className='bg-white rounded-[40px]'>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <div>

            <h1 className='text-xl font-[700] mb-[1rem]'>Next of Kin Details</h1>
            <div className='grid md:grid-cols-2 md:gap-3'>
              <div className='w-full  max-w-lg'>

                <FormInputBox type="text" label="First Name" className="border p-2.5 block w-full border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="First Name" id="next_kin_fname" name="next_kin_fname" onChange={formik.handleChange} value={formik.values.next_kin_fname} onBlur={formik.handleBlur} />

              </div>
              <div className='w-full md:mt-0 mt-[1rem] max-w-lg'>

                <FormInputBox type="text" label="Last Name" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="Last Name" id="next_kin_lname" name="next_kin_lname" onChange={formik.handleChange} value={formik.values.next_kin_lname} onBlur={formik.handleBlur} />
              </div>

            </div>

            <div className='grid md:grid-cols-2 md:gap-3 mt-[1rem]'>
              <div className='w-full max-w-lg'>

                <FormInputBox type="tel" label="Phone Number" className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="Phone" id="next_kin_phone" name="next_kin_phone" onChange={formik.handleChange} value={formik.values.next_kin_phone} onBlur={formik.handleBlur} />

                {formik.touched.next_kin_phone && formik.errors.next_kin_phone ? (<small className="text-red-600">{formik.errors.next_kin_phone}</small>) : null}
              </div>
              <div className='w-full md:mt-0 mt-[1rem]  max-w-lg'>

                <FormInputBox type="email" label="Email Address" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="Email" id="next_kin_email" name="next_kin_email" onChange={formik.handleChange} value={formik.values.next_kin_email} onBlur={formik.handleBlur} />
                {formik.touched.next_kin_email && formik.errors.next_kin_email ? (<small className="text-red-600">{formik.errors.next_kin_email}</small>) : null}
              </div>

            </div>


            <div className='w-full grid  mt-[1rem]'>
              <label>Home Address</label>
              <textarea value={formik.values.next_kin_address} name="next_kin_address" id="next_kin_address" onChange={formik.handleChange} className='w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 '
                placeholder='Epe, Lagos' cols="100" rows="4">
              </textarea>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            <div className='w-full'>
              <h1 className='text-xl mt-[2.3rem] mb-[1rem] font-[700]'>
                Reference 1
              </h1>
              <div className='w-full  mt-[1rem]  max-w-lg'>

                <FormInputBox type="text" label="First Name" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="First Name" id="first_ref_fname" name="first_ref_fname" onChange={formik.handleChange} value={formik.values.first_ref_fname} onBlur={formik.handleBlur} />
              </div>
              <div className='w-full  mt-[1rem]  max-w-lg'>

                <FormInputBox type="text" label="Last Name" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="Last Name" id="first_ref_lname" name="first_ref_lname" onChange={formik.handleChange} value={formik.values.first_ref_lname} onBlur={formik.handleBlur} />
              </div>
              <div className='w-full  mt-[1rem]  max-w-lg'>

                <FormInputBox type="tel" label="Phone Number" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="Phone Number" id="first_ref_phone" name="first_ref_phone" onChange={formik.handleChange} value={formik.values.first_ref_phone} onBlur={formik.handleBlur} />
                {formik.touched.first_ref_phone && formik.errors.first_ref_phone ? (<small className="text-red-600">{formik.errors.first_ref_phone}</small>) : null}
              </div>
              <div className='w-full  mt-[1rem]  max-w-lg'>

                <FormInputBox type="text" label="Job Title" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="Job Title" id="first_ref_jtitle" name="first_ref_jtitle" onChange={formik.handleChange} value={formik.values.first_ref_jtitle} onBlur={formik.handleBlur} />
              </div>
            </div>

            <div>
              <h1 className='text-xl mt-[2.3rem] mb-[1rem]  font-[700]'>
                Reference 2
              </h1>

              <div className='w-full  mt-[1rem]  max-w-lg'>

                <FormInputBox type="text" label="First Name" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="First Name" id="second_ref_fname" name="second_ref_fname" onChange={formik.handleChange} value={formik.values.second_ref_fname} onBlur={formik.handleBlur} />
              </div>
              <div className='w-full  mt-[1rem]  max-w-lg'>

                <FormInputBox type="text" label="Last Name" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="Last Name" id="second_ref_lname" name="second_ref_lname" onChange={formik.handleChange} value={formik.values.second_ref_lname} onBlur={formik.handleBlur} />
              </div>
              <div className='w-full  mt-[1rem]  max-w-lg'>

                <FormInputBox type="tel" label="Phone Number" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="Phone Number" id="first_ref_phone" name="first_ref_phone" onChange={formik.handleChange} value={formik.values.first_ref_phone} onBlur={formik.handleBlur} />
                {formik.touched.second_ref_phone && formik.errors.second_ref_phone ? (<small className="text-red-600">{formik.errors.second_ref_phone}</small>) : null}
              </div>
              <div className='w-full  mt-[1rem]  max-w-lg'>

                <FormInputBox type="text" label="Job Title" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="Job Title" id="second_ref_jtitle" name="second_ref_jtitle" onChange={formik.handleChange} value={formik.values.second_ref_jtitle} onBlur={formik.handleBlur} />
              </div>
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

    </section>
  )
}
