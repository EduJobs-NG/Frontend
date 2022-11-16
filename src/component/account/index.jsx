import { useState } from 'react';
import { } from '../../hooks';
import { Update } from '../form';

const Account = () => {
    // state
    const [show, setShow] = useState(false);

    // methods
    const getShow = ({ currentTarget: target }) => setShow(() => target.name);

    return <section className="w-screen flex flex-col my-8">
        {show && <Update name={show} close={setShow} />}
        <div className="w-full flex relative items-center justify-center p-14">
            <span className="absolute top-4 left-4 capitalize font-bold text-2xl">profile</span>
            <div className="flex flex-col items-center justify-center gap-2">
                <img src="" alt="" className="rounded-full w-24 h-24 bg-gray-200 outline-none" />
                <h2 className="font-bold capitalize">muhammad inuwa</h2>
            </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
            <div className="flex w-full px-4 pb-1 items-center justify-center relative before:absolute before:bottom-0 py-4 before:opacity-40 before:w-full before:h-[1px] before:bg-grey">
                <h3 className="w-[max(20em,30%)] mr-auto capitalize">full name</h3>
                <input type="text" className="text-left capitalize pointer-events-none outline-none" readOnly={true} name="name" value="muhammad inuwa" />
                <button onClick={null} className="w-[max(20em,30%)] ml-auto text-blue flex gap-2 justify-end">
                    <b className="capitalize font-thin ">edit</b>
                    <b className="">&gt;</b>
                </button>
            </div>
            <div className="flex w-full px-4 pb-1 items-center justify-center relative before:absolute before:bottom-0 py-4 before:opacity-40 before:w-full before:h-[1px] before:bg-grey">
                <h3 className="w-[max(20em,30%)] mr-auto ">mminuwaali@gmail.com</h3>
                <input type="text" className="text-left capitalize pointer-events-none outline-none" readOnly={true} name="name" value="muhammad inuwa" />
                <button name="email" onClick={getShow} className="w-[max(20em,30%)] ml-auto text-blue flex gap-2 justify-end">
                    <b className="capitalize font-thin ">change email address</b>
                    <b className="">&gt;</b>
                </button>
            </div>
            <div className="flex w-full px-4 pb-1 items-center justify-center relative before:absolute before:bottom-0 py-4 before:opacity-40 before:w-full before:h-[1px] before:bg-grey">
                <h3 className="w-[max(20em,30%)] mr-auto capitalize">password</h3>
                <input type="password" className="text-left capitalize pointer-events-none outline-none" readOnly={true} name="name" value="muhammad inuwa" />
                <button name="password" onClick={getShow} className="w-[max(20em,30%)] ml-auto text-blue flex gap-2 justify-end">
                    <b className="capitalize font-thin ">change password</b>
                    <b className="">&gt;</b>
                </button>
            </div>
            <div className="flex w-full px-4 pb-1 items-center justify-center relative before:absolute before:bottom-0 py-4 before:opacity-40 before:w-full before:h-[1px] before:bg-grey">
                <h3 className="w-[max(20em,30%)] mr-auto capitalize">billing plan and information</h3>
                <input type="text" className="text-left capitalize pointer-events-none outline-none" readOnly={true} name="name" value="basic plan" />
                <button onClick={null} className="w-[max(20em,30%)] ml-auto text-blue flex gap-2 justify-end">
                    <b className="capitalize font-thin ">edit plan</b>
                    <b className="">&gt;</b>
                </button>
            </div>
        </div>
    </section>;
};

export default Account;
