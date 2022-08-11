import React, {useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';
import {FaBars, FaTimes} from 'react-icons/fa';
import chat from '../../assets/chat.png'
import notification from '../../assets/notification.png'



export const Navbar = () => {
  const {user} = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleClick = () =>{
    setMenu(!menu);
    setActive(!active);

  }
  return (
    <section className='bg-[#02378B] text-white '>
      <nav className='container mx-auto'>
        <ul className='flex flex-row py-[1rem] justify-between'>
          <div className='flex flex-row gap-x-[2rem]'>
          <li className='title'>
            <NavLink to="/" >EduJobsNg</NavLink>
          </li>
          <div className='hidden xl:flex flex-row gap-x-[2rem]'>
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
          </div>

<div className='flex flex-row gap-x-[1rem]'>

  <div>
    <img src={chat} alt="" />
  </div>

  <div>
    <img src={notification} alt="" />
  </div>

  <div className='h-[2rem] w-[1px] bg-white '>

  </div>
  
<NavLink to="/dashboard/profile">
  <FaUserCircle className='' />
    </NavLink>

</div>
        </ul>


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
                <NavLink data-aos-delay="300" data-aos="fade-left" className="text-blue text-[1.2rem] mb-[33px] font-[700]" to="#">I'm a job seeker</NavLink>
                <NavLink data-aos-delay="300" data-aos="fade-left" className="text-blue text-[1.2rem] mb-[45px] font-[700]" to="#">I'm an employer</NavLink>
    
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

      </nav>
    </section>
  )
}
