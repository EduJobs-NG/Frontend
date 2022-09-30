import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Circles } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Error } from "../../components/Error";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Markup } from 'interweave';

export const RecentJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [nextURL, setNextURL] = useState();
  const [prevURL, setPrevURL] = useState();
  

  const handleView = (id) => {
    if (selectedJob === id) {
      return setSelectedJob(null);
    }
    setSelectedJob(id);
  };
 
  const getJobs = async () => {
    setIsLoading(true);
    const response = await axios
      .get( `${process.env.REACT_APP_BASE_URL}jobseeker/job-list`)
      .catch((err) => {
        if (err.message === "Network Error") {
          toast.error(`${err.message}. Could not fetch jobs.`);
          setErrorMessage(err.message);
          setError(true);
          setIsLoading(false);
        }
        console.log(err);
        setIsLoading(false);
        setErrorMessage(err.message);
        setError(true);
      });

    if (response && response.data) {
      setError(false);
      console.log(response)
      setErrorMessage('');
      setJobs(response.data.results);
      setPrevURL(response.data.previous)
      setNextURL(response.data.next)
      setIsLoading(false);
    }
  };

  const handlePagination = async (url) =>{
    setIsLoading(true);
    const response = await axios
      .get(url)
      .catch((err) => {
        if (err.message === "Network Error") {
          toast.error(`${err.message}. Could not fetch jobs.`);
          setErrorMessage(err.message);
          setError(true);
          setIsLoading(false);
        }
        console.log(err);
        setIsLoading(false);
        setErrorMessage(err.message);
        setError(true);
      });

    if (response && response.data) {
      setError(false);
      setErrorMessage('');
      setJobs(response.data.results);
      setPrevURL(response.data.previous)
      setNextURL(response.data.next)
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getJobs();
  }, []);
  return (
    <>
      <section className="bg-[#f5f5f5]">
        <ToastContainer />

        <div className="container py-[4rem] mx-auto">
          <hr className="text-[#d9d9d9]" />
          <h2 className="text-blue my-[1rem] font-[700] text-[1.5rem]">
            Recent Jobs
          </h2>

          {error && <Error message={errorMessage} />}

          {isLoading && (
            <div className="flex justify-center">
              <Circles type="ThreeDots" width={100} height={20} color="blue" />
            </div>
          )}
          {(!isLoading && jobs.length) === 0 && (
            <p>No Jobs</p>
          )}
          {jobs &&
            jobs.map((job) => {
              const { id } = job;
              console.log(job.applied)
              return (
                <div
                  key={job.id}
                  className="relative md:mx-[1rem] my-[2rem]  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]"
                >
                  <h2 className="font-[700] text-[1.2rem]">{job.title}</h2>
                  <p className="font-[500]">{job.organization_name}</p>
                  <p className="font-[500]">{job.location}</p>
                  <p className="mt-[0.5rem] mb-[1.2rem]">
                    {selectedJob === id
                      ? `${job.summary}`
                      : `${job.summary.substring(0, 250)}...`}
                  </p>
                  <p className="absolute  left-5 bottom-[0.5rem]">
                    {job.posted_time}
                  </p>
                  <p
                    onClick={() => handleView(id)}
                    className="cursor-pointer font-[600] absolute text-blue right-5 bottom-[0.5rem]"
                  >
                    {selectedJob === id ? "View Less" : "View More"}
                  </p>
                  {selectedJob === id && (
                    <div className="my-[1rem]">
                      <h1 className="font-[700]">Requirements</h1>

                      <div>
                        {job.requirements
                          ? <Markup content={job.requirements} />
                          : "No requirements from the organization"}
                      </div>
                      <div className="grid w-full  my-[2rem] md:mt-[3rem] place-items-center">
                        <Link to={`/dashboard/apply/job/${id}`}>
                          <button disabled={job.applied = true}
                            className={job.applied = true ? "bg-blue uppercase opacity-25 w-full md:w-[300px] px-[5rem] text-white rounded-[5px] p-2": "bg-blue uppercase opacity-100 w-full md:w-[300px] px-[5rem] text-white rounded-[5px] p-2"}
                            type="submit"
                          >
                            {job.applied = true ? 'APPLIED' : 'APPLY'}
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

          <div className="flex flex-row justify-end">
            <div className="grid grid-cols-2 gap-4">
            {prevURL && 
                <button onClick={() => handlePagination(prevURL)} className="bg-blue flex justify-center items-center text-white px-[1rem] rounded-md py-[0.3rem]">  <FaArrowLeft className="mr-1" />PREV </button>
            }
              {nextURL && 
              <button onClick={() => handlePagination(nextURL)} className="bg-blue flex justify-center items-center text-white px-[1rem] rounded-md py-[0.3rem]">NEXT <FaArrowRight className="ml-1" /></button>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
