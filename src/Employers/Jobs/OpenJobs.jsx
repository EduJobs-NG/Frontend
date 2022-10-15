import React, { useState, useContext, useEffect } from "react";
import img from "../../assets/jobs-2.png";
import useAxios from "../../utils/useAxios";
import {JobDetailPopup} from './JobDetailPopup'
import { SearchJobs } from "./SearchJobs";
import AuthContext from "../../context/AuthContext";

export const OpenJobs = () => {
  const {employerUser} = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false);
  const [openJobs, setOpenJobs] = useState([]);
  const [showJobDetail, setShowJobDetail] = useState(false)
  const api = useAxios();
  const getOpenJobs = async () => {
    setIsLoading(true);
    const response = await api.get(`/employer/users/me/`).catch((err) => {
      console.log(err);
    });

    if (response && response.data) {
      console.log(response);
      setOpenJobs(response.data);
    }
  };

  useEffect(() => {
    getOpenJobs();
  }, []);

  return (
    <section className="container pt-[4rem] mx-auto">
      {employerUser.first_name}
      <SearchJobs />
      {showJobDetail && <JobDetailPopup setShowJobDetail={setShowJobDetail} />}
      <div className="bg-white rounded-[1rem] px-[2rem] py-[1rem] grid lg:grid-cols-4 gap-[2rem]">
        <div>
          <h1 className="text-blue font-[700] ">Chemistry Teacher</h1>
          <p>Lagos</p>
          <p>Posted: Aug 16 2022</p>
        </div>

        <div className="flex flex-row justify-center lg:justify-start items-center text-center gap-[1rem]">
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
        </div>

        <div className="flex flex-row justify-between lg:flex-col">
          <p className="text-blue">Job status</p>
          <select
            name="status"
            className="border p-2.5   border-solid border-[#808080] rounded-lg outline-none"
          >
            <option value="open">Open</option>
            <option value="close">Close</option>
          </select>
        </div>

        <div className="flex flex-row  justify-between md:justify-center items-center  gap-[1rem]">
          <div>
            <p className="text-blue cursor-pointer">Edit job</p>
          </div>
          <div>
          <p onClick={() => setShowJobDetail(true)} className="bg-blue cursor-pointer px-[1rem] py-[0.4rem] text-white rounded-[5px]">
            View job details
          </p>
        </div>
      </div>
      </div>

      {/* {openJobs.length === 0 && ( */}
      <div className="flex flex-row text-center h-screen justify-center items-center">
        <div>
          <img src={img} alt="" />
          <p className="mt-[1rem]">No Jobs posted yet</p>
        </div>
      </div>

      {/* )} */}
    </section>
  );
};
