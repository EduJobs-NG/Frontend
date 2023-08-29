import Aos from "aos";
import "aos/dist/aos.css";
import { navigation } from "../../data";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { EmployersPopupLogin } from "./EmployersPopupLogin";
import { EmployersRegistrationPopup } from "./EmployersRegistrationPopup";

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
    <nav className="bg-blue z-10 px-8">
      {showLogin && <EmployersPopupLogin setShowLogin={setShowLogin} />}
      {showRegister && <EmployersRegistrationPopup setShowRegister={setShowRegister} />}

      <div className="container mx-auto">
        <div className="flex e py-[1.5rem] items-center flex-row justify-between">
          <ul className="flex uppercase gap-6 text-white flex-row items-center justify-center">
            <li className="flex items-center flex-row">
              <Link to="/employer">
                <img src={logo} className="h-full" alt="" />
              </Link>
            </li>
            <div className="hidden xl:flex flex-row text-white gap-10 text-sm items-center">
              <li>
                <Link to="#" className=" font-bold hover:underline cursor-pointer">
                  DASHBOARD
                </Link>
              </li>
              <li>
                <Link to="#" className=" font-bold hover:underline cursor-pointer">
                  ANALYTICS
                </Link>
              </li>
            </div>
          </ul>

          <ul className='hidden xl:flex flex-row text-white gap-8 items-center'>
            <li>
              <Link to="/" className='hover:underline cursor-pointer font-bold uppercase font-sm'>
                I'm a jobseeker
              </Link>
            </li>


            <li>
              <Link to="#" onClick={() => setShowLogin(true)} className='py-[0.3em] px-[2.4em] cursor-pointer  border border-solid bg-white text-blue hover:text-white hover:bg-blue text-[1.1rem] font-[800] border-white rounded-[4px]'>
                LOGIN
              </Link>
            </li>
          </ul>

          <div className="xl:hidden">
            <span onClick={handleClick}>
              <FaBars className="text-white text-[1.3em] cursor-pointer" />
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {active && (
        <div className='absolute left-0 top-0 w-full z-[9999] xl:hidden'>
          <div data-aos="fade-up" className='bg-white  transition duration-1000 ease-in-out h-screen flex flex-col align-items justify-center  text-center '>
            <FaTimes onClick={handleClick} className='text-blue text-[1.3rem] mt-3 cursor-pointer absolute right-5 top-5' />
            <ul className='py-[2rem] flex flex-col '>
              <Link data-aos-delay="300" data-aos="fade-left" className=" font-[700] text-[1.2rem] mb-[33px]" to="/employer">HOME</Link>
              <Link data-aos-delay="300" data-aos="fade-left" className=" font-[700] text-[1.2rem] mb-[33px]" to="/employer/dashboard/post-job">POST JOBS</Link>
              <Link data-aos-delay="300" data-aos="fade-left" className=" font-[700] text-[1.2rem] mb-[33px]" to="/about">ABOUT US</Link>
            </ul>
            <div className='container mx-auto'>
              <hr className=' text-[#808080]' />
            </div>

            <ul className='py-[2rem] flex flex-col'>
              <Link data-aos-delay="300" data-aos="fade-left" className="text-blue text-[1.2rem] uppercase mb-[45px] font-[700]" to="/">I'm a job seeker</Link>
              <Link data-aos-delay="300" data-aos="fade-left" className="text-blue text-[1.2rem] uppercase mb-[45px] font-[700]" to="/employer">I'm an employer</Link>
            </ul>
            <div>
              <Link to="/employer/login" className="bg-blue rounded-sm px-[3rem] py-[0.5rem] text-white ">Login</Link>
            </div>
          </div>

          <div>
          </div>
        </div>
      )}
    </nav>
  );
};
