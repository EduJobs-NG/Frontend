import React from 'react';
import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { FormInputBox } from '../../components/Forms/FormInputBox';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const validationSchema = Yup.object({
  resume: Yup.string().required('Required')
})

export const SubmitResume = ({ formData, job, setFormData, nextStep}) => {
  const onSubmit = (values) =>{
    setFormData(values);
    console.log(values)
    nextStep();
  }
  const formik = useFormik({
    initialValues: formData,
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,

  })

  return (
   <>
   <section className='container mx-auto' >
    <div className=' md:mx-[1rem] my-[2rem]  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]'>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <div>
      <h1 className='font-[700]'>Step 1 of 3</h1>
    <p>Upload your resume for {job?.organization_name}</p>
      </div>
      <div className=' flex justify-center  mt-[2rem] md:mt-[1rem]'>
      <label for="upload-resume" className='text-blue cursor-pointer bg-[#f0f0f0] px-[2rem] py-[1rem] md:px-[5rem] md:py-[1rem] uppercase font-[700] '>Upload Resume</label>
      </div>
      </div>

    <Formik>
      <Form onSubmit={formik.handleSubmit}>
    <FormInputBox name="resume" id="upload-resume" accept=".doc, .docx, .pdf"  onChange={(event) => {
      formik.setFieldValue("resume", event.currentTarget.files[0])}} className=" hidden" type='file' />
        {formik.touched.resume && formik.errors.resume ? (<small className="text-red-600">{formik.errors.resume}</small>) : null}
        {formik.values.resume.name}
        <div className='flex mt-[2rem] justify-center'>
        <button
                className="bg-blue w-full flex justify-center gap-6 items-center max-w-[300px] uppercase opacity-100 px-[1rem]  text-white rounded-[5px] p-2"
                type="submit"
              >
                NEXT <FaArrowRight />
              </button>
        </div>
       
      </Form>
        </Formik>

        

    </div>

   </section>
   
   </>
  )
}
