import React, { useContext } from "react";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import { FormInputBox } from "../../components/Forms/FormInputBox";
import AuthContext from "../../context/AuthContext";

// const validationSchema = Yup.object({
//   resume: Yup.string().required('Required')
// })

export const ContactInfo = (job, formData, setFormData, prevStep, nextStep) => {
  const { user } = useContext(AuthContext);
  const {
    phone_number,
    user: { email },
  } = user;
  const onSubmit = (values) => {
    setFormData(values);
    console.log(values);
    prevStep();
  };
  const formik = useFormik({
    initialValues: formData,
    validateOnBlur: true,
    onSubmit,
    // validationSchema: validationSchema,
  });
  return (
    <section className="container mx-auto">
      <div className="md:mx-[1rem] my-[2rem]  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]">
        <h1 className="font-[700]">Step 3 of 3</h1>
        <p>Verify your contact info</p>
        <Formik>
          <Form onSubmit={formik.handleSubmit}>
            <FormInputBox
              type="email"
              label="Email"
              className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
              placeholder="Email"
              name="email"
              // onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <small className="text-red-600">{formik.errors.email}</small>
            ) : null}

            <FormInputBox
              type="tel"
              label="Phone Number"
              maxLength="12"
              className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
              placeholder="Phone Number"
              id="phone_number"
              name="phone_number"
              // onChange={formik.handleChange}
              // value={formik.values.phone_number}
              onBlur={formik.handleBlur}
            />

            {formik.touched.phone_number && formik.errors.phone_number ? (
              <small className="text-red-600">
                {formik.errors.phone_number}
              </small>
            ) : null}
            <button
              className="bg-blue uppercase opacity-100 w-full md:w-[300px] px-[5rem] text-white rounded-[5px] p-2"
              type="submit"
            >
              NEXT
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};
