import React, { useContext } from 'react'
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { Navbar } from './Navbar';
import { FormInputBox } from '../../components/Forms/FormInputBox';
import img from '../../assets/usercircleplus.png'


export const InitialProfileCreate = () => {


  return (
    <>
      <section className='container mt-[2rem] mx-auto'>

   <h1 className='text-2xl font-[800] text-blue'>
          Set up your profile
        </h1>

        <div className=''>
        <div className='ml-[1rem] mt-[1.5rem]'>
          <div>
            <h2 className='text-xl font-[800]'>Profile Picture</h2>
            <div className='flex justify-center'>
              <div>
              {/* <FormInputBox  type='file' /> */}
          <img className='' src={img} alt="" />
              </div>
              </div>
          </div>
          
          <div className='mt-[2rem]'>
            <h2 className='text-xl font-[800]'>Bio</h2>
              <div className=''>
                <textarea  className='w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 ' placeholder='Give a short description of yourself to help employers know more about you.' name="" id="" cols="100" rows="7">

                </textarea>
          
              </div>
          </div>
          <div className='flex mt-[2rem] justify-center'>
          <button className='bg-blue opacity-100 w-[200px]  text-white rounded-sm p-2' type="submit">CONTINUE</button>

          </div>
       
          
        </div>
</div>

      </section>
    </>

  )
}
