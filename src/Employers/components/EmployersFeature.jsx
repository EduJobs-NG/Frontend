import React from "react";
import img1 from "../../assets/employerfeature-1.png";
import img2 from "../../assets/employerfeature-2.png";
import img3 from "../../assets/employerfeature-3.png";

export const EmployersFeature = () => {
  return (
    <section className="container py-[2rem] mx-auto">
      <h1 className="font-[700] text-blue max-w-[500px] text-[2rem] pt-[1rem] text-center mx-auto">What EduJobs offers</h1>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col mt-[4rem] md:flex-row gap-x-[150px]  items-center">
        <div className="max-w-[300px]">
          <h1 className="font-[700] text-blue text-2xl">
            80% Faster Shortlising
          </h1>
          <p className="font-[600]">
            Utilize EduJobs to automatically rank Canddates and get rid of the
            never-ending staks of CV
          </p>
        </div>

        <div className="mt-[1rem] md:mt-0">
          <img src={img1} className="w-[70%]" alt="" />
        </div>
      </div>
      <div className="flex flex-col mt-[4rem] md:flex-row gap-x-[150px] items-center">
        <div className="flex  justify-start">
          
          <img src={img2} className="w-[70%]" alt="" />
        </div>

        <div className="mt-[1rem] text-right md:mt-0 max-w-[300px]">
          <h1 className="font-[700] text-blue text-2xl">
            Validated Candidates
          </h1>
          <p className="font-[600]">
            Our platforms give options to select validated candidates who have
            gone through our assessements.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-[4rem] md:flex-row justify-between items-center">
        <div className="max-w-[300px]">
          <h1 className="font-[700] text-blue text-2xl">Simplified Access</h1>
          <p className="font-[600]">
            Post jobs, filter candidates, comment and benefit from our
            best-in-class customer support.
          </p>
        </div>

        <div className="mt-[1rem] md:mt-0">
          <img src={img3} className="w-[70%]" alt="" />
        </div>
      </div>
      </div>

    </section>
  );
};
