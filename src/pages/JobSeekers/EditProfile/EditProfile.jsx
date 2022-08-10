import React, { useState } from 'react';
import { PersonalInfo } from './PersonalInfo';
import { ProfessionalInfo } from './ProfessionalInfo';
import { ContactInfo } from './ContactInfo';
import { Credentials } from './Credentials';

export const EditProfile = () => {
    const [title, setTitle] = useState('personal info');
    const [active, setActive] = useState(0)

    const titles = ['personal info', 'professional info',  'credentials', 'contact info'];
    const handleTitle = (e, index) => {
        setTitle(()=>e.target.textContent.toLowerCase());
        setActive(index)  
        console.log(title)    
    }
    const handleDisplay = () => {
        switch (title) {
            case 'professional info':
               return <ProfessionalInfo />
                break;
            case 'credentials':
                return  <Credentials />
                break;
            case 'contact info':
                 return <ContactInfo />
                break;
            default:
                return  <PersonalInfo />
                break;
        }
    }
    return (
        <>

            <section>
                <ul className=' flex flex-row justify-between'>
                    {titles.map((title, index) => {
                        return (
                            <li  className={`${
                                active == index ? 'text-blue border-b border-b-blue' : 'text-black'
                              } cursor-pointer capitalize`} key={index}  onClick={(e)=>handleTitle(e, index)}>{title}</li>
                        )
                    })}
                </ul>

                <section className='mt-[2rem]'>

                    <div className=''>
                        {handleDisplay()}

                    </div>
                </section>
            </section>
        </>
    )
}
