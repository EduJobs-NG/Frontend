import React from "react";

export const Hero = () => {
  return (
    <>
      <section className="relative bg-employers h-full py-[150px] lg:py-[200px] max-h-[700px] bg-top bg-cover bg-no-repeat">
        <div className="container mx-auto flex flex-col justify-center ">
          <h2 className="title text-[35px] font-heading lg:text-[66px] z-[999] font-[700] text-white max-w-[600px]">
            Hire Top Talents faster than ever!
          </h2>
          <p className="subtitle text-[25px] z-[999] lg:text-[36px] text-white max-w-[700px] ">
            Save time and money on recruitment with EduJobs matchmaking
            technology and Candidates' assessement.
          </p>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue opacity-60 "></div>
      </section>
    </>
  );
};
