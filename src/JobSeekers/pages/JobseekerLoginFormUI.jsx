import React from 'react';
import { LoginForm } from '../../components/Forms/LoginForm';



export const JobseekerLoginFormUI = () => (
  <>
    <section className='flex bg-blue h-screen justify-center items-center'>
      <div className='w-full max-w-[500px]'>
        <LoginForm />
      </div>
    </section>
  </>
);
