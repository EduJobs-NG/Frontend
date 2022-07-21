import React, {useState} from 'react';
import {navigation} from '../data';
import {NavLink} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'

export const Navbar = () => {
  const {logo} = navigation;
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(false);
  const handleClick = () =>{
    setMenu(!menu);
    setActive(!active);

  }
  return (
    <section className='bg-[#02378B] z-[999]'>
        <div className="container mx-auto">
          <div className="flex uppercase py-[1.5rem] items-center flex-row justify-between">
            <ul className="flex gap-x-[3rem] text-white flex-row">
             <li className='title'>
              <NavLink to="/">{logo}</NavLink>
              </li> 
              
              {navigation.leftNav.map((nav, index) =>{
                return (
                  <li className='hidden xl:flex' key={index}>
                     <NavLink to="#"> {nav.name}</NavLink>
                  </li>
                 
                )
              })}
            </ul>

            <ul className='hidden xl:flex flex-row text-white gap-x-[2rem]'>
              
              <li>
              <NavLink to="/login" className='p-1 cursor-pointer px-4 border border-solid   border-white rounded'>JOB SEEKERS</NavLink>
              </li>
              <li>
              <NavLink to="/login" className='p-1 cursor-pointer px-4 border border-solid   border-white rounded'>EMPLOYERS</NavLink>
              </li>
              <li>
              <NavLink to="/login" className='p-1 cursor-pointer px-4 border border-solid bg-white text-blue border-white rounded'>LOGIN</NavLink>
              </li>
             

            </ul>
            <div className='xl:hidden'>
            <span onClick={handleClick}>
               {menu ? <FaTimes className='text-white text-[1.3rem] cursor-pointer' />: <FaBars className='text-white text-[1.3rem] cursor-pointer' />} </span>
            </div>
          </div>

          

        </div>
{/* Mobile Menu */}
{active && (
<div className='absolute w-full z-[999] xl:hidden'>
            <div className='bg-white transition duration-1000 ease-in-out h-screen flex flex-col justify-center text-center align-items'>
              <ul className='py-[2rem] flex flex-col gap-y-6'>
                <NavLink className="text-[1rem] font-[700]"  to="#">JOBS</NavLink>
                <NavLink className="text-[1rem] font-[700]" to="#">ABOUT US</NavLink>
                <NavLink className="text-[1rem] font-[700]" to="#">TRENDING</NavLink>
                <NavLink className="text-[1rem] font-[700]" to="#">PRICING</NavLink>
              </ul>
              <div className='container mx-auto'>
                <hr className=' text-[#808080] ' />
              </div>

              <ul className='py-[2rem] flex flex-col gap-y-6'>
                <NavLink className="text-blue text-[1rem] font-[700]" to="#">I'm a job seeker</NavLink>
                <NavLink className="text-blue text-[1rem] font-[700]" to="#">I'm an employer</NavLink>
    
              </ul>
              <NavLink to="/login" className="bg-blue text-white">Login</NavLink>
            </div>

            <div>
            </div>
          </div>
)
}
    </section>
  )
}
