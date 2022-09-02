import React, { useState } from "react";
import {IndividualRegistration} from '../components/IndividualRegistration'
import {CorporateRegistration} from '../components/CorporateRegistration'
import {FaUserPlus, FaTimes} from 'react-icons/fa';


export const EmployersRegistration = ({setShowRegister, showModal}) => {
  const typeOfRegistration = ["personal", "corporate"];
  const [title, setTitle] = useState("personal");
  const [active, setActive] = useState(0)

  const handleTitle = (e, index) => {
    setTitle(() => e.target.textContent.toLowerCase());
    setActive(index);
  };
  const handleDisplay = () => {
    switch (title) {
      case "personal":
        return <IndividualRegistration />;
      case "corporate":
        return <CorporateRegistration />;
      default:
        <IndividualRegistration />;
    }
  };

  return (
<>
    {showModal && 
    <section className="relative max-w-[500px] px-[42px] bg-white rounded-[40px] flex flex-col h-screen justify-center items-center">
         <div className='flex my-4 md:gap-x-[1rem] justify-center '>
             <FaUserPlus className='text-[2rem] text-blue' />
             <div className='h-[2.5rem] ml-[1rem] mr-[1rem] w-[3px] bg-black'></div>
            <h2 className="title text-blue  text-[24px] font-[700]">SIGN UP</h2>
            </div>
            {showModal ? <FaTimes onClick={() => setShowRegister(false)} className='text-blue z-[99999] text-[1.3rem] absolute top-[1rem] right-[1.5rem] mt-3 cursor-pointer' /> : null } 

      <ul className="mt-[1rem] grid grid-cols-2 gap-4">
        {typeOfRegistration.map((title, index) => {
          return (
            <li
              className={`${
                active == index
                  ? "text-blue border-b border-b-blue"
                  : "text-black"
              } font-[700] cursor-pointer capitalize`}
              key={index}
              onClick={(e) => handleTitle(e, index)}
            >
              {title}
            </li>
          );
        })}
      </ul>
      <div className="mt-[1rem]">
      {handleDisplay()}

      </div>
    </section>
  }


  {!showModal && 
   <section className="px-[20px] bg-white rounded-[40px] flex flex-col  justify-center items-center">
   <div className='flex my-4 md:gap-x-[1rem] justify-center '>
       <FaUserPlus className='text-[2rem] text-blue' />
       <div className='h-[2.5rem] ml-[1rem] mr-[1rem] w-[3px] bg-black'></div>
      <h2 className="title text-blue  text-[24px] font-[700]">SIGN UP</h2>
      </div>
      {showModal ? <FaTimes onClick={() => setShowRegister(false)} className='text-blue z-[99999] text-[1.3rem] absolute top-[1rem] right-[1.5rem] mt-3 cursor-pointer' /> : null } 

<ul className="mt-[1rem] grid grid-cols-2 gap-4">
  {typeOfRegistration.map((title, index) => {
    return (
      <li
        className={`${
          active == index
            ? "text-blue border-b border-b-blue"
            : "text-black"
        } font-[700] cursor-pointer capitalize`}
        key={index}
        onClick={(e) => handleTitle(e, index)}
      >
        {title}
      </li>
    );
  })}
</ul>
<div className="mt-[1rem]">
{handleDisplay()}

</div>
</section>
  }
</>

  );
};
