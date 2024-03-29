import SearchJobs from './SearchJobs';
import React, {useState} from 'react';
import { RecentJobs } from './RecentJobs';


export const FindJobs = (props) => {
  const [showSearchJobs, setShowSearchJobs] = useState(true);
  const [showRecentJobs, setShowRecentJobs] = useState(true)
  return (
    <>
    <section className='bg-[#f5f5f5] '>
    {showSearchJobs && <SearchJobs setShowRecentJobs={setShowRecentJobs} setShowSearchJobs={setShowSearchJobs}  />}
    {showRecentJobs && <RecentJobs {...props}  />}
    </section>
    
    </>
  )
}
