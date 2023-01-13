import React, {useState} from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FormInputBox } from "./Forms/FormInputBox";
import img from "../assets/contact-us.png";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { IsLoading } from "./IsLoading";
export const ContactUs = () => {
  const [loading, setIsLoading] = useState(false)
  const onSubmit = async (values) => {
    setIsLoading(true);

    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}contact/`, values)
      .catch((err) => {
        console.log(err);
        toast.error("There was an error. Try again.");
        setIsLoading(false);
      });

    if (response && response.data) {
      setIsLoading(false);
      toast.success("We've received your message and would be in touch with you shortly.");
      console.log(response.data);
    }
  };

  return (
    <section>
      <ToastContainer />
      <Navbar />
      <div className="container py-[100px] mx-auto max-w-[500px] ">
        <div className="flex md:justify-between md:gap-[100px] items-center">
          <div className="flex-1">
            <div className="mb-[2rem]">
              <h1 className="text-blue font-bold text-3xl">Get in touch</h1>
              <p>We are here for you, how can we help?</p>
            </div>

            <Formik onSubmit={onSubmit} initialValues={{name:'', message:'', email:''}} >
              <Form>
                <div>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="border p-2.5 block w-full bg-[#f5f5f5]  text-black border-solid border-[#808080] rounded-lg outline-none"
                  ></Field>
                </div>

                <div className="my-[2rem]">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="border p-2.5 block w-full bg-[#f5f5f5]  text-black border-solid border-[#808080] rounded-lg outline-none"
                  ></Field>
                </div>

                <div className="my-[2rem]">
                  <textarea
                    name="message"
                    id=""
                    className="border p-2.5 block w-full bg-[#f5f5f5]  text-black border-solid border-[#808080] rounded-lg outline-none"
                    cols="30"
                    placeholder="Your message"
                    rows="10"
                  ></textarea>
                </div>

                <div>
                <button
              className="bg-blue w-full flex justify-center gap-6 items-center max-w-[300px] uppercase opacity-100 px-[1rem]  text-white rounded-[5px] p-2"
              type="submit"
            >
           {loading ? <IsLoading /> : 'SUBMIT'}
            </button>
                </div>
              </Form>
            </Formik>
          </div>

          <div className="hidden md:block md:w-[100%]  flex-1">
            <img src={img} className="w-[500px]" alt="" />
          </div>
        </div>
      </div>
    <Footer />

    </section>
  );
};
