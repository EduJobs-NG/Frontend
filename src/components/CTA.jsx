import React from "react";
import { NavLink, Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="container text-center py-[1.5rem] mx-auto">
      <h1 className="font-bold  text-blue text-[2rem]">
        Secure your dream job and great offers just at your finger tip!
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-[1.5rem] my-[1.5rem]">
        <div className="">
        <Link to="/" className='py-[0.3em] px-[2.4em] cursor-pointer  border border-solid bg-blue text-white  hover:bg-white hover:text-blue text-[1.1rem] font-[800] border-blue rounded-[4px] uppercase'>
                I'm a job seeker
              </Link>
        </div>
        <div className="">
        <Link to="/employer" className='py-[0.3em] px-[2.4em] cursor-pointer  border border-solid bg-blue text-white  hover:bg-white hover:text-blue text-[1.1rem] font-[800] border-blue rounded-[4px] uppercase'>
                I'm an employer
              </Link>
        </div>
        <div className="">
        <Link to="/" className='py-[0.3em] px-[2.4em] cursor-pointer  border border-solid bg-blue text-white  hover:bg-white hover:text-blue text-[1.1rem] font-[800] border-blue rounded-[4px] uppercase'>
                I'm a parent
              </Link>
        </div>
      </div>
    </section>
  );
};
