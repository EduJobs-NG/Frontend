import React, { useState } from 'react';
import { JoinNow } from './JoinNow';

export const JoinNowModal = ({setShowModal, showModal}) => {
  return (
    <>
        
    <div 
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[9999999] outline-none focus:outline-none">
      <div className="relative  w-full   md:mx-0 max-w-[500px]">

        {/*content*/}
        <div className="">
          {/*header*/}
          <div className="">
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className=" relative  flex-auto">
                <JoinNow showModal={showModal} setShowModal={setShowModal}  />
   </div>      

        </div>
      </div>
    </div>
    <div className="opacity-25 fixed  inset-0 z-40     bg-blue"></div>
  </>
  )
}
