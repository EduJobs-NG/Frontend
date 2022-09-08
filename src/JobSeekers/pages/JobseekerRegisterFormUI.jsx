import React from "react";
import {NavLink} from 'react-router-dom';
import {navigation} from '../../data';

import { RegisterForm } from "../../components/Forms/RegisterForm";



export const JobseekerRegisterFormUI = () => {
  const {logo} = navigation;
  
  return (
    <>

    <section className="flex bg-blue justify-center items-center">
      <div className="w-full my-[2rem]  max-w-[500px]">
      
      <RegisterForm />

      </div>
    </section>


    
    </>


  )
}