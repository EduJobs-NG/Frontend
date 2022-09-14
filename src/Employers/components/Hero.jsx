import React from "react";

export const Hero = () => {
  return (
    <>
      <section className="relative bg-employers h-full py-[150px] lg:py-[200px] max-h-[700px] bg-center bg-cover bg-no-repeat">
        <div className="container relative mx-auto z-[99] ">
          <h2 className="title text-[2.4rem] font-heading lg:text-[4rem]  font-[700] text-white max-w-[600px]">
            Hire Top Talents faster than ever!
          </h2>
          <p className="subtitle text-[1.3rem]  lg:text-[1.8rem] text-white max-w-[700px] ">
            Save time and money on recruitment with EduJobs matchmaking
            technology and Candidates' assessement.
          </p>
          <div className="mt-[1rem] ">
          <a href="/employer/register" className="bg-white opacity-100 font-[700] py-[0.6rem] px-[4rem]  text-blue hover:bg-blue hover:text-white transition-all rounded-md p-2">START HIRING</a>
        
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue opacity-60 "></div>
      </section>
    </>
  );
};
