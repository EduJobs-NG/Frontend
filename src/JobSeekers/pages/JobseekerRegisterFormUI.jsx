import React from "react";
import {NavLink} from 'react-router-dom';
import {navigation} from '../../data';

import { RegisterFormMobile } from "../../components/Forms/RegisterFormMobile";



export const JobseekerRegisterFormUI = () => {
  const {logo} = navigation;
  
  return (
    <>

    <section className="flex justify-center items-center">
      <div className="w-full my-[2rem]  max-w-[500px]">
      
      <RegisterFormMobile />

      </div>
    </section>


    
    </>


  )
}