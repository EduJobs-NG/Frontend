import React, {useState} from 'react';
import password from '../../assets/password.png';
import { Formik, Form, useFormik } from 'formik';
import { FormInputBox } from '../../components/Forms/FormInputBox';
import { FaEnvelope } from 'react-icons/fa';
import * as Yup from 'yup';
import {ThreeDots} from 'react-loader-spinner';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';



const validationSchema = Yup.object({
  new_email: Yup.string().email("Invalid email address").required('Required'),

})

export const NewEmail = () => {
  const navigate = useNavigate();
  const {uid, token} = useParams();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(true);
  const onSubmit = async (values) => {
    setIsLoading(true);
    // const {new_password, re_new_password} = values;
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}users/reset_email_confirm/`,
    values)
      .catch(err => {
        const {data} = err.response;
        setError("Something went wrong. Try again")
        setIsLoading(false)
        console.log(err)
      })

    if (response) {
      setShow(false)
      setIsLoading(false)
      setSuccess('Email has been reset successfully.')
      setTimeout(() =>{
        navigate('/login')

      }, 1000)

      // console.log(response)
    }

  }

  const formik = useFormik({
    initialValues: {
      new_email: '',

    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,

  })
  return (
    <section className='container mx-auto mt-[3rem] h-screen  flex flex-col justify-center items-center text-center '>

      <div className='rounded-full bg-[#d5d3fe] p-5'>
        <img src={password} alt="" />
      </div>
     
     
      {success && (


<div className="p-3 my-3 max-w-[500px] text-center">
  <p className="bg-green-600 text-white p-2 rounded-md">{success}</p>
</div>
)}


{show && (
  <>
      <h1 className=' text-black font-[700] text-2xl'>Reset Email</h1>
      <p className='mt-4 max-w-[500px]'>Kindly choose a new email.</p>
        {error && (

<div className="p-3 my-4  text-center">
  <p className="bg-red-600 text-white p-2 rounded-md">{error}</p>
</div>
)}




<Formik>
<div className='w-full max-w-[380px]'>
        <div className='text-left  mt-[1.8rem]'>
        <Form onSubmit={formik.handleSubmit}>
          <FormInputBox type="text" name="new_email" id="new_email" className="border p-2.5 block w-full border-solid border-[#808080] rounded-lg outline-none" icon={<FaEnvelope />}
            onChange={formik.handleChange} value={formik.values.new_email} onBlur={formik.handleBlur} placeholder="Email Address" />
          {formik.touched.new_email && formik.errors.new_email ? (<small className="text-red-600">{formik.errors.new_email}</small>) : null}
          
          <div className='mt-[1rem]'>
          {!isLoading && <button disabled={!formik.isValid } className={!formik.isValid  ? 'bg-blue block w-full text-white opacity-25 rounded-sm p-2':'bg-blue opacity-100 block w-full text-white rounded-sm p-2' } type="submit">SUBMIT</button>}
     {isLoading && (
        <div  className="flex justify-center">
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
</>

)}

      <div className="text-center mt-[5rem]">
        <h1 className="text-blue font-[700]">EduJobsNg</h1>
        <p>All Rights Reserved</p>

      </div>
      


    </section>
  )
}
