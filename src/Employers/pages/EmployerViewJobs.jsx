import React from 'react';
import { EmployerHeader } from '../LoggedInComponents/EmployerHeader';
import { EmployersNavbar } from '../LoggedInComponents/EmployersNavbar';
import { Jobs } from '../Jobs/Jobs';

export const EmployerViewJobs = () => {
  return (
    <section>
        <EmployersNavbar />
        <EmployerHeader />
        <div className='bg-[#f5f5f5]'>
          <Jobs />

        </div>

       

    </section>
  )
}
