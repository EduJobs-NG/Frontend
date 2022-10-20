import React from "react";
import { FaSignInAlt, FaUser, FaBriefcase, FaTimes } from "react-icons/fa";

export const JoinNow = ({ setShowModal }) => {
  return (
    <section className="border relative bg-white p-2 py-[5rem] px-[20px] mx-[1.5rem] md:px-[42px] rounded-[30px] md:rounded-[30px] max-w-[500px]">
      <div className="flex  my-4 pb-[3rem] gap-x-[1rem] justify-center ">
        <FaSignInAlt className="text-[2rem] text-blue" />
        <div className="h-[2.5rem] w-[3px] mr-[0.5rem] ml-[0.5rem] bg-black"></div>
        <h2 className="title text-blue  text-[24px] font-[700]">SIGN UP</h2>

        <FaTimes
          onClick={() => setShowModal(false)}
          className="text-blue z-[99999] text-[1.3rem] absolute top-[1rem] right-[1.5rem] mt-3 cursor-pointer"
        />
      </div>

      <div>
        <a href="/jobseeker/register">
          <div className="border border-[#cccccc] cursor-pointer hover:bg-[#f4f4f4]  rounded-[10px] py-[2rem] px-[1rem]">
            

             <p><FaUser className="text-[#808080] inline mr-[2rem]" /> I'm a job seeker</p> 
          </div>
        </a>
      </div>

      <div className="mt-[1rem]">
        <a href="/employer/register">
          <div className="border border-[#cccccc] cursor-pointer hover:bg-[#f4f4f4]  rounded-[10px] py-[2rem] px-[1rem]">
            

             <p><FaBriefcase className="text-[#808080] inline mr-[2rem]" /> I'm an employer</p> 
          </div>
        </a>
      </div>
    </section>
  );
};
