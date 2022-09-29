import React from "react";
import { EmployersNavbar } from "../LoggedIn/EmployersNavbar";
import img from "../../assets/post-job.png";
import { JobForm}  from "./JobForm";

export const EmployerPostJob = () => {
  return (
    <>
      <EmployersNavbar />
      <section>
        <div className="flex gap-[3rem] flex-row">
          <div className="relative w-1/3">
            <img src={img} className=" h-full " alt="" />

            <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue opacity-50 "></div>
          </div>
          <div className="mt-[2rem] w-1/2">
            <JobForm />
          </div>
        </div>
      </section>
    </>
  );
};
