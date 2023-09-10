import React from 'react'
import { Link } from 'react-router-dom'
import messageIcon from '../../assets/messageIcon.png';

export const VerifyAccountUI = () => (
  <section className='bg-blue'>
    <div className='container  mx-auto  h-screen  flex flex-col justify-center items-center text-center'>
      <div className='w-full max-w-[500px] py-[2rem] px-[1rem] rounded-[30px] bg-white'>
        <div className='flex justify-center' >
          <img src={messageIcon} className=' ' alt="" />
        </div>
        <h1 className='text-black font-[700] text-2xl'>Verify Account</h1>
        <p className='mt-4'>A link has been sent to your email. <br />
          Kindly click on it to verify your account.</p>

        <p className='mt-[2rem]'>Wrong email address? <Link className='text-blue' to="/reset-email">Change email</Link> </p>

        <p className='mt-[2rem]'>
          <Link className='text-blue ' to="/resend-link">Resend Link</Link>
        </p>
      </div>
    </div>
  </section>
);
