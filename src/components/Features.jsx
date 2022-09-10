import React,{useState} from 'react';
import {features} from '../data.js';
import { JoinNowModal } from './JoinNowModal.jsx';


export const Features = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
      {/* {showModal && <JoinNowModal />} */}
        <section className='section  bg-[#F5F5F5]'>
            <div className='container mx-auto'>

            <h1 className='text-center mx-auto text-[1.5rem] font-[700] max-w-[630px] text-blue px-3'>EduJobs NG brings the next
                opportunities to You
                with just a click.</h1>

            <div className='flex my-[2rem] flex-col  gap-y-[20px] justify-between 
             lg:flex-row'>
                {features.map((item, index) =>{
                    return(
                        
                    <div key={index} className="mx-auto md:mx-0 flex flex-col justify-center items-center drop-shadow-lg max-w-[320px] px-[1.5rem] py-[1rem] mb-[1rem] rounded-[24px]   bg-white border border-solid ">
                       <img className=' min-h-[200px]' src={item.img.type} alt="" /> 
                       <h2 className='text-[1.5rem] font-[700] mt-2 text-center text-blue'>{item.title}</h2> 
                       <p className=' text-[1.1rem]  text-center'>{item.subtitle}</p> 
                    </div>

                    
                    )
                })
            }

            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className='max-w-[500px]'>
                <div onClick={() => setShowModal(true)} className='bg-blue cursor-pointer p-[0.4rem] mb-[1rem] font-[600] px-[2.5rem] text-center w-full rounded-lg text-white transition'>
                
                    Join Now
                
                </div>
            
                <a href="#" >
                <div className='text-blue p-[0.3rem] px-[1.5rem] bg-[#f0f0f0] hover:bg-blue hover:text-white transition-all text-center w-full font-[600] rounded-lg'>
                Take A QUICK TOUR
                </div>
                </a>
                </div>

            </div>


            </div>

        </section>
        </>

    )
}
