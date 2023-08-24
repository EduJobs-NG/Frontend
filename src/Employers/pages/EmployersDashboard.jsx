import React from 'react'
import { EmployerHeader } from '../LoggedInComponents/EmployerHeader';
import { EmployersNavbar } from '../LoggedInComponents/EmployersNavbar';

export const EmployersDashboard = () => (
  <section className='bg-[#f5f5f5]'>
    <EmployersNavbar />
    <EmployerHeader />
  </section>
);
