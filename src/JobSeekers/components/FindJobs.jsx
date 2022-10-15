import React, {useState} from 'react';
import { RecentJobs } from './RecentJobs';
import { Error } from '../../components/Error';
import { SearchJobs } from './SearchJobs';


export const FindJobs = () => {
  const [showSearchJobs, setShowSearchJobs] = useState(true);
  const [showRecentJobs, setShowRecentJobs] = useState(true)
  return (
    <>
    <section className='bg-[#f5f5f5] '>
    {showSearchJobs && <SearchJobs setShowRecentJobs={setShowRecentJobs} setShowSearchJobs={setShowSearchJobs}  />}
    {showRecentJobs && <RecentJobs  />}
    </section>
    
    </>
  )
}
