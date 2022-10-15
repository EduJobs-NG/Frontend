import React, {useState, useContext} from "react";
import { FormInputBox } from "../../components/Forms/FormInputBox";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SuccessfulApplication } from "./SuccessfulApplication";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import useAxios from "../../utils/useAxios";



export const ReviewApplication = ({ formData, prevStep, setStep }) => {
  const { resume, why_work_with_us, email_address, cover_letter, phone_number, job } = formData;
  const [showSuccess, setShowSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const { authTokens } = useContext(AuthContext);
  const navigate = useNavigate()
  const api = useAxios();
  const handleSubmission = async () => {
    setIsLoading(true);
    const data = new FormData();
    data.append('resume', resume)
    data.append('email_address', email_address)
    data.append('phone_number', phone_number)
    data.append('cover_letter', cover_letter)
    data.append('why_work_with_us', why_work_with_us)
    data.append('job', job)
  
      const response = await api.post(`jobseeker/jobs/application/`, data)
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
        setIsLoading(false);
      });

    if (response) {
      setIsLoading(false);
      console.log(response);
      setShowSuccess(true)
      setTimeout(() => {
        navigate('/dashboard/find-jobs')
      }, 5000)
    }
  }
  return (
    <section>
      <ToastContainer />

      {showSuccess && <SuccessfulApplication email={email_address} /> }
      <div className="container mx-auto">
        <h1 className="font-[700] text-[1.3rem]">Review your application</h1>

        <div className="md:mx-[1rem] my-[2rem] relative  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]">
          <p
            onClick={() => setStep(1)}
            className="absolute right-5 top-5 text-blue cursor-pointer font-[700]"
          >
            Edit
          </p>
          <a href={resume.name} className="text-blue underline">
            {resume.name}
          </a>
        </div>

        <div className="md:mx-[1rem] my-[2rem] relative  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]">
          <h1 className="font-[700] text-[1rem]">Screening questions</h1>
          <p
            onClick={() => setStep(2)}
            className="absolute right-5 top-5 text-blue cursor-pointer font-[700]"
          >
            Edit
          </p>
          <div className="my-[1rem]">
            <label htmlFor="">Why do you want work with us?</label>
            <textarea
              name="why_work_with_us"
              value={why_work_with_us}
              className="w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 "
              cols="100"
              rows="7"
            ></textarea>
          </div>

          <div className="mb-[1rem]">
            <label htmlFor="">Write a cover letter</label>
            <textarea
              value={cover_letter}
              name="cover_letter"
              className="w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 "
              cols="100"
              rows="7"
            ></textarea>
          </div>
        </div>

        <div className="md:mx-[1rem] relative my-[2rem]  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]">
          <p
            onClick={() => setStep(3)}
            className="absolute right-5 top-5 text-blue cursor-pointer font-[700]"
          >
            Edit
          </p>

          <h1 className="font-[700] text-[1rem]">Contact Info</h1>

          <div className="mt-[1rem]">
            <FormInputBox
              type="email"
              label="Email"
              className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
              placeholder="Email"
              name="email_address"
              value={email_address}
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
              value={phone_number}
            />
          </div>
        </div>

        <div className="md:mx-[1rem]">
          By pressing Submit:
          <p>1) You agree to our Terms and Privacy Policies;</p>
          <p>
            2) You consent to your application being transmitted to the Employer
            (EduJobs does not guarantee receipt), & processed & analyzed in
            accordance with its & Edujobs' terms & privacy policies;
          </p>
        </div>

        <div className="pt-[3rem] md:hidden flex justify-between">
              <button
                className="bg-[#f0f0f0] hover:bg-blue hover:text-white uppercase opacity-100  px-[1rem]  text-black rounded-[5px] p-2"
                type="submit"
                onClick={() => prevStep()}
              >
                BACK
              </button>

              {!isLoading &&<button
                className="bg-blue uppercase opacity-100 px-[1rem]  text-white rounded-[5px] p-2"
                type="submit"
                onClick={() => handleSubmission()}
              >
                SUBMIT
              </button> }

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

            <div className="pt-[3rem] hidden md:flex justify-evenly">
              <button
                className="bg-[#f0f0f0] flex justify-center gap-6 items-center w-full max-w-[300px] hover:bg-blue hover:text-white uppercase opacity-100  px-[1rem]  text-black rounded-[5px] p-2"
                type="submit"
                onClick={() => prevStep()}
              >
                 <FaArrowLeft className="" /> BACK
              </button>

             { !isLoading &&  <button
                className="bg-blue w-full flex justify-center gap-6 items-center max-w-[300px] uppercase opacity-100 px-[1rem]  text-white rounded-[5px] p-2"
                type="submit"
                onClick={() => handleSubmission()}
              >
                SUBMIT <FaArrowRight />
              </button> }

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
      </div>
    </section>
  );
};
