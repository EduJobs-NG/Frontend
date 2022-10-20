import React from 'react';
import errorsvg from '../assets/error.svg'
import {Link} from 'react-router-dom';

export const Error = ({message}) => {
  return (
    <section className="">
    <div className="flex flex-col h-screen text-center justify-center items-center">
      <div>
        <img src={errorsvg} alt="" />
      </div>
      <p className="font-[700] pt-[1rem] max-w-[400px]">
      An error occured.
Refresh or go back to the homepage
      </p>
      <Link to="/"
            className="bg-blue opacity-100 mt-[1rem] px-[5rem] text-white rounded-[5px] p-2"
            type="submit"
          >
            GO TO HOMEPAGE
          </Link>
    </div>
  </section>
  )
}
