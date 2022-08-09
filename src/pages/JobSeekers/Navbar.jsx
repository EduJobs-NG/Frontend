import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';


export const Navbar = () => {
  const {user} = useContext(AuthContext);
  return (
    <section className='bg-[#02378B] text-white '>
      <nav className='container mx-auto'>
        <ul className='flex flex-row py-[1rem] justify-between'>
          <div className='flex flex-row gap-x-[2rem]'>
          <li className='title'>
            <NavLink to="/" >EduJobsNg</NavLink>
          </li>
          <li className=''>
            <NavLink to="/dashboard/find-jobs" className={({ isActive }) => (isActive ? 'active border-b border-b-white' : 'inactive')}>FIND JOBS</NavLink>
          </li>
          <li className=''>
            <NavLink to="" >SAVED JOBS</NavLink>
          </li>
          <li className=''>
            <NavLink to="">PRICING</NavLink>
          </li>
          </div>
<div>
  
<NavLink to="/dashboard/profile">
  <FaUserCircle className='w-10' />
    </NavLink>
</div>
        </ul>


      </nav>
    </section>
  )
}
