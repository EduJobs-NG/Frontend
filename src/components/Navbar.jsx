import React, {useState, useEffect} from 'react';
import {navigation} from '../data';
import {NavLink} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
import Aos from 'aos';
import "aos/dist/aos.css";
import { PopupRegistration } from './Forms/PopupRegistration';
import { PopupLogin } from './Forms/PopupLogin';

export const Navbar = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const {logo} = navigation;
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
 
  const handleClick = () =>{
    setMenu(!menu);
    setActive(!active);
  }
  return (
    <section className='bg-[#02378B] z-[999]'>
  {showRegister && <PopupRegistration setShowRegister={setShowRegister}  />}
  {showLogin && <PopupLogin setShowLogin={setShowLogin}  />}

        <div className="container mx-auto">
          <div className="flex uppercase py-[1.5rem] items-center flex-row justify-between">
            <ul className="flex gap-x-[3rem] text-white flex-row">
             <li className=''>
              <NavLink to="/">
                <img src={logo} className='w-[150px]' alt="" />
                </NavLink>
              </li> 
              
              {navigation.leftNav.map((nav, index) =>{
                return (
                  <li className='hidden  xl:flex' key={index}>
                     <NavLink className="" to="#"> {nav.name}</NavLink>
                  </li>
                )
              })}
            </ul>

            <ul className='hidden xl:flex flex-row text-white gap-x-[2rem]'>
              
              <li>
              <NavLink to="#" onClick={() => setShowRegister(true)} className='p-1 cursor-pointer px-2'>I'm a job seeker</NavLink>
              </li>
              <li>
              <NavLink to="/employer" className='p-1 cursor-pointer px-2'>I'm an employer</NavLink>
              </li>
              <li>
              <NavLink to="#" onClick={() => setShowLogin(true)}  className='p-1 cursor-pointer px-4 border border-solid bg-white text-blue border-white rounded'>LOGIN</NavLink>
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
                <NavLink data-aos-delay="300" data-aos="fade-left"  className="text-[1rem] font-[700] mb-[33px]"  to="#">JOBS</NavLink>
                <NavLink data-aos-delay="300" data-aos="fade-left" className="text-[1rem] font-[700] mb-[33px]" to="#">ABOUT US</NavLink>
                <NavLink data-aos-delay="300" data-aos="fade-left" className="text-[1rem] font-[700] mb-[33px]" to="#">TRENDING</NavLink>
                <NavLink data-aos-delay="300" data-aos="fade-left" className="text-[1rem] font-[700] mb-[33px]" to="#">PRICING</NavLink>
              </ul>
              <div className='container mx-auto'>
                <hr className=' text-[#808080]' />
              </div>

              <ul className='py-[2rem] flex flex-col'>
                <NavLink data-aos-delay="300" data-aos="fade-left" className="text-blue text-[1.2rem] mb-[33px] font-[700]" to="/jobseeker/register">I'm a job seeker</NavLink>
                <NavLink data-aos-delay="300" data-aos="fade-left" className="text-blue text-[1.2rem] mb-[45px] font-[700]" to="/employer">I'm an employer</NavLink>
    
              </ul>
              <div className=''>
              <NavLink to="/login" className="bg-blue rounded-sm px-[3rem] py-[0.5rem] text-white ">Login</NavLink>

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
