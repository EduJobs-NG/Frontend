import React, { useState } from "react";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const validationSchema = Yup.object({
  cover_letter: Yup.string().required('Required'),
  why_work_with_us: Yup.string().required('Required')
});

export const ScreenerQuestions = ({
  formData,
  setFormData,
  prevStep,
  nextStep,
}) => {
  const [direction, setDirection] = useState("back");
  const onSubmit = (values) => {
    setFormData(values);
    // console.log(values);
    direction === "back" ? prevStep() : nextStep();
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
        {formik.touched.why_work_with_us && formik.errors.why_work_with_us ? (<small className="text-red-600 text-[1rem]">{formik.errors.why_work_with_us}</small>) : null}

            </div>

            <div className="">
              <label htmlFor="">Write a cover letter</label>
              <textarea
                value={formik.values.cover_letter}
                name="cover_letter"
                onChange={formik.handleChange}
                className="w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 "
                cols="100"
                rows="7"
              ></textarea>
        {formik.touched.cover_letter && formik.errors.cover_letter ? (<small className="text-red-600 text-[1rem]">{formik.errors.cover_letter}</small>) : null}

            </div>

            <div className="pt-[3rem] md:hidden flex justify-between">
              <button
                className="bg-[#f0f0f0] hover:bg-blue hover:text-white uppercase opacity-100  px-[1rem]  text-black rounded-[5px] p-2"
                type="submit"
                onClick={() => setDirection("back")}
              >
                Back
              </button>

              <button
                className="bg-blue uppercase opacity-100 px-[1rem]  text-white rounded-[5px] p-2"
                type="submit"
                onClick={() => setDirection("forward")}
              >
                NEXT
              </button>
            </div>

            <div className="pt-[3rem] hidden md:flex justify-evenly">
              <button
                className="bg-[#f0f0f0] flex justify-center gap-6 items-center w-full max-w-[300px] hover:bg-blue hover:text-white uppercase px-[1rem]  text-black rounded-[5px] p-2"
                type="submit"
                onClick={() => setDirection("back")}
              >
                 <FaArrowLeft className="" /> BACK
              </button>

              <button
                className="bg-blue w-full flex justify-center gap-6 items-center max-w-[300px] uppercase  px-[1rem]  text-white rounded-[5px] p-2"
                type="submit"
                onClick={() => setDirection("forward")}
              >
                NEXT <FaArrowRight />
              </button>
            </div>
            
            

          </Form>
        </Formik>
      </div>
    </section>
  );
};
