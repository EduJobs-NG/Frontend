import React, { useRef, useContext, useEffect, useState } from 'react'
import { FormInputBox } from '../../../components/Forms/FormInputBox';
import * as Yup from 'yup';
import { useFormik, Formik, Form } from 'formik';
import AuthContext from '../../../context/AuthContext';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { FaBars, FaTimes } from 'react-icons/fa';



const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address"),
    phone_number: Yup.number()
  
  
  })
export const AddEducation = ({show, setShow}) => {
    const onSubmit = () =>{}
    const formik = useFormik({
        initialValues: {
         
    
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    
      })
  return (
    
                <>
        
        <div 
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-full my-6 mx-3 max-w-5xl">

            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
          <FaTimes  onClick={()=> setShow(false)} className='text-blue z-[900] text-[1.3rem] absolute right-5 mt-3 cursor-pointer' />

                <h3 className="text-3xl font-semibold">
                   Add Education
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  
  >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
              <Formik>
           <Form onSubmit={formik.handleSubmit}>
           <div className='grid md:grid-cols-2 md:gap-3'>
              <div className='w-full  max-w-lg'>

                <FormInputBox type="text" label="School Name" className="border p-2.5 block w-full border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="School Name" id="school_name" name="school_name" onChange={formik.handleChange} value={formik.values.school_name} onBlur={formik.handleBlur} />

              </div>
              <div className='w-full md:mt-0 mt-[1rem] max-w-lg'>

                <FormInputBox type="text" label="Degree" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="OND, HND, BSC" id="degree" name="degree" onChange={formik.handleChange} value={formik.values.degree} onBlur={formik.handleBlur} />
              </div>

            </div>

           <div className='grid md:grid-cols-2 mt-[1rem] md:gap-3'>
              <div className='w-full  max-w-lg'>

                <FormInputBox type="text" label="Education Level" className="border p-2.5 block w-full border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="" id="education_level" name="education_level" onChange={formik.handleChange} value={formik.values.education_level} onBlur={formik.handleBlur} />

              </div>
              <div className='w-full md:mt-0 mt-[1rem] max-w-lg'>

                <FormInputBox type="text" label="Grade" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="e.g., upper credit or second class upper" id="grade" name="grade" onChange={formik.handleChange} value={formik.values.grade} onBlur={formik.handleBlur} />
              </div>

            </div>

           <div className='grid md:grid-cols-2 mt-[1rem] md:gap-3'>
              <div className='w-full  max-w-lg'>

                <FormInputBox type="date" label="Start Date" className="border p-2.5 block w-full border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="" id="start_date" name="start_date" onChange={formik.handleChange} value={formik.values.start_date} onBlur={formik.handleBlur} />

              </div>
              <div className='w-full md:mt-0 mt-[1rem] max-w-lg'>

                <FormInputBox type="date" label="End Date" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="" id="end_date" name="end_date" onChange={formik.handleChange} value={formik.values.end_date} onBlur={formik.handleBlur} />
              </div>

            </div>
           </Form>
       </Formik>      
       </div>      {/*footer*/}
    
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
</>
  )
}
