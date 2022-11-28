import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FormInputBox } from "./Forms/FormInputBox";
import img from "../assets/contact-us.png";
import { Formik, Form, ErrorMessage, Field } from "formik";

export const ContactUs = () => {
  return (
    <section>
      <Navbar />
      <div className="container mx-auto max-w-[500px] ">
        <div className="flex md:justify-between md:gap-[100px] items-center">
          <div className="flex-1">
            <div className="mb-[2rem]">
              <h1 className="text-blue font-bold text-3xl">Get in touch</h1>
              <p>We are here for you, how can we help?</p>
            </div>

            <Formik>
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
              </Form>
            </Formik>
          </div>

          <div className="hidden md:block md:w-[100%]  flex-1">
            <img src={img} className="w-[500px]" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
