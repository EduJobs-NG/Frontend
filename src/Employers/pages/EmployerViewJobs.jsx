import { Jobs } from '../Jobs/Jobs';
import React, { useState } from 'react';
import { Footer } from '../../components/Footer';
import { EmployerHeader } from '../LoggedInComponents/EmployerHeader';
import { EmployersNavbar } from '../LoggedInComponents/EmployersNavbar';

export const EmployerViewJobs = () => {
  // states
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section>
      <EmployersNavbar />
      <EmployerHeader />
      <div className='bg-[#f5f5f5]'>
        <Jobs title={title} location={location} Title={setTitle} Location={setLocation} />
      </div>
      <Footer />
    </section>
  )
};
