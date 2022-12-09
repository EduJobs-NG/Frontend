import * as Yup from "yup";
import React, { useState } from "react";
import { Formik, Form, useFormik } from "formik";
import { FaArrowRight, FaPlus, FaCheck } from "react-icons/fa";
import { FormInputBox } from "../../components/Forms/FormInputBox";

const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  job_type: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
  min_pay_range: Yup.string().required("Required"),
  max_pay_range: Yup.string().required("Required"),
  organization_name: Yup.string().required("Required"),
});

const jobTypeOptions = [
  { option: "Permanent" },
  { option: "Contract" }, { option: "Full-time" },
  { option: "Part-time" }, { option: "Temporary" },
].map((item, id) => ({ ...item, id }));

export const BasicInfo1 = ({ formData: initialValues, setFormData, nextStep }) => {
  // states
  const [activeOption, setActiveOption] = useState(null);

  // methods
  const handleClickedOption = index => setActiveOption(index);
  const onSubmit = (values) => { setFormData(values); console.log(values); nextStep(); };

  // formik data
  const formik = useFormik({ onSubmit, initialValues, validationSchema, validateOnBlur: true, });

  return (
    <section>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <div>
            <FormInputBox
              type="text"
              name="title"
              label="Job Title"
              onBlur={formik.handleBlur}
              value={formik?.values?.title || ''}
              onChange={formik.handleChange}
              placeholder="e.g., Chemistry Teacher"
              className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
            />
            {formik.touched.title && formik.errors.title ? (<small className="text-red-600">{formik.errors.title}</small>) : null}
          </div>
          <div className="mt-[1rem]">
            <FormInputBox
              type="text"
              name="organization_name"
              label="Organization Name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik?.values?.organization_name || ''}
              placeholder="e.g., Amazing Grace High School"
              className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
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
              value={formik?.values?.location || ''}
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
                      className={`${activeOption === index
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
              {jobTypeOptions.map(({ option, id }) => (
                <FormInputBox
                  key={id}
                  id={option}
                  type="radio"
                  label={option}
                  name="job_type"
                  onChange={() => formik.setFieldValue("job_type", `${option}`)}
                />
              ))}
            </div>
          </div>

          <div className="mt-[1rem]">
            <label htmlFor="">Salary Range(Optional)</label>

            <div className="flex flex-col  md:gap-x-[100px] md:flex-row">
              <div className="flex flex-row mb-[1rem] items-baseline">
                # <FormInputBox
                  label=""
                  type="text"
                  name="min_pay_range"
                  onBlur={formik.handleBlur}
                  placeholder="Minimum Amount"
                  onChange={formik.handleChange}
                  value={formik?.values?.min_pay_range || ''}
                  className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                />

                {formik.touched.min_pay_range && formik.errors.min_pay_range ? (
                  <small className=" text-red-600">{formik.errors.min_pay_range}</small>
                ) : null}
                <p className="ml-[1rem]">to</p>

              </div>

              <div className="flex flex-row items-baseline">
                # <FormInputBox
                  label=""
                  type="text"
                  name="max_pay_range"
                  placeholder="Maximum Amount"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik?.values?.max_pay_range || ''}
                  className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
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
              type="submit"
              className="bg-blue w-full flex justify-center gap-6 items-center max-w-[300px] uppercase opacity-100 px-[1rem]
              text-white rounded-[5px] p-2"
            >
              NEXT <FaArrowRight />
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};
