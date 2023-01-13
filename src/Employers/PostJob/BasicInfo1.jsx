import React, { useState } from "react";
import { FormInputBox } from "../../components/Forms/FormInputBox";
import { Formik, Field, ErrorMessage, Form, useFormik } from "formik";
import * as Yup from "yup";
import {  FaArrowRight, FaPlus, FaCheck } from "react-icons/fa";
import naira from '../../assets/naira.jpg'
const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  organization_name: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
  job_type: Yup.string().required("Required"),
  // min_pay_range: Yup.number().required("Required. Please input an integer").nullable(),
  // max_pay_range: Yup.string().required("Required"),
});

const jobTypeOptions = [
  { id: 1, option: "Full-time" },
  { id: 2, option: "Part-time" },
  { id: 3, option: "Contract" },
  { id: 4, option: "Temporary" },
  { id: 5, option: "Permanent" },
];

export const BasicInfo1 = ({ formData, setFormData, prevStep, nextStep }) => {
  const [activeOption, setActiveOption] = useState(null);
  const handleClickedOption = (index) => {
    setActiveOption(index);
  };
  const onSubmit = (values) => {
    setFormData(values);
    // console.log(values);

    nextStep();
  };
  const formik = useFormik({
    initialValues: formData,
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <section>
   
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
       
          <div>
            <FormInputBox
              type="text"
              label="Job Title"
              className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
              placeholder="e.g., Chemistry Teacher"
              name="title"
              value={formik.values.title}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
                        {formik.touched.title && formik.errors.title ? (
              <small className="text-red-600">{formik.errors.title}</small>
            ) : null}
          </div>
          <div className="mt-[1rem]">
            <FormInputBox
              type="text"
              label="Organization Name"
              className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
              placeholder="e.g., Amazing Grace High School"
              name="organization_name"
              value={formik.values.organization_name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
                         {formik.touched.organization_name && formik.errors.organization_name ? (
              <small className="text-red-600">{formik.errors.organization_name}</small>
            ) : null}
          </div>

          <div className="mt-[1rem]">
            <FormInputBox
              type="text"
              label="Location"
              className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
              placeholder="e.g., Ibadan, Oyo State"
              name="location"
              value={formik.values.location}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
                         {formik.touched.location && formik.errors.location ? (
              <small className="text-red-600">{formik.errors.location}</small>
            ) : null}
          </div>
          <div className="mt-[1rem]">
            <p>Job Type</p>

            <div className="flex mt-[1rem] flex-wrap gap-4 flex-row">
              {jobTypeOptions.map((item, index) => {
                return (
                  <div key={item.id}>
                    <label
                      onClick={() => handleClickedOption(index)}
                      className={`${
                        activeOption === index
                          ? "border border-[#808080] "
                          : "border-none"
                      } bg-[#e6e6e6] flex flex-row justify-content items-center rounded-[10px] cursor-pointer p-[0.4rem] mb-[0.5rem]  md:p-[0.5rem] mr-[0.5rem] md:mr-[1rem]`}
                      htmlFor={item.option}
                    >
                      {" "}
                      {activeOption === index ? (
                        <FaCheck className="mr-[0.2rem]" />
                      ) : (
                        <FaPlus className="mr-[0.2rem]" />
                      )}{" "}
                      {item.option}
                    </label>
                  </div>
                );
              })}
                         {formik.touched.job_type && formik.errors.job_type ? (
              <small className="text-red-600">{formik.errors.job_type}</small>
            ) : null}
            </div>

            <div className="hidden">
              {jobTypeOptions.map((item) => {
                const { option } = item;
                return (
                  <FormInputBox
                    type="radio"
                    id={option}
                    key={item.id}
                    label={item.option}
                    name="job_type"
                    onChange={() =>
                      formik.setFieldValue("job_type", `${option}`)
                    }
                  />
                );
              })}
            </div>
          </div>

          <div className="mt-[1rem]">
            <label htmlFor="">Salary Range(Optional)</label>

            <div className="flex flex-col  md:gap-x-[100px] md:flex-row">
              <div className="flex flex-row mb-[1rem] items-baseline">
              <img className="w-[20px]" src={naira} alt="naira img" /> <FormInputBox
                  type="text"
                  label=""
                  className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="e.g., 50,000"
                  name="min_pay_range"
                  value={formik.values.min_pay_range}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                
                      {formik.touched.min_pay_range && formik.errors.min_pay_range ? (
              <small className=" text-red-600">{formik.errors.min_pay_range}</small>
            ) : null}
                <p className="ml-[1rem]">to</p>
          
              </div>

              <div className="flex flex-row items-baseline">
              <img className="w-[20px]" src={naira} alt="naira img" /> <FormInputBox
                  type="text"
                  label=""
                  className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                  placeholder="e.g., 100,000"
                  name="max_pay_range"
                  value={formik.values.max_pay_range}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                  {formik.touched.max_pay_range && formik.errors.max_pay_range ? (
              <small className="text-red-600">{formik.errors.max_pay_range}</small>
            ) : null}
                <p className="ml-[1rem]">/month</p>
              </div>
            </div>
          </div>

          <div className="flex my-[3rem] justify-center">
            <button
              className="bg-blue w-full flex justify-center gap-6 items-center max-w-[300px] uppercase opacity-100 px-[1rem]  text-white rounded-[5px] p-2"
              type="submit"
            >
              NEXT <FaArrowRight />
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};
