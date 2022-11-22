import React, { useContext, useState, useEffect } from "react";
import { FormInputBox } from "../../components/Forms/FormInputBox";
import * as Yup from "yup";
import { useFormik, Formik, Form } from "formik";
import AuthContext from "../../context/AuthContext";
import { ThreeDots } from "react-loader-spinner";
import CustomSelect from "../../components/Forms/CustomSelect";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxios from "../../utils/useAxios";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address"),
  phone_number: Yup.string().required('Required'),
  facebook_url: Yup.string().url('URL must begin with https://'),
  linkedin_url: Yup.string().url('URL must begin with https://'),
  twitter_url: Yup.string().url('URL must begin with https://'),
  instagram_url: Yup.string().url('URL must begin with https://'),
  
});

export const PersonalInfo = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user, getUserMeHandler } = useContext(AuthContext);

  const {
    user: { first_name, last_name, email },
    middle_name,
    home_address,
    phone_number,
    city,
    state,
    gender,
    facebook_url,
    linkedin_url,
    twitter_url,
    instagram_url,
  } = user;


  const api = useAxios();
  const onSubmit = async (values) => {
    // console.log('values', values);

    setIsLoading(true);
    values.phone_number = `+${values.phone_number}`;

    const response = await api
  
      .put(`/jobseeker/user-profile-update/`, values)
      .catch((err) => {
        console.log(err);
        if(err.response.status === 400){
          toast.error('The phone number is invalid')
          setIsLoading(false);

        }
        else{
          toast.error("An error occured. Try again");
          setIsLoading(false);
        }
     
      
      });

    if (response) {
      setIsLoading(false);
      toast.success("Your changes have been successfully saved");
      console.log(response);
      getUserMeHandler();
    }
  };
  const formik = useFormik({
    initialValues: {
      first_name: first_name || "",
      middle_name: middle_name || "",
      last_name: last_name || "",
      phone_number: phone_number || "",
      email: email || "",
      gender: gender || "",
      home_address: home_address || "",
      city: city || "",
      state: state || "",
      facebook_url: facebook_url || "",
      instagram_url: instagram_url || "",
      twitter_url: twitter_url || "",
      linkedin_url: linkedin_url || "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <section className="bg-white   rounded-[40px]">
      <ToastContainer />

      <Formik>
        <Form onSubmit={formik.handleSubmit}>
      

          <div className="grid md:grid-cols-2 md:gap-3">
            <div className="w-full  max-w-lg">
              <FormInputBox
                disabled
                type="text"
                label="First Name"
                className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                placeholder="First Name"
                id="first_name"
                name="first_name"
                onChange={formik.handleChange}
                value={formik.values.first_name}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="w-full md:mt-0 mt-[1rem] max-w-lg">
              <FormInputBox
                type="text"
                label="Middle Name"
                className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Middle Name"
                id="middle_name"
                name="middle_name"
                onChange={formik.handleChange}
                value={formik.values.middle_name}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-3 mt-[1rem]">
            <div className="w-full max-w-lg">
              <FormInputBox
                disabled
                type="text"
                label="Last Name"
                className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Last Name"
                id="last_name"
                name="last_name"
                onChange={formik.handleChange}
                value={formik.values.last_name}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="w-full md:mt-0 mt-[1rem]  max-w-lg">
              <CustomSelect
                label="Gender"
                name="gender"
                
                placeholder="Please select a job"
                className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                onChange={formik.handleChange}
              >
                <option value="DEFAULT" disabled>Choose a gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </CustomSelect>
            </div>
          </div>

          <div className="grid w-full md:grid-cols-2 md:gap-3 mt-[1rem]">
            <div className=" ">
              <div className=" w-full max-w-lg ">
                <label htmlFor="phone_number">Phone Number</label>
                <PhoneInput
                  inputProps={{
                    name: "phone_number",
                  }}
                  country={"ng"}
                  value={formik.values.phone_number}
                  onChange={(event) => {
                    formik.setFieldValue("phone_number", event);
                  }}
                />
                {formik.touched.phone_number && formik.errors.phone_number ? (
                  <small className="text-red-600">
                    {formik.errors.phone_number}
                  </small>
                ) : null}
              </div>
            </div>

            <div disabled className="w-full md:mt-0 mt-[1rem]  max-w-lg">
              <FormInputBox
                disabled
                type="email"
                label="Email"
                className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <small className="text-red-600">{formik.errors.email}</small>
              ) : null}
            </div>
          </div>

          <div className=" grid max-w-[1090px]   mt-[0.5rem]">
            <label>Home Address</label>
            <textarea
              value={formik.values.home_address}
              name="home_address"
              id="home_address"
              onChange={formik.handleChange}
              className="w-full  border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 "
              placeholder="Epe, Lagos"
              cols="100"
              rows="4"
            ></textarea>
          </div>

          <div className="grid md:grid-cols-2 md:gap-3 mt-[1rem]">
            <div className="w-full max-w-lg">
              <FormInputBox
                type="text"
                label="City"
                className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                placeholder="City"
                id="city"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                onBlur={formik.handleBlur}
              />

              {formik.touched.city && formik.errors.city ? (
                <small className="text-red-600">{formik.errors.city}</small>
              ) : null}
            </div>
            <div className="w-full md:mt-0 mt-[1rem]  max-w-lg">
              <FormInputBox
                type="text"
                label="State"
                className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                placeholder="State"
                id="state"
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
                onBlur={formik.handleBlur}
              />
              {formik.touched.state && formik.errors.state ? (
                <small className="text-red-600">{formik.errors.state}</small>
              ) : null}
            </div>
          </div>

          <h1 className="text-[1.1rem] mt-[2.3rem] font-[700]">
            Social Media Links
          </h1>

          <div className="grid md:grid-cols-2 md:gap-3 mt-[1rem]">
            <div className="w-full max-w-lg">
              <FormInputBox
                type="text"
                label="Facebook"
                className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Facebook"
                id="facebook_url"
                name="facebook_url"
                onChange={formik.handleChange}
                value={formik.values.facebook_url}
                onBlur={formik.handleBlur}
              />
              {formik.touched.facebook_url && formik.errors.facebook_url ? (
                <small className="text-red-600">{formik.errors.facebook_url}</small>
              ) : null}
            </div>
            <div className="w-full md:mt-0 mt-[1rem]  max-w-lg">
              <FormInputBox
                type="url"
                label="Linkedin"
                className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Linkedin"
                id="linkedin_url"
                name="linkedin_url"
                onChange={formik.handleChange}
                value={formik.values.linkedin_url}
                onBlur={formik.handleBlur}
              />
               {formik.touched.linkedin_url && formik.errors.linkedin_url ? (
                <small className="text-red-600">{formik.errors.linkedin_url}</small>
              ) : null}
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-3 mt-[1rem]">
            <div className="w-full max-w-lg">
              <FormInputBox
                type="url"
                label="Twitter"
                className="border p-2.5 block w-full   border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Twitter"
                id="twitter_url"
                name="twitter_url"
                onChange={formik.handleChange}
                value={formik.values.twitter_url}
                onBlur={formik.handleBlur}
              />
               {formik.touched.twitter_url && formik.errors.twitter_url ? (
                <small className="text-red-600">{formik.errors.twitter_url}</small>
              ) : null}
            </div>
            <div className="w-full md:mt-0 mt-[1rem]  max-w-lg">
              <FormInputBox
                type="url"
                label="Instagram"
                className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                placeholder="Instagram"
                id="instagram_url"
                name="instagram_url"
                onChange={formik.handleChange}
                value={formik.values.instagram_url}
                onBlur={formik.handleBlur}
              />
               {formik.touched.instagram_url && formik.errors.instagram_url ? (
                <small className="text-red-600">{formik.errors.instagram_url}</small>
              ) : null}
            </div>
          </div>

          <div className="mt-[3rem] flex justify-center">
            {!isLoading && (
              <button
                className="bg-blue opacity-100  font-[800] px-[5rem] text-white rounded-[5px] p-2"
                type="submit"
              >
                SAVE
              </button>
            )}
            {isLoading && (
              <div className="flex justify-center">
                <ThreeDots
                  type="ThreeDots"
                  width={100}
                  height={20}
                  color="blue"
                />
              </div>
            )}
          </div>
        </Form>
      </Formik>
    </section>
  );
};
