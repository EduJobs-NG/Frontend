import React from 'react'
import { EmployersNavbar } from '../LoggedInComponents/EmployersNavbar'
import { EmployerHeader } from '../LoggedInComponents/EmployerHeader'
export const EmployersDashboard = () => {

  return (
    <section className='bg-[#f5f5f5]'>
      <EmployersNavbar />
      
      <EmployerHeader />
    </section>
  )
}
