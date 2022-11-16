import { useState } from 'react';
import { toast } from 'react-toastify';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import { api, token } from '../../../utils';
import { AiFillMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

const Forgot = ({ close, hideBtn = false }) => {
    // hooks
    const nav = useNavigate();

    // states
    const [email, setEmail] = useState("");
    const [load, setLoad] = useState(false);

    // methods
    /**
     * "If the user is logged in, log them out, then close the window and navigate to the home page."
     * 
     * The first thing we do is check if the user is logged in. If they are, we call the logout
     * function
     */
    const endAll = () => { close(); nav("/") };
    /**
     * `getEmail` is a function that takes an object with a `target` property, and returns a function
     * that sets the `email` state to the value of the `target` property, or an empty string if the
     * `target` property is undefined
     */
    const getEmail = ({ target }) => setEmail(_ => target?.value || "");
    /* A function that is called when the form is submitted. */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoad(true);
        await api.post('/auth/token/login/', { email })
            .then(res => {
                setLoad(false);
                token.key = res.data;
                toast.success("logged in successfully", { onClick: endAll, onClose: endAll });
            })
            .catch(() => {
                setLoad(false);
                toast.error("Invalid credentials");
            });
    };

    return <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-8 rounded-lg relative w-[clamp(20em,30vw,50em)]"
    >
        <div className="flex w-full items-center justify-center">
            {hideBtn ? null : <IoMdClose className="absolute top-4 right-4 cursor-pointer text-xl" onClick={close} />}
            <h2 className="uppercase font-black text-blue text-2xl flex gap-2 items-center">
                <span>forgot password</span>
            </h2>
        </div>
        <div className="flex flex-col gap-4 w-full">
            <div className="flex p-4 rounded relative w-full h-12 border border-grey">
                <input onChange={getEmail} type="text" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="email address" required />
                <AiFillMail />
            </div>
            <button className="rounded cursor-pointer hover:brightness-150 transition-all w-full flex items-center justify-center h-12 mt-4 bg-blue text-white uppercase">
                {load ? <ThreeDots radius={5} color={"white"} /> : 'send otp'}
            </button>
        </div>
    </form>;
};

export const ForgotPortal = ({ close }) => createPortal(<Forgot close={close} />, document.querySelector("#portal"));

export default Forgot;
