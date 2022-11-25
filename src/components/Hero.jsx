import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import SearchJobs from '../JobSeekers/components/SearchJobs';

export const Hero = ({ title, location, Title, Location, scrollJob = null }) => {
  // effects
  useEffect(() => { Aos.init(); }, []);

  return <section
    className=' relative h-[clamp(30em,calc(100vw/2),90vh)] items-center justify-center flex flex-col
    text-white bg-hero bg-center bg-cover bg-no-repeat gap-8 before:mix-blend-multiply before:z-0 
    before:w-full before:h-full before:absolute before:bg-blue before:opacity-60'
  >
    <div className="flex flex-col gap-2 z-10">
      <h2 className='text-center font-bold text-[clamp(2em,5vw,6em)] leading-[1em]'>
        Have Great Jobs Find You!
      </h2>
      <p className='text-center text-[clamp(1em,2vw,6em)] px-[1rem] leading-[1.2em]'>
        Find Jobs that match Your interests on EduJobs
      </p>
    </div>
    <SearchJobs Title={Title} Location={Location} t={title} l={location} scrollJob={scrollJob} />
  </section>;
};
