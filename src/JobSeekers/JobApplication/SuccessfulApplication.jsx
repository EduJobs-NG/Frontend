import React from 'react';
import { Link } from 'react-router-dom';
import successImage from '../../assets/application-successful.png'
export const SuccessfulApplication = () => {
  return (
    <section className='container mx-auto mt-[3rem] h-screen  flex flex-col justify-center items-center text-center '>
      <img src={successImage} alt="" />

    <h1 className='text-black font-[700] text-2xl'>Verify Account</h1>
    <p className='mt-4'>A link has been sent to your email. <br />
      Kindly click on it to verify your account.</p>

    <p className='mt-[2rem]'>Wrong email address? <Link className='text-blue' to="/reset-email">Change email</Link> </p>

    <Link className='text-blue mt-[5rem]' to="/resend-link">Resend Link</Link>


   
  </section>
  )
}
