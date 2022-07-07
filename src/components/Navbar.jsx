import React from 'react';
import {navigation} from '../data';

export const Navbar = () => {
  const {logo} = navigation;
  return (
    <section className='bg-[#02378B]'>
        <div className="container mx-auto">
          <div className="hidden lg:flex h-[50px] uppercase py-[3rem] items-center flex-row justify-between">
            <ul className="flex gap-x-[3rem] text-white flex-row">
             <li className='title'>{logo}</li> 
              
              {navigation.leftNav.map((nav, index) =>{
                return (
                  <li key={index}>{nav.name}</li>
                )
              })}
            </ul>

            <ul className='flex flex-row text-white gap-x-[2rem]'>
            {navigation.rightNav.map((nav, index) =>{
                return (
                  <li key={index}>{nav.name}</li>
                )
              })}
            </ul>

          </div>

        </div>

    </section>
  )
}
