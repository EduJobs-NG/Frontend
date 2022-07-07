import React from 'react';
import {features} from '../data.js'

export const Features = () => {
    return (
      
        <section className='section  bg-[#F5F5F5]'>
            <div className='container mx-auto'>

            <h1 className='text-center mx-auto title max-w-[630px] text-blue px-3'>EduJobs NG brings the next
                opportunities to You
                with just a click.</h1>

            <div className='flex my-[2rem] flex-col  gap-y-[20px] justify-between 
             lg:flex-row'>
                {features.map((item, index) =>{
                    return(
                    <div key={index} className="mx-auto md:mx-0 drop-shadow-lg max-w-[320px] p-3 rounded-[24px]  bg-white border border-solid ">
                       <img className='min-h-[200px]' src={item.img.type} alt="" /> 
                       <h2 className='title mt-2 text-center text-blue'>{item.title}</h2> 
                       <p className='subtitle text-center'>{item.subtitle}</p> 
                    </div>
                    )
                })
            }

            </div>

            <div className='flex flex-col gap-y-[1rem] justify-center md:flex-row md:gap-x-[30px]'>
                <div className=''>
                <a className='bg-blue p-[0.4rem] font-[600] px-[2.5rem] rounded-lg text-white' href="#">
                    Join Now
                </a>
                </div>
               
                <p className='text-black'>OR</p>
                
                <div>
                <a className='text-blue p-[0.3rem] px-[1.5rem] font-[600] rounded-sm border border-[#02378B]'
                href="#" >Take A QUICK TOUR</a>
                </div>

            </div>


            </div>

        </section>
    )
}
