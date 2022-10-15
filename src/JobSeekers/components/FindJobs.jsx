import React from 'react';
import { RecentJobs } from './RecentJobs';
import { Error } from '../../components/Error';
import { SearchJobs } from './SearchJobs';

export const FindJobs = () => {
  return (
    <>
    <section className='bg-[#f5f5f5] '>
    <SearchJobs />
    <RecentJobs />
    </section>
    
    </>
  )
}
