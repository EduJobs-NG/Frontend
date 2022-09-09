import React from 'react';
import { LoginForm } from '../../components/Forms/LoginForm';
import { LoginFormMobile } from '../../components/Forms/LoginFormMobile';



export const JobseekerLoginFormUI = () => {

  return (
    <>
    <section className='hidden lg:flex bg-blue h-screen justify-center items-center'>
      <div className='w-full max-w-[500px]'>
      <LoginForm />

      </div>
    </section>

    <section className='lg:hidden'>
      <LoginFormMobile />
    </section>


    

</>

  )
}


