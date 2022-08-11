import React, { useState } from 'react';
import { PersonalInfo } from './PersonalInfo';
import { ProfessionalInfo } from './ProfessionalInfo';
import { ContactInfo } from './ContactInfo';
import { Credentials } from './Credentials';

export const EditProfile = ({user}) => {
    const [title, setTitle] = useState('personal info');
    const [active, setActive] = useState(0)

    const titles = ['personal info', 'professional information', 'credentials', 'contact information'];
    const handleTitle = (e, index) => {
        setTitle(() => e.target.textContent.toLowerCase());
        setActive(index)
        // console.log(title)    
    }
    const handleDisplay = () => {
        switch (title) {
            case 'professional information':
                return <ProfessionalInfo />
                break;
            case 'credentials':
                return <Credentials />
                break;
            case 'contact information':
                return <ContactInfo />
                break;
            case 'personal information':
                return <PersonalInfo />
                break;
            default:
                return <PersonalInfo />
                break;
        }
    }
    return (
        <>

            <section className='border-b  border-b-[#808080]'>
                <ul className=' flex flex-row overflow-x-scroll md:overflow-hidden  whitespace-nowrap justify-between'>
                    {titles.map((title, index) => {
                        return (
                            <li className={`${active == index ? 'text-blue border-b border-b-blue' : 'text-black'
                                } cursor-pointer capitalize mr-[3rem]`} key={index} onClick={(e) => handleTitle(e, index)}>{title}</li>
                        )
                    })}
                </ul>

            
            </section>
            <section className='mt-[2rem]'>

<div className=''>
    {handleDisplay()}

</div>
</section>
        </>
    )
}
