import React, { useState } from "react";
import { OpenJobs } from "./OpenJobs";
import { ClosedJobs } from "./ClosedJobs";

export const Jobs = () => {
  const jobStatus = ["open jobs", "closed jobs"];
  const [job, setJob] = useState("open");
  const [active, setActive] = useState(0);
  console.log(active)
  const handleTitle = (e, index) => {
    setJob(() => e.target.textContent.toLowerCase());
    setActive(index);
  };

  const handleJobsStatus = () => {
    switch (job) {
      case "open jobs":
        return <OpenJobs />;
      case "closed jobs":
        return <ClosedJobs />;
      default:
        return <OpenJobs />;
    }
  };
  return (
    <section>
      <div className="pt-[2rem] flex flex-row  justify-center items-center">
        {jobStatus.map((job, index) => {
          return (
            
              <p className={`${active === index ? 'bg-blue text-white': 'bg-white text-blue'}  
               bg-white px-[2rem] py-[0.6rem] cursor-pointer capitalize rounded-[15px] text-blue`} onClick={(e)=> handleTitle(e, index)}>{job}</p>
            
          );
        })}
      </div>

      {handleJobsStatus()}
    </section>
  );
};
