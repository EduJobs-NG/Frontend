import React, {useContext, useState} from 'react';
import { Navbar } from './Navbar';
import AuthContext from '../../context/AuthContext';
// import enoch from '../../assets/enoch.jpg';
import axios from 'axios';


export const UserProfile = () => {
  const {authTokens} = useContext(AuthContext)
  const [userMe, setUserMe] =  useState({});

  const getUserMeHandler = async () =>{
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}users/me/`, {
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${authTokens}`
      }
    }).catch(err =>{
      console.log(err)
    })
 
    if (response){
      console.log(response)
    }

  }


  return (
    <>
    <Navbar />
    <section className='bg-[#f5f5f5]'>
      <div className='container mx-auto rounded-[40px] bg-white'>
        <h1 className='font-[700] text-2xl'>Profile</h1>
  
  <button className='bg-blue p-2' onClick={getUserMeHandler}>GET</button>

        </div>



    </section>
    </>
  )
}
