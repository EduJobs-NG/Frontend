import React,{useState} from 'react';
import {features} from '../data.js';
import { JoinNowModal } from './JoinNowModal.jsx';


export const Features = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
      {showModal && <JoinNowModal setShowModal={setShowModal} showModal={showModal} />}
        <section className='section  bg-[#F5F5F5]'>
            <div className='container mx-auto'>

            <h1 className='text-center mx-auto text-[1.5rem] md:text-[2rem] font-[700] max-w-[750px] text-blue px-3'>EduJobs NG brings the next
                opportunities to you
                with just a click.</h1>

            <div className='flex my-[2rem] flex-col  gap-y-[20px] justify-between 
             lg:flex-row'>
                {features.map((item, index) =>{
                    return(
                        
                    <div key={index} className="mx-auto md:mx-0 flex flex-col justify-center items-center drop-shadow-lg max-w-[320px] px-[1.5rem] py-[1rem] mb-[1rem] rounded-[24px]   bg-white border border-solid ">
                       <div className='flex  items-center justify-center'>
                       <img className=' w-[100%] h-[200px]'  src={item.img.type} alt="" /> 
                        </div>
                        <div className='my-[0.5rem]'>
                        <h2 className='text-[1.3rem] font-[700] mt-2 text-center text-blue'>{item.title}</h2> 
                       <p className=' text-[1rem]  text-center'>{item.subtitle}</p> 
                        </div>
                      
                    </div>

                    
                    )
                })
            }

            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className='w-full max-w-[300px]'>
                <div onClick={() => setShowModal(true)} className='bg-blue cursor-pointer py-[0.6rem] md:py-[0.8rem] mb-[1rem] font-[800]  px-[3.5rem] text-center  rounded-[6px] text-white transition'>
                
                    JOIN NOW
                
                </div>
            
                <a href="#" >
                <div className='text-blue py-[0.6rem] md:py-[0.8rem] px-[3.5rem] text-[1.1rem] bg-[#f0f0f0] hover:bg-blue hover:text-white transition-all text-center w-full font-[800] rounded-[6px]'>
                TAKE A QUICK TOUR
                </div>
                </a>
                </div>

            </div>


            </div>

        </section>
        </>

    )
}
