import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import chat from '../../assets/chat.png'
import notification from '../../assets/notification.png'
import Aos from 'aos'
import {navigation} from '../../data';
import { FaCaretDown } from 'react-icons/fa';

export const JobseekerNavbar = () => {
  const {user} = useContext(AuthContext)
  const {logo} = navigation;
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false)
  const handleClick = () => {
    setMenu(!menu);
    setActive(!active);

  }


  
  const activeLink = 'border-b border-b-white';
  const normalLink = 'border-none';
  const normalMobile = 'text-[1.3rem]';
  const activeMobile = 'text-blue text-[1.3rem] font-[700]'

  return (
    <nav className='bg-[#02378B] z-[999]'>
      <div className="container mx-auto">
        <div className="flex  py-[1rem] items-center flex-row justify-between">
          <ul className="flex gap-x-[3rem] text-white flex-row">
            <li className=''>
            <NavLink to="/dashboard/find-jobs">
                <img src={logo} className='w-[150px]' alt="" />
                </NavLink>
            </li>
            <div className='hidden uppercase xl:flex gap-x-[3rem]'>

              <li className=''>
                <NavLink to="/dashboard/find-jobs" className={({isActive}) => (isActive ? activeLink : normalLink)} >FIND JOBS</NavLink>
              </li>
              <li className=''>
                <NavLink to="/dashboard/saved-jobs" className={({isActive}) => (isActive ? activeLink : normalLink)} >SAVED JOBS</NavLink>
              </li>
              <li className=''>
                <NavLink to="/pricing" className={({isActive}) => (isActive ? activeLink : normalLink)} >PRICING</NavLink>
              </li>
            </div>

          </ul>

          <ul className='hidden xl:flex flex-row items-center text-white gap-x-[2rem]'>

            <li>
              <img src={chat} alt="" />
            </li>
            <li>
              <img src={notification} alt="" />
            </li>
            <li className='h-[2rem] w-[1px] bg-white'>
            </li>

            <li>
              <div onClick={() => setDropDown(!dropDown)} className='flex relative cursor-pointer flex-row items-center '>
                <div className='w-[40px] h-[40px]'>
                <img className='rounded-full' src={user?.avatar} alt="" />
                </div>
                  <FaCaretDown />
                  {dropDown && 
                    <div className='absolute z-[9999] rounded-b-[15px] bg-[#f1f1f1] right-[0.2rem] top-[3.5rem]'>
                    <ul className='text-black w-[150px] '>
                      <li className='pb-[0.2rem] py-[0.5rem] px-[1rem] hover:bg-[#ffffff] transition-all'>
                     <a href="/dashboard/profile">View Profile</a>   
                        </li>
                      <li className='pb-[0.2rem] py-[0.5rem] px-[1rem] hover:bg-[#ffffff] transition-all'>Settings</li>
                      <li className='pb-[0.2rem] py-[0.5rem] px-[1rem] hover:bg-[#ffffff] transition-all'>Log out</li>
                    </ul>
                  </div>
                  }
                </div>
            </li>



          </ul>
          <div className='xl:hidden flex flex-row items-center h-[35px] gap-[1rem]'>
            <div onClick={() => setDropDown(!dropDown)} className='flex relative cursor-pointer flex-row items-center '>
                <div className='w-[40px] h-[40px]'>
                <img className='rounded-full' src={user?.avatar} alt="" />
                </div>
                  <FaCaretDown className='text-white' />
                  {dropDown && 
                    <div className='absolute z-[9999] rounded-b-[15px] bg-[#f1f1f1] right-[0.2rem] top-[3.5rem]'>
                    <ul className='text-black w-[150px] '>
                      <li className='pb-[0.2rem] py-[0.5rem] px-[1rem] hover:bg-[#ffffff] transition-all'>
                     <a href="/dashboard/profile">View Profile</a>   
                        </li>
                      <li className='pb-[0.2rem] py-[0.5rem] px-[1rem] hover:bg-[#ffffff] transition-all'>Settings</li>
                      <li className='pb-[0.2rem] py-[0.5rem] px-[1rem] hover:bg-[#ffffff] transition-all'>Log out</li>
                    </ul>
                  </div>
                  }
                </div>


            <div onClick={handleClick} className="">
              <FaBars className='text-white text-[1.5rem] cursor-pointer' /></div>
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
                <NavLink to="/dashboard/find-jobs" className={({isActive}) => (isActive ? activeMobile : normalMobile)}  >FIND JOBS</NavLink>
              </li>
              <li className='mb-[33px]'>
                <NavLink to="/dashboard/saved-jobs" className={({isActive}) => (isActive ? activeMobile : normalMobile)} >SAVED JOBS</NavLink>
              </li>
              <li className='mb-[33px]'>
                <NavLink   to="/pricing" className={({isActive}) => (isActive ? activeMobile : normalMobile)}>PRICING</NavLink>
              </li>
              <li className='mb-[33px]'>
                <NavLink  to="/messages" className={({isActive}) => (isActive ? activeMobile : normalMobile)}>MESSAGES</NavLink>
              </li>
              <li className='mb-[33px]'>
                <NavLink  to="/notification" className={({isActive}) => (isActive ? activeMobile : normalMobile)}>NOTIFICATION</NavLink>
              </li>
            </ul>



          </div>

          <div>
          </div>
        </div>
      )
      }
    </nav>
  )
}


