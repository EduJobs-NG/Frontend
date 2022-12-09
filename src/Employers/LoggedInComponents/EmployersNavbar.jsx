/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import chat from '../../assets/chat.png'
import notification from '../../assets/notification.png'
import Aos from 'aos'
import { navigation } from '../../data';
import { FaCaretDown } from 'react-icons/fa';

export const EmployersNavbar = () => {
  const { employerUser, user, logOutEmployerUser, getEmployerUser } = useContext(AuthContext)
  const { logo } = navigation;
  useEffect(() => {
    Aos.init();
    Aos.refresh();
    getEmployerUser();
  }, []);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false)
  const handleClick = () => {
    setMenu(!menu);
    setActive(!active);

  }



  const normalMobile = 'text-[1.3rem]';
  const activeMobile = 'text-blue text-[1.3rem] font-[700]'

  return (
    <nav className='bg-[#02378B] z-30 sticky top-0'>
      <div className="container mx-auto">
        <div className="flex  py-[1rem] items-center flex-row justify-between">
          <ul className="flex gap-x-[3rem] text-white flex-row">
            <li className=''>
              <NavLink to="/employer/dashboard/view-jobs">
                <img src={logo} className='w-[150px]' alt="" />
              </NavLink>
            </li>
            <div className='hidden uppercase xl:flex gap-x-[3rem]'>
            </div>

          </ul>


          <ul className='hidden xl:flex flex-row items-center text-white gap-x-[2rem]'>
            <li className='text-whie'>Hello, {employerUser?.first_name || employerUser?.org_name}</li>
            <a href='/employer/dashboard/post-job'>
              <li className='p-1 cursor-pointer px-4 font-[700] border border-solid bg-white text-blue hover:bg-blue hover:text-white border-white rounded'>
                POST JOB
              </li>
            </a>
            {/* <li>
              <img src={chat} alt="" />
            </li>
            <li>
              <img src={notification} alt="" />
            </li>
            <li className='h-[2rem] w-[1px] bg-white'>
            </li> */}


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
                        <Link to='#'>View Profile</Link>
                      </li>
                      <li className='pb-[0.2rem] py-[0.5rem] px-[1rem] hover:bg-[#ffffff] transition-all'>
                        <Link to='/employer/settings'>Settings</Link>
                      </li>
                      <li onClick={logOutEmployerUser} className='pb-[0.2rem] py-[0.5rem] px-[1rem] hover:bg-[#ffffff] transition-all'>Log out</li>
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
                      <a href="#">View Profile</a>
                    </li>
                    <li className='pb-[0.2rem] py-[0.5rem] px-[1rem] hover:bg-[#ffffff] transition-all'>
                      <Link to='/employer/settings'>Settings</Link>
                    </li>
                    <li onClick={logOutEmployerUser} className='pb-[0.2rem] py-[0.5rem] px-[1rem] hover:bg-[#ffffff] transition-all'>Log out</li>
                  </ul>
                </div>
              }
            </div>


            <div onClick={handleClick} className="ml-[0.4rem]">
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
                <NavLink to="/" className={({ isActive }) => (isActive ? activeMobile : normalMobile)}  >Employer Home</NavLink>
              </li>
              {/* <li className='mb-[33px]'>
                <NavLink to="/dashboard/saved-jobs" className={({ isActive }) => (isActive ? activeMobile : normalMobile)} >SAVED JOBS</NavLink>
              </li>
              <li className='mb-[33px]'>
                <NavLink to="/pricing" className={({ isActive }) => (isActive ? activeMobile : normalMobile)}>PRICING</NavLink>
              </li>
              <li className='mb-[33px]'>
                <NavLink to="/messages" className={({ isActive }) => (isActive ? activeMobile : normalMobile)}>MESSAGES</NavLink>
              </li>
              <li className='mb-[33px]'>
                <NavLink to="/notification" className={({ isActive }) => (isActive ? activeMobile : normalMobile)}>NOTIFICATION</NavLink>
              </li> */}
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


