import React from 'react'
import { EmployersNavbar } from '../LoggedIn/EmployersNavbar'
import { EmployerHeader } from '../LoggedIn/EmployerHeader'
export const EmployersDashboard = () => {

  return (
    <section className='bg-[#f5f5f5]'>
      <EmployersNavbar />
      
      <EmployerHeader />
    </section>
  )
}
