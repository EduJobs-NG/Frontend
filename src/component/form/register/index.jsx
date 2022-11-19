import * as $ from './tab';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import register from '../../../assets/register.svg';
import employer from '../../../assets/employer.svg';
import jobseeker from '../../../assets/jobseeker.svg';

const Register = ({ close = null, hideBtn = false }) => {
    const [auth, setAuth] = useState(null);

    // methods
    const remAuth = () => setAuth(_ => null);
    const writeAuth = ({ currentTarget: target }) => void setAuth(() => target?.name);

    return <div
        className="flex flex-col bg-white p-8 rounded-lg gap-4 relative w-[clamp(24em,30vw,50em)]"
    >
        <div className="flex w-full items-center justify-center">
            {hideBtn ? null : <IoMdClose className="absolute top-4 right-4 cursor-pointer text-xl" onClick={close} />}
            <h2 className="uppercase font-black text-blue text-2xl flex gap-2 items-center">
                <img src={register} alt="" />
                <i className="h-8 w-1 bg-blue inline-block" />
                <span className=''>register</span>
            </h2>
        </div>
        {auth ? <$.Form close={remAuth} name={auth} /> : <div className="flex flex-col gap-4 w-full">
            <button name="jobseeker" onClick={writeAuth} className="w-full h-16 border text-gray-300 border-gray-300 rounded-md cursor-pointer relative flex items-center justify-center px-8" >
                <img src={jobseeker} alt="" className="absolute left-8" />
                I'm a job seeker
            </button>
            <button name="employer" onClick={writeAuth} className="w-full h-16 border text-gray-300 border-gray-300 rounded-md cursor-pointer relative flex items-center justify-center px-8" >
                <img src={employer} alt="" className="absolute left-8" />
                I'm an employer
            </button>
        </div>}
        <span className="-mt-4 flex items-center justify-center text-sm">
            <span>Having an account? <Link to='/auth/login' className='text-blue font-bold capitalize'>login</Link></span>
        </span>
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-blue uppercase font-black text-3xl">edujobs</h3>
            <span className="capitalize font-thinbold text-sm">all rights reserved</span>
        </div>
    </div>;
};

export const RegisterPortal = ({ close }) => createPortal(<Register close={close} />, document.querySelector("#portal"));

export default Register;
