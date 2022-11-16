import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import { useMyDispatch } from '../../../store';
import { ThreeDots } from 'react-loader-spinner';
import { AiFillMail, AiFillEye, AiFillEyeInvisible as Hidden } from 'react-icons/ai';

export const Form = ({ close, url }) => {
    // hooks
    const [data, setData] = useState({});
    const [visible, setVisible] = useState(false);
    const { register: $register } = useMyDispatch();
    const { load } = useSelector(state => state.auth);

    // methods
    const getData = ({ currentTarget: target }) => void setData(prev => ({ ...prev, [target.name]: target.value }));
    const handleSubmit = (e) => {
        e.preventDefault();
        if(data?.password.length < 8) return toast.warn('password must be greater than 8');
        else if (data?.re_password !== data?.password) return toast.warn('password missmatch');
        $register({ data, url: `${url}/users/` });
    };

    return <form className="w-full py-8 flex flex-wrap gap-2 justify-between" onSubmit={handleSubmit}>
        <button className="mr-auto uppercase text-sm font-bold cursor-pointer text-blue w-full shrink-0 block text-left" onClick={close} type="button">go back</button>
        <div className="flex p-4 rounded relative w-[48%] h-12 border border-grey">
            <input name="first_name" value={data?.first_name || ''} onChange={getData} type="text" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="first name" required />
            <FaUserCircle />
        </div>
        <div className="flex p-4 rounded relative w-[48%] h-12 border border-grey">
            <input name="last_name" value={data?.last_name || ''} onChange={getData} type="text" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="last name" required />
            <FaUserCircle />
        </div>
        <div className="flex p-4 rounded relative w-full h-12 border border-grey">
            <input name="email" value={data?.email || ''} onChange={getData} type="text" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="email address" required />
            <AiFillMail />
        </div>
        <div className="flex p-4 rounded relative w-full h-12 border border-grey">
            <input onChange={getData} type={visible ? "text" : "password"} name="password" min="8" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="password" required />
            {
                visible ?
                    <AiFillEye className="cursor-pointer" onClick={_ => setVisible(v => !v)} /> :
                    <Hidden className="cursor-pointer" onClick={_ => setVisible(v => !v)} />
            }
        </div>
        <div className="flex p-4 rounded relative w-full h-12 border border-grey">
            <input onChange={getData} type={visible ? "text" : "password"} name="re_password" min="8" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="confirm password" required />
            {
                visible ?
                    <AiFillEye className="cursor-pointer" onClick={_ => setVisible(v => !v)} /> :
                    <Hidden className="cursor-pointer" onClick={_ => setVisible(v => !v)} />
            }
        </div>
        <button disabled={load} className="rounded cursor-pointer hover:brightness-150 transition-all w-full flex items-center justify-center h-12 mt-4 bg-blue text-white uppercase">
            {load ? <ThreeDots radius={5} color={"white"} /> : 'register'}
        </button>
    </form>;
};

