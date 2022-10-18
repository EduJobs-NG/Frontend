import React from "react";
import { Navbar } from "../components/Navbar";
import pagenotfound from "../assets/pageNotFound.png";
import { NavLink } from "react-router-dom";
export const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="flex flex-col h-screen text-center justify-center items-center">
          <div>
            <img src={pagenotfound} alt="" />
          </div>
          <p className="font-[700] pt-[1rem] max-w-[400px]">
            Oops! We’re sorry, the page you requested for could not be found
          </p>
          <NavLink to="/"
                className="bg-blue opacity-100 mt-[1rem] px-[5rem] text-white rounded-[5px] p-2"
                type="submit"
              >
                GO TO HOMEPAGE
              </NavLink>
        </div>
      </section>
    </>
  );
};
