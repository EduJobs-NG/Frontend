import React, {useContext} from 'react';
import AuthContext from '../../context/AuthContext';
import { JobseekerNavbar } from '../components/JobseekerNavbar';
import {Footer} from '../../components/Footer'


export const JobseekerDashboard = () => {
  const {user, authTokens, logOutUser} = useContext(AuthContext)
  return (
    <>
    <JobseekerNavbar />
  <section className="relative bg-jobs lg:pt-[20px] lg:pb-[70px] h-[500px] bg-center bg-cover bg-no-repeat">
  <div className="container mx-auto h-full flex items-center justify-between">
  <h2 className='title text-[35px] font-heading lg:text-[66px] font-[700] text-white max-w-[400px] md:max-w-[600px] z-[999] '>Find Jobs that Best Suit You</h2>
  </div>

  <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#02378B] opacity-60"></div>

  </section>

  <section>
    <h1 className='text-center'>You'll see jobs here later one</h1>
    

    
    <p onClick={logOutUser}>log out</p>
  </section>

  <Footer />
  </>

  )
}