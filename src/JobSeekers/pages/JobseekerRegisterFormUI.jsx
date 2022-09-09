import React from "react";
import {NavLink} from 'react-router-dom';
import {navigation} from '../../data';
import { RegisterFormMobile } from "../../components/Forms/RegisterFormMobile";
import { RegisterForm } from "../../components/Forms/RegisterForm";



export const JobseekerRegisterFormUI = () => {
  const {logo} = navigation;
  
  return (
    <>

    <section className="hidden lg:flex bg-blue justify-center items-center">
      <div className="w-full my-[2rem]  max-w-[500px]">
      
      <RegisterForm />

      </div>
    </section>

    <section className="lg:hidden my-[1.2rem]">
    {/* <NavLink to="/">
                <img src={logo} className='w-[150px]' alt="" />
                </NavLink> */}
      <RegisterFormMobile />

    </section>


    
    </>


  )
}