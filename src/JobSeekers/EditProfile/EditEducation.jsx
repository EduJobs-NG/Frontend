import React, { useRef, useContext, useEffect, useState } from 'react'
import { FormInputBox } from '../../components/Forms/FormInputBox';
import * as Yup from 'yup';
import { useFormik, Formik, Form } from 'formik';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { FaBars, FaTimes } from 'react-icons/fa';
import CustomSelect from '../../components/Forms/CustomSelect';
import AuthContext from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxios from '../../utils/useAxios';

const validationSchema = Yup.object({
  
  })
export const EditEducation = ({setShowEdit, item}) => {
  const {authTokens, getUserMeHandler } = useContext(AuthContext);
  const {school_name, degree, grade, educational_level, start_of_education, study_summary, end_of_education} = item;
  const [isLoading, setIsLoading] = useState(false);
  const api = useAxios();
  const onSubmit = async (values) => {
    setIsLoading(true)
      const response = await api.put(`jobseeker/user-profile/me/professional_info/${item.id}/`, values)
      .catch(err => {
        console.log(err)
        toast.error(err)
        setIsLoading(false)
      });

    if (response) {
      setIsLoading(false)
      setShowEdit(false)
      toast.success('Your changes have been successfully saved')
      getUserMeHandler()
      console.log(response)
    

    }
  }
    const formik = useFormik({
      initialValues: {
        degree,
        school_name,
        start_of_education,
        end_of_education,
        educational_level,
        study_summary,
        grade
  
      },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    
      })
  return (
    
                <>
        
        <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <ToastContainer />

          <div className="relative w-full mt-[20rem] md:mt-[8rem] my-6 mx-3 max-w-5xl">

            {/*content*/}
            <div className="border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex  items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">

          <FaTimes  onClick={()=> setShowEdit(false)} className='text-blue z-[900] text-[1.3rem] absolute right-5 cursor-pointer' />

                <h3 className="text-[1.2rem] font-semibold">
                   Edit Degree {item.degree} 
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
              {formik.touched.school_name && formik.errors.school_name ? (<small className="text-red-600">{formik.errors.school_name}</small>) : null}

              </div>
              <div className='w-full md:mt-0 mt-[1rem] max-w-lg'>

              <CustomSelect
            label="Grade"
            name="grade"
            placeholder="Select a Grade"
             className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"  
             onChange={formik.handleChange}
          >
            <option value="">Select a degree</option>
            <option value="First Class">First Class</option>
            <option value="Second Class Upper">Second Class Upper</option>
            <option value="Second Class Lower">Second Class Lower</option>
            <option value="Third Class">Third Class</option>
            <option value="Distinction">Distinction</option>
            <option value="Upper Credit">Upper Credit</option>
            <option value="Lower Credit">Lower Credit</option>
            <option value="Pass">Pass</option>
            <option value="Others">Others</option>
          </CustomSelect>
          {formik.touched.grade && formik.errors.grade ? (<small className="text-red-600">{formik.errors.grade}</small>) : null}

              </div>

            </div>

           <div className='grid md:grid-cols-2 mt-[1rem] md:gap-3'>
              <div className='w-full  max-w-lg'>
              <CustomSelect
            label="Education Level"
            name="educational_level"
            id="educational_level"
            placeholder=""
             className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"  
             onChange={formik.handleChange}
          >
            <option value="">Select a Level</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Post Graduate</option>
            <option value="graduate">Graduate</option>
           
          </CustomSelect>
                
          {formik.touched.educational_level && formik.errors.educational_level ? (<small className="text-red-600">{formik.errors.educational_level}</small>) : null}

              </div>
              <div className='w-full md:mt-0 mt-[1rem] max-w-lg'>

                <FormInputBox type="text" label="Degree" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="e.g. B.Sc Elect/Elect" id="degree" name="degree" onChange={formik.handleChange} value={formik.values.degree} onBlur={formik.handleBlur} />
              {formik.touched.degree && formik.errors.degree ? (<small className="text-red-600">{formik.errors.degree}</small>) : null}

              </div>


            </div>

           <div className='grid md:grid-cols-2 mt-[1rem] md:gap-3'>
              <div className='w-full  max-w-lg'>

                <FormInputBox type="date" label="Start Date" className="border p-2.5 block w-full border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="" id="start_of_education" name="start_of_education" onChange={formik.handleChange} value={formik.values.start_of_education} onBlur={formik.handleBlur} />
              {formik.touched.start_of_education && formik.errors.start_of_education ? (<small className="text-red-600">{formik.errors.start_of_education}</small>) : null}

              </div>
              <div className='w-full md:mt-0 mt-[1rem] max-w-lg'>

                <FormInputBox type="date" label="End Date" className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="" id="end_of_education" name="end_of_education" onChange={formik.handleChange} value={formik.values.end_of_education} onBlur={formik.handleBlur} />
              {formik.touched.end_of_education && formik.errors.end_of_education ? (<small className="text-red-600">{formik.errors.end_of_education}</small>) : null}

              </div>

            </div>

            <div className=' grid  mt-[1rem]'>
            <label>Study Summary</label>
            <textarea value={formik.values.study_summary} name="study_summary" id="study_summary" onChange={formik.handleChange} className='w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 '
              placeholder='Tell briefly about your education: What disciplines did you study? What projects did you do?' cols="100" rows="4">
            </textarea>
            {formik.touched.study_summary && formik.errors.study_summary ? (<small className="text-red-600">{formik.errors.study_summary}</small>) : null}

          </div>

          <div className='mt-[3rem] flex justify-center'>
            {!isLoading && <button className='bg-blue opacity-100  font-[800] px-[5rem] text-white rounded-[5px] p-2' type="submit">SAVE</button>}
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
       </div>      {/*footer*/}
    
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
</>
  )
}
