import React from 'react'
import { FormInputBox } from '../../components/Forms/FormInputBox';
import { FaSearch } from 'react-icons/fa';
export const SearchCandidate = () => {
  return (
    <section>
         <div className='bg-[#F2F2F2] flex flex-row px-[0.9rem] p-[0.2rem] justify-between items-center max-w-[500px] rounded-[30px]'>
        <FormInputBox className="outline-none bg-[#F2F2F2] rounded-[30px]  p-[0.2rem]" placeholder="Search candidates" />
        <FaSearch className='text-[#424242]' />
        </div>
    </section>
  )
}
