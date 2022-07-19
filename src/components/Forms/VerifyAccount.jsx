import React from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios'


export const VerifyAccount = () => {
  const {uid, token} = useParams();
  const values = {uid, token}
 

  const handleSubmit = async (props) =>{
    const response = await axios
    .post("https://edujobsng.herokuapp.com/api/v1/auth/users/activation/", values)
    .catch(err =>{
        if(err && err.response){
         console.log(err)
        }
    });

    if(response && response.data){
            console.log(response)
        }
    

}
  return (
    <section className='overflow-x-hidden'>

    <div className='flex flex-col items-center gap-y-[2rem] text-center justify-center my-4 w-full mx-3 '>
      <div className='max-w-[500px]'>
      <h1 className='text-2xl'>
      Just one more step. Click on the link below to activate your account
      </h1>
<button onClick={ handleSubmit} className='cursor-pointer text-white bg-blue p-3 rounded'>
  Verify activation link
</button>
      </div>
  
     
    </div>
    </section>

  )
}
