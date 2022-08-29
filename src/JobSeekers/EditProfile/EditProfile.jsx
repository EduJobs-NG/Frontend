import React, { useState, useContext, useEffect } from 'react';
import { PersonalInfo } from './PersonalInfo';
import { ProfessionalInfo } from './ProfessionalInfo';
import { ContactInfo } from './ContactInfo';
import { Credentials } from './Credentials';
import AuthContext from '../../context/AuthContext';



export const EditProfile = () => {
    const [title, setTitle] = useState('personal info');
    const [active, setActive] = useState(0)
    const { user, getUserMeHandler } = useContext(AuthContext);
   
    const titles = ['personal info', 'education', 'credentials', 'contact information'];
    const handleTitle = (e, index) => {
        setTitle(() => e.target.textContent.toLowerCase());
        setActive(index)
    }
    const handleDisplay = () => {
        switch (title) {
            case 'education':
                return <ProfessionalInfo setActive={setActive} />
            case 'credentials':
                return (<Credentials setActive={setActive} />)
            case 'contact information':
                return (<ContactInfo setActive={setActive}/>)
            case 'personal information':
                return (<PersonalInfo setActive={setActive} />)
            default:
                return (<PersonalInfo setActive={setActive}/>)
        }
    }
    return (
        <>

            <section className='border-b  border-b-[#808080] '>
                <ul className=' flex flex-row overflow-x-scroll lg:overflow-hidden  whitespace-nowrap justify-between'>
                    {titles.map((title, index) => {
                        return (
                            <li className={`${active == index ? 'text-blue  border-b-[0.2rem] border-b-blue' : 'text-black'
                                } cursor-pointer capitalize mr-[3rem] text-[1.2rem] md:text-[1.2rem] font-[700] `} key={index} onClick={(e) => handleTitle(e, index)}>
                                    {title}</li>
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
