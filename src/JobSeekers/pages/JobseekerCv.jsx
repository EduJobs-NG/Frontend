import React, { useState } from "react";
import { JobseekerNavbar } from "../components/JobseekerNavbar";
import { CvPayment } from "../../components/paystack/CvPayment";

export const JobseekerCv = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [competence, setCompetence] = useState("");
  // const [loading, setLoading] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Handled");
  };

  return (
    <div>
      <JobseekerNavbar />
      <section className="relative bg-jobs lg:pt-[20px] lg:pb-[70px] h-[500px] bg-center bg-cover bg-no-repeat">
        <div className="container mx-auto h-full flex flex-col items-center justify-center gap-8">
          <h2 className="title text-[35px] font-heading lg:text-[66px] font-[700] text-white text-center z-10">
            Get a Professional CV
          </h2>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#02378B] opacity-60"></div>
      </section>
      <div className="">
        <div className="bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <h2 className="font-semibold text-xl text-gray-600">
                Get a new CV
              </h2>
              <p className="text-gray-500 mb-6">
                Fill the form below correctly
              </p>

              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <form>
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-full mx-2 flex-1">
                          <div className="bg-white my-2 p-2 flex border border-blue">
                            <input
                              type="text"
                              name="firstName"
                              value={firstName}
                              placeholder="First name"
                              className="p-2 px-2 appearance-none outline-none w-full text-black"
                              onChange={(e) => setFirstName(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="w-full mx-2 flex-1">
                          <div className="bg-white my-2 p-2 flex border border-blue">
                            <input
                              type="text"
                              name="lastName"
                              value={lastName}
                              placeholder="Last name"
                              className="p-2 px-2 appearance-none outline-none w-full text-black"
                              onChange={(e) => setLastName(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
