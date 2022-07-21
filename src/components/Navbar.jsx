import React, {useState} from 'react';
import {navigation} from '../data';
import {NavLink} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'

export const Navbar = () => {
  const {logo} = navigation;
  const [menu, setMenu] = useState(false);
  const handleClick = () =>{
    setMenu(!menu);

  }
  return (
    <section className='bg-[#02378B]'>
        <div className="container mx-auto">
          <div className="flex uppercase py-[2rem] items-center flex-row justify-between">
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

          {/* Mobile Menu */}
          <div className='xl:hidden'>
            <div className='flex flex-col gap-y-6'>

            </div>

          </div>

        </div>

    </section>
  )
}
