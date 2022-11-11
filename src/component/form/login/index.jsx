import { useState } from 'react';
import { toast } from 'react-toastify';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import { api, token } from '../../../utils';
import login from '../../../assets/login.svg';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillMail, AiFillEye, AiFillEyeInvisible as Hidden } from 'react-icons/ai';

const Login = ({ close }) => {
    // hooks
    const nav = useNavigate();

    // states
    const [email, setEmail] = useState("");
    const [load, setLoad] = useState(false);
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    // methods
    const getEmail = ({ target }) => setEmail(_ => target?.value || "");
    const getPassword = ({ target }) => setPassword(_ => target?.value || "");
    const endAll = () => { close(); nav("/") };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoad(true);
        await api.post('/auth/token/login/', { email, password })
            .then(res => {
                setLoad(false);
                token.key = res.data;
                toast.success("logged in successfully", { onClick: endAll, onClose: endAll });
            })
            .catch(err => {
                setLoad(false);
                toast.error("Invalid credentials");
            });
    };

    return <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-8 rounded-lg relative w-[clamp(20em,30vw,50em)]"
    >
        <div className="flex w-full items-center justify-center">
            <IoMdClose className="absolute top-4 right-4 cursor-pointer text-xl" onClick={close} />
            <h2 className="uppercase font-black text-blue text-2xl flex gap-2 items-center">
                <img src={login} alt="" />
                <i className="h-8 w-1 bg-blue inline-block" />
                <span>login</span>
            </h2>
        </div>
        <div className="flex flex-col gap-4 w-full">
            <div className="flex p-4 rounded relative w-full h-12 border border-grey">
                <input onChange={getEmail} type="text" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="email address" required />
                <AiFillMail />
            </div>
            <div className="flex p-4 rounded relative w-full h-12 border border-grey">
                <input onChange={getPassword} type={visible ? "text" : "password"} min="8" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="email address" required />
                {
                    visible ?
                        <AiFillEye className="cursor-pointer" onClick={_ => setVisible(v => !v)} /> :
                        <Hidden className="cursor-pointer" onClick={_ => setVisible(v => !v)} />
                }
            </div>
            <button className="rounded cursor-pointer hover:brightness-150 transition-all w-full flex items-center justify-center h-12 mt-4 bg-blue text-white uppercase">
                {load ? <ThreeDots radius={5} color={"white"} /> : 'login'}
            </button>
            <span className="-mt-4 flex items-center justify-between text-sm">
                <Link to='/' className="text-sm">forgot password</Link>
                <span>Don't have an account? <Link to='/'>sign up</Link></span>
            </span>
        </div>
    </form>;
};

export const LoginPortal = ({ close }) => createPortal(<Login close={close} />, document.querySelector("#portal"));

export default Login;
