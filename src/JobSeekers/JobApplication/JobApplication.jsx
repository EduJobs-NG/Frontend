import api from "../../utils/api";
import { Markup } from 'interweave';
import { UserForm } from "./UserForm";
import { useParams } from 'react-router-dom';
import { Error } from "../../components/Error";
import { Circles } from 'react-loader-spinner';
import React, { useState, useEffect } from "react";
import { JobseekerNavbar } from "../components/JobseekerNavbar";



export const JobApplication = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [error, setError] = useState(false)
  const [viewMore, setViewMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getJob = async () => {
    setIsLoading(true); setError(false);
    try {
      const response = await api.get(`jobseeker/job-list/${id}`);
      setJob(response?.data || {});
    } catch (error) {
      console.error(error);
      setError(error.message);
    };
    setIsLoading(false);
  };


  useEffect(() => { getJob(); }, [id]);

  return (
    <section className="bg-[#f5f5f5]">
      <JobseekerNavbar />

      {error && <Error message={error} />}

      {isLoading && (
        <div className='flex mt-[1rem] pb-[1rem] justify-center'>
          <Circles type="ThreeDots"
            width={100} height={20} color="blue"
          />
        </div>)}

      {!isLoading && !error && (

        <div className="container py-[2rem] mx-auto">
          <h2 className="font-[700] text-2xl">Job Application</h2>
          <div
            key={job?.id}
            className="relative md:mx-[1rem] mt-[1.5rem]  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]"
          >


            <h2 className="font-[700] text-[1.2rem]">{job?.title}</h2>
            <p className="font-[500]">{job?.organization_name}</p>
            <p className="font-[500]">{job?.location}</p>
            <p className="mt-[0.5rem] mb-[1.2rem]">
              {/* {viewMore ? `${job?.summary}` || '' : `${job && job.summary.substring(0, 250)}...` || ''} */}
              {job?.summary}
            </p>
            <p className="absolute  left-5 bottom-[0.5rem]">{job.posted_time} ago</p>
            <p
              onClick={() => setViewMore(!viewMore)}
              className="cursor-pointer font-[600] absolute text-blue right-5 bottom-[0.5rem]"
            >
              {viewMore ? "View Less" : "View More"}
            </p>
            {viewMore && (
              <div className="my-[1rem]">
                <h1 className="font-[700]">Requirements</h1>

                <div>
                  {job.requirements
                    ? <Markup content={job.requirements} />
                    : "No requirements from the organization"}
                </div>

              </div>
            )}

          </div>
        </div>

      )}
      {!isLoading && !error && (
        <div className="pb-[2rem]">
          {<UserForm job={job} />}
        </div>
      )}

    </section>
  );
};
