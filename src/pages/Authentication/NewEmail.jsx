import React, {useState} from 'react';
import envelope from '../../assets/messageIcon.png';
import { Formik, Form, useFormik } from 'formik';
import { FormInputBox } from '../../components/Forms/FormInputBox';
import { FaEnvelope } from 'react-icons/fa';
import * as Yup from 'yup';
import {ThreeDots} from 'react-loader-spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const validationSchema = Yup.object({
  new_email: Yup.string().email("Invalid email address").required('Required'),

})

export const NewEmail = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (values) => {
    setIsLoading(true);
    
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}jobseeker/users/reset_email_confirm/`,
    values)
      .catch(err => {
        toast.error(err.message)
        setIsLoading(false)
        // console.log(err)
      })

    if (response) {
      setIsLoading(false)
      toast.success('Email has been reset successfully.')
      setTimeout(() =>{
        navigate('/login')

      }, 3000)

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
    <section className="bg-blue" >
    <ToastContainer />

    <div className="container mx-auto  h-screen  flex flex-col justify-center items-center text-center " >
      <div className="w-full max-w-[500px] py-[2rem] px-[1rem] rounded-[30px] bg-white">

      <div className="flex justify-center">
        <img src={envelope} alt="" />
      </div>

      <h1 className=" text-black font-[700] text-2xl">Reset New Email</h1>
      <p className="mt-4 max-w-[500px]">
        Kindly enter the new email you'd like to register.
      </p>
      <div className="flex justify-center">
      <Formik>
        <div className="w-full max-w-[380px]">
          <div className="text-left  mt-[1.8rem]">
            <Form onSubmit={formik.handleSubmit}>
              <FormInputBox
                type="text"
                name="new_email"
                id="email"
                className="border p-2.5 block w-full border-solid border-[#808080] rounded-lg outline-none"
                icon={<FaEnvelope />}
                onChange={formik.handleChange}
                value={formik.values.new_email}
                onBlur={formik.handleBlur}
                placeholder="Email Address"
              />
              {formik.touched.new_email && formik.errors.new_email ? (
                <small className="text-red-600">{formik.errors.new_email}</small>
              ) : null}

              <div className="mt-[1rem]">
                {!isLoading && (
                  <button
                    disabled={!formik.isValid}
                    className={
                      !formik.isValid
                        ? "bg-blue block w-full text-white opacity-25 rounded-sm p-2"
                        : "bg-blue opacity-100 block w-full text-white rounded-sm p-2"
                    }
                    type="submit"
                  >
                    SEND LINK
                  </button>
                )}
                {isLoading && (
                  <div className="flex justify-center">
                    <ThreeDots
                      type="ThreeDots"
                      width={100}
                      height={20}
                      color="blue"
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
