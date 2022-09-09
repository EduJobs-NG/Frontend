import React,{useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import messageIcon from '../../assets/messageIcon.png';
// import AuthContext from '../../context/AuthContext';


export const VerifyAccountUI = () => {
//   const {getUserEmail} = useContext(AuthContext);
// useEffect(() => {
//   getUserEmail();
// }, [])

  return (
    <section className='bg-blue'>
      <div className='container  mx-auto  h-screen  flex flex-col justify-center items-center text-center'>
        <div className='w-full max-w-[500px] py-[2rem] rounded-[30px] bg-white'>


      <div className='flex justify-center' >
        <img src={messageIcon} className=' ' alt="" />
      </div>

      <h1 className='text-black font-[700] text-2xl'>Verify Account</h1>
      <p className='mt-4'>A link has been sent to your email. <br />
        Kindly click on it to verify your account.</p>

      <p className='mt-[2rem]'>Wrong email address? <Link className='text-blue' to="/reset-email">Change email</Link> </p>

      <Link className='text-blue mt-[5rem]' to="/resend-link">Resend Link</Link>


      </div>
     
      </div>

    </section>
  )
}
