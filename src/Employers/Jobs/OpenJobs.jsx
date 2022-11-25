import React, { useState, useContext, useEffect } from "react";
import img from "../../assets/jobs-2.png";
import useAxios from "../../utils/useAxios";
import { Circles } from "react-loader-spinner";
import {JobDetailPopup} from './JobDetailPopup'
import { SearchJobs } from "./SearchJobs";
import AuthContext from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';


export const OpenJobs = () => {
  const {employerUser, authTokens} = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false);
  const [openJobs, setOpenJobs] = useState([]);
  const [jobItem, setJobItem] = useState({});
  const [showJobDetail, setShowJobDetail] = useState(false)
  const api = useAxios();
  
  const accessToken = localStorage.getItem('authTokens');
  const tokens = JSON.parse(accessToken);
  const {access} = tokens;

  const getOpenJobs = async () => {
    setIsLoading(true);
    const response = await api.get(`/employer/jobs/open/`).catch((err) => {
      console.log('An error occured. Try again or refresh');
      setIsLoading(false);
      toast.error(`${err.message}. Please refresh`);
    });

    if (response && response.data) {
          // console.log(response);
          setOpenJobs(response.data);
          setIsLoading(false);
          
    
        }

    


  };
  const handleJobDetail = (job) =>{
    setShowJobDetail(true);
    setJobItem(job)
  }
  useEffect(() => {
    getOpenJobs();
  }, []);
  return (
    <section className="container py-[4rem] mx-auto">
        <ToastContainer />

         {isLoading && (
            <div className="flex justify-center">
              <Circles type="ThreeDots" width={100} height={20} color="blue" />
            </div>
          )}
      <SearchJobs />
      {showJobDetail && <JobDetailPopup job={jobItem} setShowJobDetail={setShowJobDetail} />}
      {openJobs && !isLoading &&  openJobs.map((job) => {
        return (
      
      <div className="bg-white rounded-[1rem] my-[2rem] px-[2rem] py-[1rem] grid lg:grid-cols-3 gap-[2rem]">
        <div>
          <h1 className="text-blue font-[700] ">{job.title}</h1>
          <p>{job.location}</p>
          <p>{job.created}</p>
        </div>

        {/* <div className="flex flex-row justify-center lg:justify-start items-center text-center gap-[1rem]">
          <div>
            <p>25</p>
            <p>Applied</p>
          </div>
          <div>
            <p>7</p>
            <p>Contacted</p>
          </div>
          <div>
            <p>2</p>
            <p>Hired</p>
          </div>
        </div> */}

        <div className="flex flex-row justify-between lg:flex-col">
          <p className="text-blue">Job status</p>
          <select
            name="status"
            className="border p-2.5 border-solid border-[#808080] rounded-lg outline-none"
          >
            <option value={job.open_status}>{job.open_status}</option>
            {/* <option value={job.open_status}>Close</option> */}
          </select>
        </div>

        <div className="flex flex-row  justify-between md:justify-center items-center  gap-[1rem]">
          <div>
            <p className="text-blue cursor-pointer">
              {/* <a href={`/employer/dashboard/edit-job/${job.id}`}> Edit job</a> */}
             
              </p>
          </div>
          <div>
          <p onClick={() => handleJobDetail(job)} className="bg-blue cursor-pointer px-[1rem] py-[0.4rem] text-white rounded-[5px]">
            View job details
          </p>
        </div>
      </div>
      </div>
        )
      }) 
  

      }

      {openJobs.length === 0 && !isLoading && (
      <div className="flex flex-row text-center h-screen justify-center items-center">
        <div>
          <img src={img} alt="" />
          <p className="mt-[1rem]">No Jobs posted yet</p>
        </div>
      </div>

       )} 
    </section>
  );
};
