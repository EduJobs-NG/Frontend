import React from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormInputBox } from '../../components/Forms/FormInputBox';

export const SearchJobs = () => {
  // states
  const [title, setTitle] = useState("");

  // methods
  const handleSearch = ({ currentTarget: t }) => setTitle(() => t.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title);
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className='bg-white flex flex-row px-[0.9rem]  justify-between items-center  mb-[1.5rem] max-w-[350px] rounded-[30px]'>
        <FormInputBox className="outline-none py-[0.5rem] px-[0.5rem] rounded-[30px]" placeholder="Search Job Titles" onChange={handleSearch} />
        <FaSearch className='text-[#424242]' />
      </form>
    </section>
  )
};
