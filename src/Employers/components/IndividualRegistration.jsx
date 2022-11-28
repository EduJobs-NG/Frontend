import axios from "axios";
import { useFormik } from "formik";
import { Formik, Form } from "formik";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaUserCircle, FaEnvelope } from "react-icons/fa";
import { FormInputBox } from "../../components/Forms/FormInputBox";
import CustomCheckbox from '../../components/Forms/CustomCheckbox';
import { RegistrationSchema as validationSchema } from "../../components/Forms/schema";



export const IndividualRegistration = () => {
  // hooks
  const navigate = useNavigate();

  // states hooks
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values) => {
    setIsLoading(true);
    const response = await axios
      .post(`${process.env.REACT_APP_BASE_URL}employer/account/individual-employer/`, values)
      .catch(err => {
        if (err?.message === 'Request failed with status code 400') toast.error('User with this email already exists');
        else toast.error('An error occured, try again');
        console.error(err);
        setIsLoading(false);
      });

      if (response && response.data) {
        toast.success("Account created successfully.");
        setTimeout(() => {
          navigate("/verify");
        }, 3000);
      }
  };

  const formik = useFormik({
    onSubmit,
    validationSchema,
    validateOnBlur: true,
    initialValues: {
      email: "",
      password: "",
      last_name: "",
      first_name: "",
      re_password: "",
    },
  });

  return (
    <div className=" bg-white ">
      <ToastContainer />

      <Formik>
        {() => (
          <Form onSubmit={formik?.handleSubmit}>
            <div className="grid grid-cols-2 gap-4 ">
              <div>
                <FormInputBox
                  type="text"
                  id="first_name"
                  name="first_name"
                  icon={<FaUserCircle />}
                  placeholder="First Name"
                  onBlur={formik?.handleBlur}
                  onChange={formik?.handleChange}
                  value={formik?.values?.first_name}
                  className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                />

                {formik?.touched?.first_name && formik?.errors?.first_name ?
                  <small className="text-red-600">
                    {formik?.errors.first_name}
                  </small> : null}
              </div>

              <div>
                <FormInputBox
                  type="text"
                  id="last_name"
                  name="last_name"
                  icon={<FaUserCircle />}
                  placeholder="Last  Name"
                  onBlur={formik?.handleBlur}
                  onChange={formik?.handleChange}
                  value={formik?.values.last_name}
                  className="border p-2.5 block  w-full  border-solid border-[#808080] rounded-lg outline-none"
                />
                {formik?.touched?.last_name && formik?.errors?.last_name ?
                  <small className="text-red-600">
                    {formik?.errors.last_name}
                  </small> : null}
              </div>
            </div>

            <FormInputBox
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              icon={<FaEnvelope />}
              onBlur={formik?.handleBlur}
              value={formik?.values.email}
              onChange={formik?.handleChange}
              className="border p-2.5 mt-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
            />

            {formik?.touched.email && formik?.errors.email ? (
              <small className="text-red-600">{formik?.errors.email}</small>
            ) : null}

            <FormInputBox
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onBlur={formik?.handleBlur}
              autoComplete="new-password"
              onChange={formik?.handleChange}
              value={formik?.values.password}
              className=" border p-2.5 mt-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
            />
            {
              formik?.touched?.password && formik?.errors?.password ?
                <small className="text-red-600">{formik?.errors.password}</small> : null
            }

            <FormInputBox
              type="password"
              id="re_password"
              name="re_password"
              autoComplete="new-password"
              onBlur={formik?.handleBlur}
              placeholder="Confirm Password"
              onChange={formik?.handleChange}
              value={formik?.values.re_password}
              className=" border p-2.5 mt-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
            />

            {formik?.touched?.re_password && formik?.errors?.re_password ?
              <small className="text-red-600">
                {formik?.errors.re_password}
              </small> : null}
            <div className='my-3'>
              <CustomCheckbox type="checkbox" id="acceptedTos" name="acceptedTos" value={formik?.values?.acceptedTos} onChange={formik?.handleChange} />
              <label htmlFor="acceptedTos"> By signing up on this platform,
                you agree to EduJobs</label> <Link className='text-blue underline' to="/terms"> Terms & Conditions.</Link>
              <div>
                {
                  formik?.touched?.acceptedTos && formik?.errors?.acceptedTos ?
                    <small className="text-red-600">{formik?.errors.acceptedTos}</small> : null
                }
              </div>

            </div>
            {!isLoading && (
              <button
                disabled={!formik?.isValid}
                className={
                  !formik?.isValid
                    ? "bg-blue block w-full text-white opacity-25 rounded-sm p-2"
                    : "bg-blue opacity-100 block w-full text-white rounded-sm p-2"
                }
                type="submit"
              >
                SIGN UP
              </button>
            )}
            {isLoading && (
              <div className="flex justify-center">
                <ThreeDots
                  width={100}
                  height={20}
                  color="blue"
                  type="ThreeDots"
                />
              </div>
            )}
          </Form>
        )}
      </Formik>
      <div className="flex justify-center my-3">
        <p>
          Already have an account?
          <Link className="underline text-blue" to="/employer/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
