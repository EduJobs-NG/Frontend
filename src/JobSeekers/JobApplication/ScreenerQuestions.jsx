import React from "react";
import { Formik, Form, useFormik, FormikContext } from "formik";
import * as Yup from "yup";
import { FormInputBox } from "../../components/Forms/FormInputBox";

const validationSchema = Yup.object({
  // resume: Yup.string().required('Required')
});

export const ScreenerQuestions = ({
  job,
  formData,
  setFormData,
  prevStep,
  nextStep,
}) => {
  const onSubmit = (values) => {
    setFormData(values);
    console.log(values);
    nextStep();
  };
  const formik = useFormik({
    initialValues: formData,
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  return (
    <section className="container mx-auto">
      <div className="md:mx-[1rem] my-[2rem]  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]">
        <h1 className="font-[700]">Step 2 of 3</h1>
        <p>Answer the following screening questions.</p>
        <Formik>
          <Form onSubmit={formik.handleSubmit}>
            <div className="my-[1rem]">
              <label htmlFor="">Why do you want work with us?</label>
              <textarea
                value={formik.values.why_work_with_us}
                name="why_work_with_us"
                onChange={formik.handleChange}
                className="w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 "
                cols="100"
                rows="7"
              ></textarea>
            </div>

            <div className="mb-[1rem]">
              <label htmlFor="">Write a cover letter</label>
              <textarea
                value={formik.values.cover_letter}
                name="cover_letter"
                onChange={formik.handleChange}
                className="w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 "
                cols="100"
                rows="7"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                className="bg-blue uppercase opacity-100 w-full md:w-[300px] px-[5rem] text-white rounded-[5px] p-2"
                type="submit"
              >
                NEXT
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};
