import React from 'react';

export const Hero = () => {
  return (
    <>
    <section className='relative bg-employers h-full py-[150px] lg:py-[200px] max-h-[700px] bg-top bg-cover bg-no-repeat'>
      <div className='container mx-auto flex flex-col justify-center '>
        <h2 className='title text-[35px] font-heading lg:text-[66px] z-[999] font-[700] text-white max-w-[600px]'>Have Great Jobs
          Find You!</h2>
        <p className='subtitle text-[25px] z-[999] lg:text-[36px] text-white max-w-[600px] '>
          Find Jobs that match Your interests
          on EduJobs NG
        </p>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#02378B] opacity-40 ">
      </div>

    </section>
    
    </>

  )
}
