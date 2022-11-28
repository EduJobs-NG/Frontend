import React, { useState } from "react";
import { Formik, Form, useFormik, FormikContext } from "formik";
import * as Yup from "yup";
import { FormInputBox } from "../../components/Forms/FormInputBox";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const validationSchema = Yup.object({
  // resume: Yup.string().required('Required')
});

export const ContactInfo = ({
  job,
  formData,
  setFormData,
  prevStep,
  nextStep,
}) => {
  const [direction, setDirection] = useState("back");

  const onSubmit = (values) => {
    setFormData(values);
    console.log(values);
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
        <h1 className="font-[700]">Step 3 of 3</h1>
        <p>Confirm your contact details.</p>
        <Formik>

          <Form onSubmit={formik.handleSubmit}>
          <div className="mt-[1rem]">
            <FormInputBox
              type="email"
              label="Email"
              className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
              placeholder="Email"
              name="email"
              value={formik.values.email_address}
              onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
           
            />
          </div>

          <div className="mt-[1rem]">

            <FormInputBox
              type="tel"
              label="Phone Number"
              maxLength="12"
              className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
              placeholder="Phone Number"
              id="phone_number"
              name="phone_number"
              // onChange={formik.handleChange}
              value={formik.values.phone_number}
              onBlur={formik.handleBlur}
            />
        </div>


        <div className="pt-[3rem] md:hidden flex justify-between">
              <button
                className="bg-[#f0f0f0] hover:bg-blue hover:text-white uppercase opacity-100  px-[1rem]  text-black rounded-[5px] p-2"
                type="submit"
                onClick={() => setDirection("back")}
              >
                BACK
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
                className="bg-[#f0f0f0] flex justify-center gap-6 items-center w-full max-w-[300px] hover:bg-blue hover:text-white uppercase opacity-100  px-[1rem]  text-black rounded-[5px] p-2"
                type="submit"
                onClick={() => setDirection("back")}
              >
                 <FaArrowLeft className="" /> BACK
              </button>

              <button
                className="bg-blue w-full flex justify-center gap-6 items-center max-w-[300px] uppercase opacity-100 px-[1rem]  text-white rounded-[5px] p-2"
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
