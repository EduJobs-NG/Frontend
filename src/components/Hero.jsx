import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { SearchJobs } from '../JobSeekers/components/SearchJobs';

export const Hero = () => {
  // effects hooks
  useEffect(() => { Aos.init(); }, []);

  return (
    <section
      className=' relative h-[clamp(30em,calc(100vw/2),90vh)] items-center justify-center flex flex-col text-white bg-hero bg-center bg-cover bg-no-repeat gap-8 before:mix-blend-multiply before:z-0 before:w-full before:h-full before:absolute before:bg-blue before:opacity-60 text-white'
    >
      <div className="flex flex-col gap-2 z-10">
        <h2 className='text-center font-bold text-[clamp(2em,5vw,6em)] leading-[1em]'>
          Have Great Jobs Find You!
        </h2>
        <p className='text-center text-[clamp(1em,2vw,6em)] leading-[1.2em]'>
          Find Jobs that match Your interests on EduJobs NG
        </p>
      </div>
      {/* <div className="flex flex-wrap p-4 gap-4">
      </div> */}
      <SearchJobs />
    </section>
    // <>
    // <section className='relative bg-hero h-full py-[150px] lg:py-[150px] max-h-[700px] bg-top bg-cover bg-no-repeat'>
    //   <div className='relative z-[999] container mx-auto flex flex-col justify-center items-center text-center '>
    //     <h2 className='title text-[35px] font-heading lg:text-[5rem] z-[999] font-[700] text-white'>Have Great Jobs
    //       Find You!</h2>
    //     <p className='subtitle text-[25px] z-[999] lg:text-[36px] text-white '>
    //       Find Jobs that match Your interests
    //       on EduJobs NG
    //     </p>
    //   <SearchJobs />

    //   </div>
    //   <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#02378B] opacity-40 ">
    //   </div>

    // </section>
    // </>

  )
}
