import { useState } from 'react';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import { AiFillMail, AiFillEye, AiFillEyeInvisible as Hidden } from 'react-icons/ai';

const Updater = ({ close }) => {
    // states
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState({ password: '' });

    const setInfo = ({ currentTarget: ele }) => void setData(prev => ({ ...prev, [ele.name]: ele.value || "" }));
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return createPortal(<form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-8 rounded-lg relative w-[clamp(20em,30vw,50em)]">
        <IoMdClose className="absolute top-4 right-4 cursor-pointer text-xl" onClick={() => close?.(_ => "")} />
        <div className="flex items-center justify center gap-4 relative">
            <h3 className="text-2xl capitalize font-bold">change </h3>
        </div>
        <div className="flex flex-col gap-2 w-full">
            <div className="flex p-4 rounded relative w-full h-12 border border-grey">
                <input required onChange={setInfo} type="text" name="email" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="email address" />
                <AiFillMail />
            </div>
            <div className="flex p-4 rounded relative w-full h-12 border border-grey">
                <input required onChange={setInfo} type={visible ? "text" : "password"} min="8" name="password" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="email address" />
                {
                    visible ?
                        <AiFillEye className="cursor-pointer" onClick={_ => setVisible(v => !v)} /> :
                        <Hidden className="cursor-pointer" onClick={_ => setVisible(v => !v)} />
                }
            </div>
        </div>
    </form>, document.querySelector("#portal"));
};

export default Updater;
