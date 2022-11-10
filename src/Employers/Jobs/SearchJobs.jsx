import React from 'react';
import { FormInputBox } from '../../components/Forms/FormInputBox';
import { FaSearch } from 'react-icons/fa';
export const SearchJobs = () => {
  return (
    <section>
        <div className='bg-white flex flex-row px-[0.9rem]  justify-between items-center  mb-[1.5rem] max-w-[350px] rounded-[30px] my-8'>
        <FormInputBox className="outline-none py-[0.5rem] px-[0.5rem] rounded-[30px]"   placeholder="Search Job Titles" />
        <FaSearch className='text-[#424242]' />
        </div>
    </section>
  )
}
