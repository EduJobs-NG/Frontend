import React, { useState, useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { FaBars, FaTimes } from 'react-icons/fa';
import AuthContext from '../../../context/AuthContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DeleteEducation = ({setShowDelete, id}) => {
    const [isLoading, setIsLoading] = useState(false);
    const { authTokens } = useContext(AuthContext);

    const handleDelete = async () => {
        setIsLoading(true)
    const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}account/user-profile/me/professional_info/${id}/`,
   { headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${authTokens.auth_token}`
      }
    })
    .catch(err => {
        console.log(err)
        toast.error(err.message)
        setIsLoading(false)
      });

    if (response) {
      setIsLoading(false)
      window.location.reload(true)
      console.log(response)


    }
    }

  return (
    <>
      <ToastContainer />
          <div 
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-3 max-w-3xl">
               

              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5  rounded-t">
            {/* <FaTimes  onClick={()=> setShow(false)} className='text-blue z-[900] text-[1.3rem] absolute right-5 mt-3 cursor-pointer' /> */}
                  
              
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                
                 <div className='w-full max-w-xl grid  mt-[1rem]'>
                     {/* <label className='text-xl mb-3 font-[700]'>Edit Bio</label> */}
                     <h3 className="text-3xl font-semibold">
                    Are you sure you want to delete?
                    <p>{id}</p>
                  </h3>
                     
         <div className="flex items-center justify-end p-6  rounded-b">        
         
         <div className='mt-[1.6rem] flex flex-row justify-between gap-6'>
            <div>
                <button onClick={()=> setShowDelete(false)} className= 'bg-blue  opacity-100 block w-full px-6 text-white rounded-md p-2' type="submit">Cancel</button>
    
            </div>
                         {!isLoading && <button onClick={handleDelete} className= 'bg-red-600  opacity-100 block w-full px-6 text-white rounded-md p-2' type="submit">Delete</button>}
                         {isLoading && (
                             <div className='flex justify-center'>
                                 <ThreeDots type="ThreeDots"
                                     width={100} height={20} color="blue"
                                 />
                             </div>
                         )}
                     </div>
         {/* <button
           className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
           type="button"
          
         >
           Save Changes
         </button> */}
       </div>
                   
                 </div>
            
         </div>      {/*footer*/}
      
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40  bg-black"></div>
        </>
  )
}
