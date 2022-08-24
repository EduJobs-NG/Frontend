import React, { useState } from 'react';
import { RegisterForm } from './RegisterForm';


export const PopupRegistration = ({setShowRegister}) => {
    const [showModal, setShowModal] = useState(true);
  return (
    <>
        
    <div 
      className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[99999] outline-none focus:outline-none">
      <div className="relative  w-auto my-6 mx-3 max-w-3xl">

        {/*content*/}
        <div className="">
          {/*header*/}
          <div className="">
      {/* <FaTimes  onClick={()=> setShow(false)} className='text-blue z-[900] text-[1.3rem] absolute right-5 mt-3 cursor-pointer' /> */}
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="p-6 relative  flex-auto">
                <RegisterForm showModal={showModal} setShowRegister={setShowRegister}  />
   </div>      

        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40  bg-blue"></div>
  </>
  )
}
