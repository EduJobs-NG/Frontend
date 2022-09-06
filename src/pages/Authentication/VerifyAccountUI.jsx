import React,{useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import messageIcon from '../../assets/Vector.png';
// import AuthContext from '../../context/AuthContext';


export const VerifyAccountUI = () => {
//   const {getUserEmail} = useContext(AuthContext);
// useEffect(() => {
//   getUserEmail();
// }, [])

  return (
    <section className='container mx-auto mt-[3rem] h-screen  flex flex-col justify-center items-center text-center '>
      <div className='rounded-full bg-[#d5d3fe] p-5'>
        <img src={messageIcon} alt="" />
      </div>

      <h1 className='text-black font-[700] text-2xl'>Verify Account</h1>
      <p className='mt-4'>A link has been sent to your email. <br />
        Kindly click on it to verify your account.</p>

      <p className='mt-[2rem]'>Wrong email address? <Link className='text-blue' to="/reset-email">Change email</Link> </p>

      <Link className='text-blue mt-[5rem]' to="/resend-link">Resend Link</Link>


      <div className="text-center mt-[5rem]">
        <h1 className="text-blue font-[700]">EduJobsNg</h1>
        <p>All Rights Reserved</p>
      </div>

    </section>
  )
}
