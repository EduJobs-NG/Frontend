import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Markup } from "interweave";
import Moment from "moment";
import api from "../../utils/AxiosInstance";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jobPosted from "../../assets/jobPosted.png";
import naira from '../../assets/naira.jpg'



export const PreviewJobPost = ({ formData, setShowPreview }) => {
  const {
    summary,
    title,
    organization_name,
    requirements,
    job_type,
    deadline,
    min_pay_range,
    max_pay_range,
    location,
  } = formData;
  const [isLoading, setIsLoading] = useState(false);
  const [jobSucess, setJobSuccess] = useState(false);
  const navigate = useNavigate();
  const handleSubmission = async () => {
    setIsLoading(true);
    const data = new FormData();
    data.append("title", title);
    data.append("summary", summary);
    data.append("requirements", requirements);
    data.append("job_type", job_type);
    data.append("deadline", deadline);
    data.append("min_pay_range", min_pay_range);
    data.append("max_pay_range", max_pay_range);
    data.append("location", location);
    data.append('organization_name', organization_name);
    // data.append('job', job)

    const response = await api.post(`/employer/jobs/`, data).catch((err) => {
      // console.log(err);
      toast.error(err.message);
      setIsLoading(false);
    });

    if (response) {
      setIsLoading(false);
      setJobSuccess(true);
      // console.log(response);
      setShowPreview(true);
      setTimeout(() => {
        navigate("/employer/dashboard/view-jobs");
      }, 9000);
    }
  };

  const deadlineDate = Moment(deadline).format("MMM DD YYYY");
  return (
    <section className="bg-white ">

      {!jobSucess && (
        <div> 
          <div className="flex justify-between">
          <h1 className="font-[700] text-2xl">Job Preview</h1>
          <div className="">
          <FaTimes
        onClick={() => setShowPreview(false)}
        className="text-blue text-[1.3rem]  cursor-pointer "
      />
          </div>
          </div>
      
      <p className="py-[0.5rem]">
        Here’s a preview of how people might view your job
      </p>
      <hr className="text-[#808080] " />

      <div className="mt-[1rem]">
        <h1 className="font-[700] text-xl">{title}</h1>
        <p>{organization_name}</p>
        <p>{location}</p>
        <p>{summary}</p>

        <div className="mt-[1rem]">
          <p className="font-[700]">Requirements:</p>
          <Markup content={requirements} />{" "}
        </div>

        <div className="mt-[1rem]">
          <p>Job type: {job_type}</p>
          <p>
            Salary: <img className="w-[10px] inline-flex" src={naira} alt="" /> {min_pay_range} to <img className="inline-flex w-[10px]" src={naira} alt="" /> {max_pay_range}{" "}
          </p>
          <p>Application Deadline: {deadlineDate}</p>
        </div>

        <div className="mt-[3rem] flex justify-center">
          {!isLoading && (
            <button
              onClick={handleSubmission}
              className="bg-blue opacity-100  px-[5rem] text-white rounded-[5px] p-2"
              type="submit"
            >
              Submit
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
        </div>
        </div>
      ) }

        {jobSucess && (
          <div className="flex flex-col text-center items-center justify-center">
            <div className="mb-[1rem]">
            <img src={jobPosted} alt="" />
            </div>
            <p className="px-[1rem] font-[700]">Job Posted Successfully!</p>
            <p className="px-[1rem] font-[700]">Your job is pending review. 
You will be notified when it is posted.</p>
<a href='/employer/dashboard/view-jobs'
                className="bg-blue mt-[2rem] w-full flex justify-center gap-6 items-center  uppercase opacity-100 px-[1rem]  text-white rounded-[5px] p-2"
                type="submit"
                
              >
                RETURN TO HOME
              </a>
          </div>
        )}
      
    </section>
  );
};
