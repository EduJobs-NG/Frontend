import { useState } from 'react';
import { } from '../../hooks';
import { Update } from '../form';

const Account = () => {
    // state
    const [show, setShow] = useState(false);

    // methods
    const getShow = (name) => void setShow(_ => name);

    return <section className="w-screen flex flex-col my-8">
        {show ? <Update name={show} close={setShow} /> : null}
        <div className="w-full flex relative items-center justify-center p-14">
            <span className="absolute top-4 left-4 capitalize font-bold">profile</span>
            <div className="flex flex-col items-center justify-center gap-2">
                <img src="" alt="" className="rounded-full w-24 h-24 bg-grey" />
                <h2 className="font-bold capitalize">muhammad inuwa</h2>
            </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
            <div className="flex w-full px-4 pb-1 items-center justify-center relative before:absolute before:bottom-0 py-4 before:opacity-40 before:w-full before:h-[1px] before:bg-grey">
                <h3 className="mr-auto capitalize">full name</h3>
                <input type="text" className="text-left capitalize pointer-events-none outline-none" readOnly={true} name="name" value="muhammad inuwa" />
                <button onClick={null} className=" ml-auto text-blue flex gap-2">
                    <b className="capitalize ">edit</b>
                    <b className="">&gt;</b>
                </button>
            </div>
            <div className="flex w-full px-4 pb-1 items-center justify-center relative before:absolute before:bottom-0 py-4 before:opacity-40 before:w-full before:h-[1px] before:bg-grey">
                <h3 className="mr-auto ">mminuwaali@gmail.com</h3>
                <input type="text" className="text-left capitalize pointer-events-none outline-none" readOnly={true} name="name" value="muhammad inuwa" />
                <button onClick={() => getShow(_ => "email")} className=" ml-auto text-blue flex gap-2">
                    <b className="capitalize ">change email address</b>
                    <b className="">&gt;</b>
                </button>
            </div>
            <div className="flex w-full px-4 pb-1 items-center justify-center relative before:absolute before:bottom-0 py-4 before:opacity-40 before:w-full before:h-[1px] before:bg-grey">
                <h3 className="mr-auto capitalize">password</h3>
                <input type="password" className="text-left capitalize pointer-events-none outline-none" readOnly={true} name="name" value="muhammad inuwa" />
                <button onClick={() => getShow(_ => "password")} className=" ml-auto text-blue flex gap-2">
                    <b className="capitalize ">changev password</b>
                    <b className="">&gt;</b>
                </button>
            </div>
            <div className="flex w-full px-4 pb-1 items-center justify-center relative before:absolute before:bottom-0 py-4 before:opacity-40 before:w-full before:h-[1px] before:bg-grey">
                <h3 className="mr-auto capitalize">billing plan and information</h3>
                <input type="text" className="text-left capitalize pointer-events-none outline-none" readOnly={true} name="name" value="basic plan" />
                <button onClick={null} className=" ml-auto text-blue flex gap-2">
                    <b className="capitalize ">edit plan</b>
                    <b className="">&gt;</b>
                </button>
            </div>
        </div>
    </section>;
};

export default Account;
