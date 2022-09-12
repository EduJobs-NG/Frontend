import React from "react";
import { RegisterForm } from "../../components/Forms/RegisterForm";



export const JobseekerRegisterFormUI = () => {
  
  return (
    <>
{/* hidden md:flex */}
    <section className=" bg-blue flex justify-center items-center">
      <div className="w-full py-[2rem]  max-w-[500px]">
      
      <RegisterForm />

      </div>
    </section>

    


    
    </>


  )
}