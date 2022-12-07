/* eslint-disable no-unused-vars */
import Moment from "moment";
import { Markup } from "interweave";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import api from '../../utils/AxiosInstance';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import jobPosted from "../../assets/jobPosted.png";

export const PreviewJobPost = ({ formData: data, setShowPreview }) => {
  // navigation hook
  const navigate = useNavigate();

  // params hooks
  const { id } = useParams();

  // states
  const [isLoading, setIsLoading] = useState(false);
  const [jobSucess, setJobSuccess] = useState(false);

  // methods
  const handleSubmission = async () => {
    setIsLoading(true);
    const data = new FormData();
    for (let key in data) data.append(key, data[key]);

    try {
      await api.put(`/employer/jobs/${id}/`, data);
      setIsLoading(() => false);
      setJobSuccess(() => true);
      setShowPreview(() => true);
      setTimeout(() => { navigate("/employer/dashboard/view-jobs"); }, 9000);
    }
    catch (err) {
      console.error(err);
      setIsLoading(() => false);
      toast.error(err?.response?.data?.detail || 'Something went wrong');
    };
  };

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
            <h1 className="font-[700] text-xl">{data?.title}</h1>
            <p>{data?.organization_name}</p>
            <p>{data?.location}</p>
            <p>{data?.summary}</p>

            <div className="mt-[1rem]">
              <p className="font-[700]">Requirements:</p>
              <Markup content={data?.requirements} />{" "}
            </div>

            <div className="mt-[1rem]">
              <p>Job type: {data?.job_type}</p>
              <p>
                Salary: #{data?.min_pay_range} to #{data?.max_pay_range}{" "}
              </p>
              <p>Application Deadline: {data?.deadlineDate}</p>
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
      )}

      {jobSucess && (
        <div className="flex flex-col text-center items-center justify-center">
          <div className="mb-[1rem]">
            <img src={jobPosted} alt="" />
          </div>
          <p className="px-[1rem] font-[700]">Job Posted Successfully!</p>
          <p className="px-[1rem] font-[700]">Your job is pending review. You will be notified when it is posted.</p>
          <a
            type="submit"
            href='/employer/dashboard/view-jobs'
            className="bg-blue mt-[2rem] w-full flex justify-center gap-6 items-center  uppercase opacity-100 px-[1rem] 
            text-white rounded-[5px] p-2"

          >
            RETURN TO HOME
          </a>
        </div>
      )}

    </section>
  );
};
