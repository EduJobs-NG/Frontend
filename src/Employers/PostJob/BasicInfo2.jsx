import React, { useState, useRef, useEffect } from "react";
import { FormInputBox } from "../../components/Forms/FormInputBox";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { PreviewJobPostPopUp } from "./PreviewJobPostPopUp";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const today = new Date()
const validationSchema = Yup.object({
  deadline: Yup.date().required("Required").min(today, "End date can't be in the past"),
  summary: Yup.string().required("Required"),
  requirements: Yup.string().required("Required"),

});
  

export const BasicInfo2 = ({ formData, setFormData, prevStep, nextStep }) => {
  const [direction, setDirection] = useState("back");
  const [value, setValue] = useState("");
  const [showPreview, setShowPreview] = useState(false);


  const onSubmit = (values) => {
    setFormData(values);
    console.log(values);

    direction === "back" ? prevStep() : setShowPreview(true);
  };
  const formik = useFormik({
    initialValues: formData,
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
 

  useEffect(() => {
    formik.setFieldValue("requirements", value);
  }, [value])

  return (
    <section>
      {showPreview && (
        <PreviewJobPostPopUp
          setShowPreview={setShowPreview}
          formData={formData}
        />
      )}
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <div className="my-[1rem]">
            <label htmlFor="">Job Summary</label>
            <textarea
              name="summary"
              value={formik.values.summary}
              onChange={formik.handleChange}
              className="w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 "
              cols="100"
              rows="7"
              maxLength={300}
              placeholder="Write a summary of what this job entails in less than 300 characters"
            ></textarea>
            {formik.touched.summary && formik.errors.summary ? (
              <small className="text-red-600">{formik.errors.summary}</small>
            ) : null}
          </div>

          <div>
            <p>Job Requirements</p>
         

            <ReactQuill theme="snow" value={value} onChange={setValue} />
            {formik.touched.requirements && formik.errors.requirements ? (
              <small className="text-red-600">{formik.errors.requirements}</small>
            ) : null}
          </div>

          <div className="mt-[3rem]">
       
            {formik.touched.cover_letter && formik.errors.cover_letter ? (
              <small className="text-red-600">
                {formik.errors.cover_letter}
              </small>
            ) : null}
          </div>

          <div className="w-full mt-[1rem]">
            <FormInputBox
              type="date"
              label="Application Deadline"
              className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
              placeholder=""
              name="deadline"
              onChange={formik.handleChange}
              value={formik.values.deadline}
              onBlur={formik.handleBlur}
            />
            {formik.touched.deadline && formik.errors.deadline ? (
              <small className="text-red-600">
                {formik.errors.deadline}
              </small>
            ) : null}
          </div>
          

          <div className="py-[3rem] font-[700] flex justify-between">
            <button
              className="text-blue cursor-pointer"
              onClick={() => setDirection("back")}
              type="submit"
            >
              Back
            </button>

            <button
              className="text-blue cursor-pointer"
              type="submit"
              onClick={() => setDirection("preview")}
            >
              Show Preview
            </button>
          </div>

          {/* <div className="py-[3rem] hidden md:flex justify-evenly">
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
             */}
        </Form>
      </Formik>
    </section>
  );
};
