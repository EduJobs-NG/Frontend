import React, {useContext, useState} from 'react';
import { Navbar } from './Navbar';
import AuthContext from '../../context/AuthContext';
import enoch from '../../assets/enoch.jpg';
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
  {/* <button className='bg-blue p-2' onClick={getUserMeHandler}>GET</button> */}

    <section className='bg-[#f5f5f5]'>
      <div className='container mx-auto rounded-[40px] bg-white'>
        <h1 className='font-[700] pt-[2rem] text-2xl'>Profile</h1>
        <div className='container mx-auto '>

        <div className='flex mt-[2rem] flex-col md:flex-row justify-between'>
          <div className='flex flex-col md:flex-row gap-x-[1rem]  items-center'>
            <div className='w-[130px] h-[130px]'>
            <img className='rounded-full ' src={enoch} alt="" />
            </div>
            <div className=''>
              <h1 className='font-[700] text-[20px]'>Oduyale Enoch</h1>
              <small>Location</small>
            </div>


          </div>

          <div className='max-w-[700px]'>
            <h1 className='font-[700] text-[18px]'>Bio</h1>
            <p>
             Lorem ipsum dolor sit amet, c
             onsectetur adipisicing elit. 
             Beatae cum libero eveniet quia placeat
              expedita recusandae quas quam officiis ab perferendis dolorum commodi nostrum nesciunt ipsum corrupti aliquid quae, quos ut? Vitae veritatis praesentium quibusdam voluptate soluta veniam laboriosam nisi quam repudiandae ipsa nulla id architecto dicta, perspiciatis laborum eaque iure expedita maxime sint, dolorum amet nam placeat modi cum. Commodi id saepe, officia minima debitis perferendis, consectetur libero sequi, blanditiis repudiandae magnam et nostrum corporis! Ipsam repellendus voluptas, perspiciatis molestiae quas laborum inventore itaque. Commodi alias adipisci quia officiis nulla eum maxime amet, quis harum, totam repellat odio inventore.
            </p>
          </div>

        </div>
  

        </div>

        </div>


    </section>
    </>
  )
}
