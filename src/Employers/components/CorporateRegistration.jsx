import React from "react";
import { useFormik } from "formik";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import { useAuth } from '../../context/auth.context';
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaEnvelope } from "react-icons/fa";
import CustomCheckbox from "../../components/Forms/CustomCheckbox";
import { FormInputBox } from "../../components/Forms/FormInputBox";
import { CorporateSchema as validationSchema } from "../../components/Forms/schema";

export const CorporateRegistration = () => {
  const navigate = useNavigate();
  const { register, loading } = useAuth();

  const onSubmit = async (values) => {
    await register('/employer/account/cooperate-employer/', values,
      () => {
        toast.success("Account created successfully.");
        setTimeout(() => { navigate("/verify"); }, 3000);
      },
      error => {
        if (error.message === "Request failed with status code 400") toast.error("User with this email already exists");
        else toast.error("An error occured. Try again");
      },
    );
  };

  const formik = useFormik({
    onSubmit,
    validationSchema,
    validateOnBlur: true,
    initialValues: {
      email: "",
      org_name: "",
      password: "",
      re_password: "",
      acceptedTos: false,
    },
  });

  return (
    <div className=" bg-white  ">
      <Formik>
        {({ }) => (
          <Form onSubmit={formik.handleSubmit}>
            <FormInputBox
              type="text"
              className="border p-2.5 block w-full border-solid border-[#808080] rounded-lg outline-none"
              icon={<FaUserCircle />}
              placeholder="Organization Name"
              id="organization_name"
              name="organization_name"
              onChange={formik.handleChange}
              value={formik.values.organization_name}
              onBlur={formik.handleBlur}
            />

            {formik.touched.organization_name &&
              formik.errors.organization_name ? (
              <small className="text-red-600">
                {formik.errors.organization_name}
              </small>
            ) : null}

            <FormInputBox
              type="email"
              className="border p-2.5 mt-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
              icon={<FaEnvelope />}
              placeholder="Email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />

            {formik.touched.email && formik.errors.email ? (
              <small className="text-red-600">{formik.errors.email}</small>
            ) : null}

            <FormInputBox
              type="password"
              className=" border p-2.5 mt-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
              placeholder="Password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              autoComplete="new-password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <small className="text-red-600">{formik.errors.password}</small>
            ) : null}

            <FormInputBox
              type="password"
              className=" border p-2.5 mt-[1rem]  block w-full border-solid border-[#808080] rounded-lg outline-none"
              placeholder="Confirm Password"
              id="re_password"
              onBlur={formik.handleBlur}
              name="re_password"
              onChange={formik.handleChange}
              autoComplete="new-password"
              value={formik.values.re_password}
            />

            {formik.touched.re_password && formik.errors.re_password ? (
              <small className="text-red-600">
                {formik.errors.re_password}
              </small>
            ) : null}
            <div className="my-3">
              <CustomCheckbox
                type="checkbox"
                id="acceptedTos"
                name="acceptedTos"
                value={formik.values.acceptedTos}
                onChange={formik.handleChange}
              />
              <label for="acceptedTos">
                {" "}
                By signing up on this platform, you agree to EduJobs
              </label>{" "}
              <a className="text-blue underline" href="/terms">

                Terms & Conditions.
              </a>
              <div>
                {formik.touched.acceptedTos && formik.errors.acceptedTos ? (
                  <small className="text-red-600">
                    {formik.errors.acceptedTos}
                  </small>
                ) : null}
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center">
                <ThreeDots
                  type="ThreeDots"
                  width={100}
                  height={20}
                  color="blue"
                />
              </div>
            ) : (
              <button
                disabled={!formik.isValid}
                className={
                  !formik.isValid
                    ? "bg-blue block w-full text-white font-[700] opacity-25 rounded-sm p-2"
                    : "bg-blue opacity-100 block w-full font-[700] text-white rounded-sm p-2"
                }
                type="submit"
              >
                SIGN UP
              </button>
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

      {/* <div className="flex justify-between gap-x-5 items-baseline">
        <hr className="bg-blue border-[0.1px] w-[35%] " />
        <span>OR</span>
        <hr className="bg-blue border-[0.1px]  w-[35%]" />
      </div>

      <div className="mt-4 flex justify-center flex-row gap-x-[1rem]">
        <img
          className="border rounded-full p-[0.3rem]  border-[#808080]"
          src={google}
          alt=""
        />
        <img
          className="border p-[0.4rem] rounded-full border-[#808080]"
          src={linkedin}
          alt=""
        />
      </div> */}
    </div>
  );
};
