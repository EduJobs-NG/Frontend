import React from 'react';
import { footer, navigation } from '../data';


export const Footer = () => {
    const {logo} = navigation
    const { socials, candidates, employees, company, support} = footer;
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className='bg-blue py-[2.2rem]  '>
        <div className='container mx-auto text-white  '>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-[1rem] gap-y-[1rem]'>

            <div>
                <a className=''
                href="/">
                    <img src={logo} alt="" />
                </a>
            
                <div className='mt-[1rem] flex flex-row gap-x-5'>
                {socials.map((social, index) =>{
                    return(
                    <a target="_blank" key={index} className='bg-white rounded-full text-blue p-1 cursor-pointer' href={social.link}>{social.name}</a>
                    )     
                })}
                </div>

            </div>

            <div>
                <h4 className='font-[700] mb-[0.5rem]'>CANDIDATES</h4>
                <ul>

                {candidates.map((item, index) =>{
                    return (
                        <li key={index} className='mb-[0.5rem] hover:underline'>
                           <a href={item.href}>{item.name}</a> 
                            </li>

                    )
                })}
                </ul>


            </div>

            <div>
                <h4 className='font-[700] mb-[0.5rem]'>EMPLOYEES</h4>
                <ul>

                {employees.map((item,index) =>{
                    return (
                        <li key={index} className='mb-[0.5rem] hover:underline'>
                           <a href={item.href}>{item.name}</a> 
                            </li>

                    )
                })}
                </ul>

            </div>

            <div>
                <h4 className='font-[700] mb-[0.5rem]'>SUPPORT</h4>
                <ul>

                {support.map((item, index) =>{
                    return (
                        <li key={index} className='mb-[0.5rem] hover:underline'>
                        <a href={item.href}>{item.name}</a> 
                         </li>

                    )
                })}
                </ul>

            </div>

            <div>
                <h4 className='font-[700] mb-[0.5rem]'>COMPANY</h4>
                <ul>

                {company.map((item, index) =>{
                    return (
                        <li key={index} className='mb-[0.5rem] hover:underline'>
                        <a href={item.href}>{item.name}</a> 
                         </li>

                    )
                })}
                </ul>

            </div>

        </div>
        <hr className='my-4 text-[#f0f0f0] ' />
        <p className='text-center'>&copy; {year} EduJobs NG. All rights reserved.</p>
        </div>


    </footer>
  )
}
