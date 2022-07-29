import React from "react";
import { RegisterForm } from "../components/Forms/RegisterForm";
import { RegisterFormMobile } from "../components/Forms/RegisterFormMobile";



export const RegisterFormUI = () => {
  
  return (
    <>

    <section className="flex  justify-center items-center md:hidden">
      <div className="w-full max-w-sm">
      <RegisterFormMobile />

      </div>
    </section>


    {/* Desktop */}
      <section className='hidden md:block relative bg-hero lg:pt-[20px] lg:pb-[70px]  h-full bg-center  bg-cover bg-no-repeat'>
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

     <RegisterForm />

      </div>
      
    </section>

    </>


  )
}
