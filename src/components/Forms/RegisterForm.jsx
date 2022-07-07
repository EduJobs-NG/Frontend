import React from 'react';
import {FormInputBox} from './FormInputBox';

export const RegisterForm = () => {
  return (
      <section className='relative bg-hero h-full py-[150px] lg:py-[200px] max-h-[700px] bg-top bg-cover bg-no-repeat'>
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#02378B] opacity-40 z-[100] ">
      </div> */}
      <div className='container mx-auto flex flex-col lg:flex-row lg:gap-x-[100px] z-[999]'>
        <div>
        <h2 className='title text-[35px] font-heading lg:text-[66px] z-[999] font-[700] text-white max-w-[600px]'>Have Great Jobs
          Find You!</h2>
        <p className='subtitle text-[25px] z-[999] lg:text-[36px] text-white max-w-[600px] '>
          Find Jobs that match Your interests
          on EduJobs NG
        </p>
        </div>

        <div className='border bg-white p-2 px-4 rounded max-w-[700px]'>
          <div className='flex flex-row gap-x-[2rem]'>
          <FormInputBox type="text" className="border border-solid border-[#808080] rounded outline-none"  placeholder="First Name" />
          <FormInputBox type="text"  className="border border-solid border-[#808080] rounded outline-none" placeholder="Last  Name" />
          </div>
          <FormInputBox type="email"  className="border border-solid border-[#808080] rounded outline-none"placeholder="Email" />
          <FormInputBox type="password"  className="border border-solid border-[#808080] rounded outline-none" placeholder="Password" />
          <FormInputBox type="password"  className="border border-solid border-[#808080] rounded outline-none" placeholder="Confirm Password" />

        </div>

      </div>
      
    </section>
  )
}
