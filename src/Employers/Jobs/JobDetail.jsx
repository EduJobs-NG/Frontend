import React from "react";
import { FaTimes } from "react-icons/fa";
import { Markup } from "interweave";

export const JobDetail = ({ job, setShowJobDetail }) => {
  return (
    <section className="bg-white relative ">
      <div className="flex justify-between">
        <h1 className="font-[700] text-2xl">Job Details</h1>
        <div>
          <FaTimes
            onClick={() => setShowJobDetail(false)}
            className="text-blue text-[1.3rem]  cursor-pointer"
          />
        </div>
      </div>

      {/* <p className='pb-[1rem]'>Here’s a preview of how people might view your job</p> */}
      <hr className="text-[#808080] " />

      <div className="mt-[1rem]">
        <h1 className="font-[700] text-xl">{job?.title}</h1>
        <p>{job?.organization_name}</p>
        <p>{job?.location}</p>
        <p>{job?.summary}</p>

        <div className="mt-[1rem]">
          <p className="font-[700]">Requirements:</p>
          <Markup content={job?.requirements} />
        </div>

        <div className="mt-[1rem]">
          <p>Job type: {job?.job_type} </p>
          <p>
            Salary: #{job?.min_pay_range} - #{job?.max_pay_range}{" "}
          </p>
          <p>Application Deadline: {job?.deadline}</p>
        </div>
      </div>
    </section>
  );
};
