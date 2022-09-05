import React from 'react';
import { FormInputBox } from '../../components/Forms/FormInputBox';
import { RecentJobs } from './RecentJobs';

export const FindJobs = () => {
  return (
    <>
    <section className='bg-[#f5f5f5] '>
    <div className='container mx-auto py-[4rem]'>
      <div className='grid place-items-center md:grid-cols-2 gap-3 md:gap-[6rem]'>

      <div className='bg-white hover:border-[#000] transition-all px-[2rem] py-[0.3rem] w-full border rounded-[5px] border-[#808080] flex flex-row justify-start items-center gap-2 '>
        <p className='text-blue font-[700]'>Job Title</p>
        <div className='bg-[#000] ml-[0.5rem]  h-[2rem] w-[3px]'></div>
        <div>
        <FormInputBox placeholder='Search keyword' className="border-none p-2.5 block w-full    border-[#808080] outline-none" />
        </div>
        
      </div>

      <div className='bg-white  hover:border-[#000] transition-all px-[2rem] py-[0.3rem] w-full border rounded-[5px] border-[#808080] flex flex-row justify-start items-center gap-2 '>
        <p className='text-blue font-[700]'>Location</p>
        <div className='bg-[#000] ml-[0.5rem] h-[2rem] w-[3px]'></div>
        <div>
        <FormInputBox placeholder='Search keyword' className="border-none p-2.5 block w-full    border-[#808080] outline-none" />
        </div>
        
      </div>
      </div>
      <div className='grid mt-[2rem] md:mt-[3rem]  place-items-center'>
            <button className='bg-blue uppercase opacity-100 w-full md:w-[300px] px-[5rem] text-white rounded-[5px] p-2' type="submit">Search Jobs</button>
             
              {/* <div className='flex justify-center'>
                <ThreeDots type="ThreeDots"
                  width={100} height={20} color="blue"
                />
              </div> */}
           
          </div>

    </div>
    <RecentJobs />
    </section>
    
    </>
  )
}
