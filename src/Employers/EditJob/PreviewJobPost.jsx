import Moment from "moment";
import { Markup } from "interweave";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import useAxios from '../../utils/useAxios';
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import jobPosted from "../../assets/jobPosted.png";
import { useNavigate, useParams } from "react-router-dom";


export const PreviewJobPost = ({ formData, setShowPreview }) => {
  // navigation hook
  const navigate = useNavigate();
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
  const newDeadline = Moment(deadline).format('YYYY-MM-DD');
  console.log("new deadline", newDeadline)
  // params hooks
  const { id } = useParams();

  const api = useAxios();
  // states
  const [isLoading, setIsLoading] = useState(false);
  const [jobSucess, setJobSuccess] = useState(false);

  // methods
  const handleSubmission = async () => {
    setIsLoading(true);
    // const data = new FormData();
    // for (let key in data) data.append(key, data[key]);
   
    const data = new FormData();
    data.append("title", title);
    data.append("summary", summary);
    data.append("requirements", requirements);
    data.append("job_type", job_type);
    data.append("deadline", newDeadline);
    data.append("min_pay_range", min_pay_range);
    data.append("max_pay_range", max_pay_range);
    data.append("location", location);
    data.append('organization_name', organization_name);
    

    try {
      await api.patch(`/admin/jobs-review/${id}/`, data);
      setIsLoading(() => false);
      setJobSuccess(() => true);
      setShowPreview(() => true);
      setTimeout(() => { navigate("/employer/dashboard/view-jobs"); }, 9000);
    }
    catch (err) {
      console.error(err);
      setIsLoading(() => false);
      toast.error(err?.response?.detail || 'Something went wrong');

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
              <p>Application Deadline: {deadline}</p>
            </div>

            <div className="mt-[3rem] flex justify-center">
              {!isLoading && (
                <button
                  onClick={handleSubmission}
                  className="bg-blue opacity-100  px-[5rem] text-white rounded-[5px] p-2"
                  type="submit"
                >
                  Update
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
          <p className="px-[1rem] font-[700]">Job Updated Successfully!</p>
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