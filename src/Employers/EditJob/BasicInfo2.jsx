/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import * as Yup from "yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Formik, Form, useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { PreviewJobPostPopUp } from "./PreviewJobPostPopUp";



const today = new Date();
const validationSchema = Yup.object({
  // summary: Yup.string().required("Required"),
  // requirements: Yup.string().required("Required"),
  deadline: Yup.date().required("Required").min(today, "End date can't be in the past"),

});



export const BasicInfo2 = ({ formData, setFormData, prevStep }) => {
 
  //states
  const [direction, setDirection] = useState("back");
  const [showPreview, setShowPreview] = useState(false);
  // methods
  const handleRequirements = requirements => setFormData({ ...formData, requirements });

  const onSubmit = values => {
    setFormData(values); console.log(values);
    direction === "back" ? prevStep() : setShowPreview(true);
  };

  const formik = useFormik({ onSubmit, enableReinitialize:true, initialValues:formData, validationSchema, validateOnBlur: true, });
  // console.log(formData)

  useEffect(() => {
    formik.setFieldValue("requirements", formData?.requirements);
  }, [formData?.requirements])

  return (
    <section>
      {showPreview && (
        <PreviewJobPostPopUp formData={formData} setShowPreview={setShowPreview} />
      )}
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <div className="my-[1rem]">
            <label htmlFor="">Job Summary</label>
            <textarea
              rows="7"
              cols="100"
              name="summary"
              maxLength={300}
              // value={formik?.values?.summary || ''}
              value={formData.summary || ''}
              onChange={(e) => setFormData({...formData, summary:e.target.value})}
              placeholder="Write a summary of what this job entails in less than 300 characters"
              className="w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 "
            ></textarea>
            {formik.touched.summary && formik.errors.summary ? (
              <small className="text-red-600">{formik.errors.summary}</small>
            ) : null}
          </div>

          <div>
            <p>Job Requirements</p>


            <ReactQuill theme="snow" value={formData?.requirements || ''} onChange={(e) => handleRequirements(e)} />
            {formik.touched.requirements && formik.errors.requirements ? (
              <small className="text-red-600">{formik.errors.requirements}</small>
            ) : null}
          </div>

          <div className="mt-[3rem]">

            {formik.touched.cover_letter && formik.errors.cover_letter ? (
              <small className="text-red-600">{formik.errors.cover_letter} </small>
            ) : null}
          </div>
          <div>
           <p>Current deadline:  {formData.deadline}</p> 
          </div>
          <div className="w-full mt-[1rem]">
            <label htmlFor="">Edit deadline</label>
            <input
              type="date"
              name="deadline"
              onBlur={formik.handleBlur}
              // value={formData.deadline}
              pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])/(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])/(?:30))|(?:(?:0\[13578\]|1\[02\])-31))" 
              onChange={(e) => setFormData({...formData, deadline:e.target.value})}

              className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
            />
            {formik.touched.deadline && formik.errors.deadline ? (
              <small className="text-red-600">
                {formik.errors.deadline}
              </small>
            ) : null}
          </div>


          <div className="py-[3rem] font-[700] flex justify-between">
            <button
              type="submit"
              onClick={() => setDirection("back")}
              className="text-blue cursor-pointer"
            >
              Back
            </button>

            <button
              type="submit"
              className="text-blue cursor-pointer"
              onClick={() => setDirection("preview")}
            >
              Show Preview
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};
