import React from "react";
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section
      className=' relative h-[clamp(30em,calc(100vw/2),90vh)] items-flex-start sm:justify-center justify-end flex flex-col before:mix-blend-multiply before:z-0 before:w-full before:h-full before:absolute before:bg-blue before:opacity-60 text-white bg-employers bg-center bg-cover bg-no-repeat gap-4'
    >
      <h2 className='mx-[5%] z-10 w-[60%] font-bold text-[clamp(2em,5vw,6em)] leading-[1em]'>
        Hire Top Talents faster than ever!
      </h2>
      <p className='mx-[5%] z-10 text-[clamp(1em,2.2vw,6em)] w-[max(60%,20em)] leading-[1.2em] mb-20 sm:mb-0'>
        Save time and money on recruitment with EduJobs matchmaking
        technology and Candidates' assessement.
      </p>
      <Link to='/employer/register' 
      className='uppercase mx-[5%] my-4 z-10 bg-white self-start text-blue p-2  px-12 rounded font-bold hidden sm:block hover:brightness-150 transition-all ease'
      >
        start hiring
      </Link>
    </section>

  );
};
