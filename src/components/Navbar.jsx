import React from 'react';
import {navigation} from '../data';
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
  const {logo} = navigation;
  return (
    <section className='bg-[#02378B]'>
        <div className="container mx-auto">
          <div className="hidden lg:flex uppercase py-[2rem] items-center flex-row justify-between">
            <ul className="flex gap-x-[3rem] text-white flex-row">
             <li className='title'>
              <NavLink to="/">{logo}</NavLink>
              </li> 
              
              {navigation.leftNav.map((nav, index) =>{
                return (
                  <li key={index}>
                     <NavLink to="#"> {nav.name}</NavLink>
                  </li>
                 
                )
              })}
            </ul>

            <ul className='flex flex-row text-white gap-x-[2rem]'>
              
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

          </div>

        </div>

    </section>
  )
}
