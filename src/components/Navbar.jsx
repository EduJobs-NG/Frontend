import Aos from 'aos';
import "aos/dist/aos.css";
import { navigation } from '../data';
import { PopupLogin } from './Forms/PopupLogin';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { PopupRegistration } from './Forms/PopupRegistration';

export const Navbar = () => {
  // states hooks
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // effects hooks
  useEffect(() => { Aos.init(); Aos.refresh(); }, []);

  // methods and objects
  const { logo } = navigation;
  const handleClick = () => { setMenu(!menu); setActive(!active); };

  return (
    <section className='bg-[#02378B] z-30 sticky top-0'>
      {showRegister && <PopupRegistration setShowRegister={setShowRegister} />}
      {showLogin && <PopupLogin setShowLogin={setShowLogin} />}

      <div className="container mx-auto">
        <div className="flex  py-[1.5rem] items-center flex-row justify-between">
          <ul className="flex uppercas gap-6 text-white flex-row">
            <li className="title">
              <Link to="/">
                <img src={logo} className="h-full" alt="" />
              </Link>
            </li>
            <div className="hidden xl:flex flex-row text-white gap-10 text-sm items-center">
              <li>
                <Link to="/about" className="uppercase font-bold hover:underline cursor-pointer">
                  about us
                </Link>
              </li>
              <li>
                <Link to="/dashboard/find-jobs" className="uppercase font-bold hover:underline cursor-pointer">
                  jobs
                </Link>
              </li>
            </div>
          </ul>

          <ul className='hidden xl:flex flex-row text-white gap-8 items-center'>
            <li>
              <Link to="/employer" className='hover:underline cursor-pointer uppercase font-bold'>
                I'm an employer
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setShowLogin(true)} className='py-[0.3em] px-[2.4em] cursor-pointer  border border-solid bg-white text-blue hover:text-white hover:bg-blue text-[1.1rem] font-[800] border-white rounded-[4px] uppercase'>
                login
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setShowRegister(true)} className='py-[0.3em] px-[2.4em] cursor-pointer  border border-solid bg-white text-blue hover:text-white hover:bg-blue text-[1.1rem] font-[800] border-white rounded-[4px] uppercase'>
                signup
              </Link>
            </li>
          </ul>
          <div className='xl:hidden'>
            <span onClick={handleClick}>
              <FaBars className='text-white text-[1.3rem] cursor-pointer' /></span>
          </div>
        </div>



      </div>

      {/* Mobile Menu */}
      {active && (
        <div className='absolute top-0 w-full z-[9999] xl:hidden'>
          <div data-aos="fade-up" className='bg-white  transition duration-1000 ease-in-out h-screen flex flex-col align-items justify-center  text-center '>
            <FaTimes onClick={handleClick} className='text-blue text-[1.3rem] mt-3 cursor-pointer absolute right-5 top-5' />
            <ul className='py-[2rem] flex flex-col '>
              <NavLink data-aos-delay="300" data-aos="fade-left" className="text-[1.2rem] font-[700] mb-[33px]" to="/">HOME</NavLink>
              <NavLink data-aos-delay="300" data-aos="fade-left" className="text-[1.2rem] font-[700] mb-[33px]" to="/dashboard/find-jobs">JOBS</NavLink>
              <NavLink data-aos-delay="300" data-aos="fade-left" className="text-[1.2rem] font-[700] mb-[33px]" to="/about">ABOUT US</NavLink>
            </ul>
            <div className='container mx-auto'>
              <hr className=' text-[#808080]' />
            </div>

            <ul className='py-[2rem] flex flex-col'>
              <NavLink data-aos-delay="300" data-aos="fade-left" className="text-blue text-[1.2rem] hover:underline transition-all uppercase mb-[45px] font-[700]" to="/">I'm a jobseeker</NavLink>
              <NavLink data-aos-delay="300" data-aos="fade-left" className="text-blue text-[1.2rem] hover:underline transition-all uppercase mb-[45px] font-[700]" to="/employer">I'm an employer</NavLink>

            </ul>
            <div className=''>
              <NavLink to="/jobseeker/login" className="bg-blue rounded-sm px-[3rem] py-[0.5rem]  text-white ">Login</NavLink>

            </div>
          </div>

          <div>
          </div>
        </div>
      )
      }
    </section>
  )
}
