import React from 'react';
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <section className='bg-[#02378B] text-white '>
      <nav className='container mx-auto'>
        <ul className='flex flex-row py-[1rem] justify-between'>
          <div className='flex flex-row gap-x-[2rem]'>
          <li className='title'>
            <NavLink to="/">EduJobsNg</NavLink>
          </li>
          <li className=''>
            <NavLink to="">FIND JOBS</NavLink>
          </li>
          <li className=''>
            <NavLink to="">SAVED JOBS</NavLink>
          </li>
          <li className=''>
            <NavLink to="">PRICING</NavLink>
          </li>
          </div>
<div>
  <NavLink to="/profile">Profile</NavLink>
</div>
        </ul>


      </nav>
    </section>
  )
}
