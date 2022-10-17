import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Markup } from "interweave";
import Moment from "moment";
import useAxios from "../../utils/useAxios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jobPosted from "../../assets/jobPosted.png";

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
  const api = useAxios();
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
    // data.append('job', job)

    const response = await api.post(`/employer/jobs/`, data).catch((err) => {
      console.log(err);
      toast.error(err.message);
      setIsLoading(false);
    });

    if (response) {
      setIsLoading(false);
      setJobSuccess(true);
      console.log(response);
      setShowPreview(true);
      setTimeout(() => {
        navigate("/employer/dashboard/view-jobs");
      }, 2000);
    }
  };

  const deadlineDate = Moment(deadline).format("MMM DD YYYY");
  return (
    <section className="bg-white relative ">

      {!jobSucess && (
        <div> 
      <FaTimes
        onClick={() => setShowPreview(false)}
        className="text-blue text-[1.3rem]  cursor-pointer absolute right-5 top-"
      />
      <h1 className="font-[700] text-2xl">Job Preview</h1>
      <p className="pb-[1rem]">
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
            Salary: #{min_pay_range} to #{max_pay_range}{" "}
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
          <div className="flex flex-col text-center justify-center">
            <img src={jobPosted} alt="" />
            <p>Job Posted Successfully!</p>
          </div>
        )}
      
    </section>
  );
};
