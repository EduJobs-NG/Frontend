import React from 'react';
import { Link } from 'react-router-dom';
import { footer, navigation } from '../data';


export const Footer = () => {
    // objects
    const date = new Date();
    const { logo } = navigation;
    const year = date.getFullYear();
    const { socials, candidates, employees, company, support } = footer;

    // methods
    const navLink = (item, id) => <li key={id}><Link to={item.href} className='capitalize font-thin'>{item.name}</Link></li>;

    return (
        <footer className='bg-blue px-8 py-2 flex flex-col'>
            <div className="flex items-start justify-evenly flex-wrap gap-4 py-8 text-white">
                <div className="flex flex-col items-start justify-start gap-2 my-auto">
                    <img src={logo} alt="" className='' />
                    <div className="flex items-center justify-start gap-1 -mt-1 self-center">
                        {socials.map((item, id) => (
                            <a
                                children={item.name}
                                key={id} href={item.link}
                                className="bg-grey rounded-full flex items-center justify-center p-2 py-2 scale-75"
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <h3 className="uppercase font-bold">candidates</h3>
                    <ul>
                        {candidates.map(navLink)}
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <h3 className="uppercase font-bold">employees</h3>
                    <ul>
                        {employees.map(navLink)}
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <h3 className="uppercase font-bold">company</h3>
                    <ul>
                        {company.map(navLink)}
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <h3 className="uppercase font-bold">support</h3>
                    <ul>
                        {support.map(navLink)}
                    </ul>
                </div>
            </div>
            <div
                className="border-white border-1 pt-5 flex items-center justify-center p-1 relative before:absolute before:top-0 
                before:w-full before:h-[.04em] before:bg-white before:opacity-40"
            >
                <span className='text-white text-center font-bold uppercase leading-[1em] text-sm sm:text-md'>
                    &copy; {year} edujobs ng. all rights reserved
                </span>
            </div>
        </footer>
    )
}
