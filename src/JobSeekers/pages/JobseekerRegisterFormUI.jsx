import React from "react";
import {NavLink} from 'react-router-dom';
import {navigation} from '../../data';
import { RegisterFormMobile } from "../../components/Forms/RegisterFormMobile";
import { RegisterForm } from "../../components/Forms/RegisterForm";



export const JobseekerRegisterFormUI = () => {
  const {logo} = navigation;
  
  return (
    <>
{/* hidden md:flex */}
    <section className=" bg-blue flex justify-center items-center">
      <div className="w-full py-[2rem]  max-w-[500px]">
      
      <RegisterForm />

      </div>
    </section>

    {/* <section className="md:hidden ">
  
                <div className=" flex bg-blue justify-center items-center   ">
                  <div className="w-full max-w-[500px] py-[2rem]">
                  <RegisterFormMobile />

                  </div>
                </div>
  

    </section> */}


    
    </>


  )
}