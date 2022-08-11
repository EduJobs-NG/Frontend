import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import chat from '../../assets/chat.png'
import notification from '../../assets/notification.png'
import Aos from 'aos'
export const Navbar = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
    setActive(!active);

  }
  return (
    <section className='bg-[#02378B] z-[999]'>
      <div className="container mx-auto">
        <div className="flex uppercase py-[1.5rem] items-center flex-row justify-between">
          <ul className="flex gap-x-[3rem] text-white flex-row">
            <li className='title'>
              <NavLink to="/" >EduJobsNg</NavLink>
            </li>
            <div className='hidden xl:flex gap-x-[3rem]'>

              <li className=''>
                <NavLink to="/dashboard/find-jobs" className={({ isActive }) => isActive ? 'border-b border-b-white' : undefined}>FIND JOBS</NavLink>
              </li>
              <li className=''>
                <NavLink to="#" className={({ isActive }) => isActive ? 'border-b border-b-white' : undefined}>SAVED JOBS</NavLink>
              </li>
              <li className=''>
                <NavLink to="#" className={({ isActive }) => (isActive ? 'border-b border-b-white' : undefined)}>PRICING</NavLink>
              </li>
            </div>

          </ul>

          <ul className='hidden xl:flex flex-row text-white gap-x-[2rem]'>

            <li>
              <img src={chat} alt="" />
            </li>
            <li>
              <img src={notification} alt="" />
            </li>
            <li className='h-[2rem] w-[1px] bg-white'>
            </li>

            <li>
              <NavLink to="/dashboard/profile">
                <FaUserCircle className='' />
              </NavLink>
            </li>



          </ul>
          <div className='xl:hidden flex flex-row gap-[1rem]'>
            <div>
          <NavLink to="/dashboard/profile">
                <FaUserCircle className='text-white w-8' />
              </NavLink>
            </div>

            <div onClick={handleClick}>
              <FaBars className='text-white text-[1rem] cursor-pointer' /></div>
            <div>
              
            </div>
          </div>


        </div>



      </div>

      {/* Mobile Menu */}
      {active && (
        <div className='absolute top-0 w-full z-[9999] xl:hidden'>
          <div data-aos="fade-up" className='bg-white  transition duration-1000 ease-in-out h-screen flex flex-col align-items justify-center  text-center '>
            <FaTimes onClick={handleClick} className='text-blue text-[1.3rem] mt-3 cursor-pointer absolute right-5 top-5' />
            <ul className='py-[2rem] flex flex-col '>
            <li className='mb-[33px]'>
                <NavLink to="/dashboard/find-jobs" className={`${({ isActive }) => (isActive ? ' border-b border-b-blue' : undefined)} text-[1.2rem]  font-[700]` } >FIND JOBS</NavLink>
              </li>
              <li className='mb-[33px]'>
                <NavLink to="#" className={`${({ isActive }) => (isActive ? ' border-b border-b-blue' : undefined)} text-[1.2rem]  font-[700]` } >SAVED JOBS</NavLink>
              </li>
              <li className='mb-[33px]'>
                <NavLink className={`${({ isActive }) => (isActive ? ' border-b border-b-blue' : undefined)} text-[1.2rem]  font-[700]` } to="">PRICING</NavLink>
              </li>
              <li className='mb-[33px]'>
                <NavLink className={`${({ isActive }) => (isActive ? ' border-b border-b-blue' : undefined)} text-[1.2rem]  font-[700]` } to="">MESSAGES</NavLink>
              </li>
              <li className='mb-[33px]'>
                <NavLink className={`${({ isActive }) => (isActive ? ' border-b border-b-blue' : undefined)} text-[1.2rem]  font-[700]` } to="">NOTIFICATION</NavLink>
              </li>
            </ul>
          

           
          </div>

          <div>
          </div>
        </div>
      )
      }
    </section>
  )
}


