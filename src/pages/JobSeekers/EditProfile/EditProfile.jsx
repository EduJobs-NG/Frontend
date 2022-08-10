import React, { useState } from 'react';
import { PersonalInfo } from './PersonalInfo';
import { ProfessionalInfo } from './ProfessionalInfo';
import { ContactInfo } from './ContactInfo';
import { Credentials } from './Credentials';

export const EditProfile = () => {
    const [title, setTitle] = useState('personal info');
    const [active, setActive] = useState('personal info')

    const titles = ['Personal Info', 'Professional Info',  'Credentials', 'Contact Info'];
    const handleTitle = (e) => {
        setTitle(e.target.textContent.toLowerCase());
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
                    {titles.map((item, index) => {
                        return (
                            <li className='cursor-pointer' key={index} onClick={handleTitle}>{item}</li>
                        )
                    })}
                </ul>

                <section>

                    <div className=''>
                        {handleDisplay()}

                    </div>
                </section>
            </section>
        </>
    )
}