export const $employer = ({ close }) => {
    // hooks
    const [data, setData] = useState({});
    const [visible, setVisible] = useState(false);
    const { register: $register } = useMyDispatch();
    const { load } = useSelector(state => state.auth);

    // methods
    const getData = ({ currentTarget: target }) => void setData(prev => ({ ...prev, [target.name]: target.value }));
    const handleSubmit = (e) => {
        e.preventDefault();
        $register({ data, url: '/employer/users/' });
    };

    return <form className="w-full py-8 flex flex-wrap gap-2 justify-between" onSubmit={handleSubmit}>
        <button className="mr-auto uppercase text-sm font-bold cursor-pointer text-blue w-full shrink-0 block text-left">go back</button>
        <div className="flex p-4 rounded relative w-[48%] h-12 border border-grey">
            <input name="first_name" value={data?.first_name || ''} onChange={getData} type="text" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="first name" required />
            <FaUserCircle />
        </div>
        <div className="flex p-4 rounded relative w-[48%] h-12 border border-grey">
            <input name="last_name" value={data?.last_name || ''} onChange={getData} type="text" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="last name" required />
            <FaUserCircle />
        </div>
        <div className="flex p-4 rounded relative w-full h-12 border border-grey">
            <input name="email" value={data?.email || ''} onChange={getData} type="text" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="email address" required />
            <AiFillMail />
        </div>
        <div className="flex p-4 rounded relative w-full h-12 border border-grey">
            <input onChange={getData} type={visible ? "text" : "password"} name="password" min="8" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="password" required />
            {
                visible ?
                    <AiFillEye className="cursor-pointer" onClick={_ => setVisible(v => !v)} /> :
                    <Hidden className="cursor-pointer" onClick={_ => setVisible(v => !v)} />
            }
        </div>
        <div className="flex p-4 rounded relative w-full h-12 border border-grey">
            <input onChange={getData} type={visible ? "text" : "password"} name="password" min="8" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="confirm password" required />
            {
                visible ?
                    <AiFillEye className="cursor-pointer" onClick={_ => setVisible(v => !v)} /> :
                    <Hidden className="cursor-pointer" onClick={_ => setVisible(v => !v)} />
            }
        </div>
        <button disabled={load} className="rounded cursor-pointer hover:brightness-150 transition-all w-full flex items-center justify-center h-12 mt-4 bg-blue text-white uppercase">
            {load ? <ThreeDots radius={5} color={"white"} /> : 'register'}
        </button>
    </form>;
};

export const $jobseeker = ({ close }) => {
    const [data, setData] = useState({});
    const [visible, setVisible] = useState(false);
    const { register: $register } = useMyDispatch();
    const { load } = useSelector(state => state.auth);

    // methods
    const getData = ({ currentTarget: target }) => void setData(prev => ({ ...prev, [target.name]: target.value }));
    const handleSubmit = (e) => {
        e.preventDefault();
        $register({ data, url: '/jobseeker/users/' });
    };

    return <form className="w-full py-8 flex flex-wrap gap-2 justify-between" onSubmit={handleSubmit}>
        <button className="mr-auto uppercase text-sm font-bold cursor-pointer text-blue w-full shrink-0 block text-left">go back</button>
        <div className="flex p-4 rounded relative w-[48%] h-12 border border-grey">
            <input name="first_name" value={data?.first_name || ''} onChange={getData} type="text" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="first name" required />
            <FaUserCircle />
        </div>
        <div className="flex p-4 rounded relative w-[48%] h-12 border border-grey">
            <input name="last_name" value={data?.last_name || ''} onChange={getData} type="text" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="last name" required />
            <FaUserCircle />
        </div>
        <div className="flex p-4 rounded relative w-full h-12 border border-grey">
            <input name="email" value={data?.email || ''} onChange={getData} type="text" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="email address" required />
            <AiFillMail />
        </div>
        <div className="flex p-4 rounded relative w-full h-12 border border-grey">
            <input onChange={getData} type={visible ? "text" : "password"} name="password" min="8" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="password" required />
            {
                visible ?
                    <AiFillEye className="cursor-pointer" onClick={_ => setVisible(v => !v)} /> :
                    <Hidden className="cursor-pointer" onClick={_ => setVisible(v => !v)} />
            }
        </div>
        <div className="flex p-4 rounded relative w-full h-12 border border-grey">
            <input onChange={getData} type={visible ? "text" : "password"} name="password" min="8" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="confirm password" required />
            {
                visible ?
                    <AiFillEye className="cursor-pointer" onClick={_ => setVisible(v => !v)} /> :
                    <Hidden className="cursor-pointer" onClick={_ => setVisible(v => !v)} />
            }
        </div>
        <button disabled={load} className="rounded cursor-pointer hover:brightness-150 transition-all w-full flex items-center justify-center h-12 mt-4 bg-blue text-white uppercase">
            {load ? <ThreeDots radius={5} color={"white"} /> : 'register'}
        </button>
    </form>;
};