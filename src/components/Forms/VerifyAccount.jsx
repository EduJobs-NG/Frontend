import React, {useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios'


export const VerifyAccount = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState('');
  const {uid, token} = useParams();
  const values = {uid, token}
 

  const handleSubmit = async (props) =>{
    const response = await axios
    .post("https://edujobsng.herokuapp.com/api/v1/auth/users/activation/", values)
    .catch(err =>{
        if(err && err.response){
          if (err.response.status === 400){
            setError("User does not exist. Kindly register.")
          }
          else if(err.response.status === 403){
            setError('Your account has been activated.')

          }
        
         console.log(err)
        }
    });

    if(response){
            console.log(response)
            if (response.status_code === 204){
              setSuccess('Account activation successful. Proceeding to Login')
            //    setTimeout(() =>{
            //   setSuccess('Account activation successful. Proceeding to Login')

            // }, 2000)
            }
           
        }
    

}
  return (
    <section className='overflow-x-hidden px-6'>


    <div className='flex flex-col items-center border-solid  border-[#808080] mt-[100px] gap-y-[2rem] text-center justify-center my-4 w-full mx-3 '>
      <div className='max-w-[500px]'>
      {error && (

<div className="p-3 my-4 text-center">
  <p className="bg-red-600 text-white p-2 rounded-md">{error}</p>
</div>
)}

{success && (

<div className="p-3 my-3 text-center">
  <p className="bg-green-600 text-white p-2 rounded-md">{success}</p>
</div>
)}

      <h1 className='text-2xl'>
      Just one more step. Click on the link below to activate your account
      </h1>
<button onClick={ handleSubmit} className='cursor-pointer mt-4 text-white bg-blue p-3 rounded'>
  Verify activation link
</button>
      </div>
  
     
    </div>
    </section>

  )
}
