import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';
import login from '../../../assets/login.svg';
import { useMyDispatch } from '../../../store';
import { ThreeDots } from 'react-loader-spinner';
import { AiFillMail, AiFillEye, AiFillEyeInvisible as Hidden } from 'react-icons/ai';

const Login = ({ close, hideBtn = false }) => {
    // hooks
    const { login: $login } = useMyDispatch();
    const { load } = useSelector(state => state.auth);

    // states
    const [data, setData] = useState({});
    const [visible, setVisible] = useState(false);

    // methods
    const getData = ({ currentTarget: target }) => setData(prev => ({ ...prev, [target.name]: target.value }));
    const handleSubmit = async (e) => {
        e.preventDefault();
        $login(data);
    };

    return <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-8 rounded-lg relative w-[clamp(20em,30vw,50em)]"
    >
        <div className="flex w-full items-center justify-center">
            {hideBtn ? null : <IoMdClose className="absolute top-4 right-4 cursor-pointer text-xl" onClick={close} />}
            <h2 className="uppercase font-black text-blue text-2xl flex gap-2 items-center">
                <img src={login} alt="" />
                <i className="h-8 w-1 bg-blue inline-block" />
                <span>login</span>
            </h2>
        </div>
        <div className="flex flex-col gap-4 w-full">
            <div className="flex p-4 rounded relative w-full h-12 border border-grey">
                <input onChange={getData} type="email" name="email" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="email address" required />
                <AiFillMail />
            </div>
            <div className="flex p-4 rounded relative w-full h-12 border border-grey">
                <input onChange={getData} type={visible ? "text" : "password"} name="password" min="8" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="email address" required />
                {
                    visible ?
                        <AiFillEye className="cursor-pointer" onClick={_ => setVisible(v => !v)} /> :
                        <Hidden className="cursor-pointer" onClick={_ => setVisible(v => !v)} />
                }
            </div>
            <button disabled={load} className="rounded cursor-pointer hover:brightness-150 disabled:bg-grey transition-all w-full flex items-center justify-center h-12 mt-4 bg-blue text-white uppercase">
                {load ? <ThreeDots radius={5} color={"white"} /> : 'login'}
            </button>
            <span className="mt-4 flex items-center justify-between text-[12px]">
                <Link to='/' className="text-sm text-blue capitalize">forgot password</Link>
                <span className="leading-[1em]">Don't have an account? <Link to='/auth/register' className='text-blue font-bold capitalize'>sign up</Link></span>
            </span>
        </div>
    </form>;
};

export const LoginPortal = ({ close }) => createPortal(<Login close={close} />, document.querySelector("#portal"));

export default Login;
