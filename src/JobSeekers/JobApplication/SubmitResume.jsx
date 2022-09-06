import React from 'react';
import { Formik, Form, useFormik, FormikContext } from 'formik';
import * as Yup from 'yup';
import { FormInputBox } from '../../components/Forms/FormInputBox';

const validationSchema = Yup.object({
  resume: Yup.string().required('Required')
})

export const SubmitResume = ({ formData, job, setFormData, nextStep, prevStep}) => {
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
    <div className='md:mx-[1rem] my-[2rem]  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]'>
    <h1 className='font-[700]'>Step 1 of 3</h1>
    <p>Upload your resume for {job?.organization_name}</p>
    <Formik>
      <Form onSubmit={formik.handleSubmit}>
    <FormInputBox name="resume" accept=".doc, .docx, .pdf" onChange={(event) => {
      formik.setFieldValue("resume", event.currentTarget.files[0])}} className="border p-2.5 block w-full mt-[2rem]  border-solid border-[#808080] rounded-lg outline-none" type='file' />
        {formik.touched.resume && formik.errors.resume ? (<small className="text-red-600">{formik.errors.resume}</small>) : null}
        {formik.resume?.formik.resume.type}
        <button  className='bg-blue uppercase opacity-100 w-full md:w-[300px] px-[5rem] text-white rounded-[5px] p-2' type="submit">
          NEXT
        </button>
      </Form>
        </Formik>
        

    </div>

   </section>
   
   </>
  )
}
