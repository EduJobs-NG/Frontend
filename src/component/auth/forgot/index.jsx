import { useState } from 'react';
import { api } from '../../../utils';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillMail } from 'react-icons/ai';
import { ThreeDots } from 'react-loader-spinner';
import password from '../../../assets/password.png';
import { toast } from 'react-toastify';

export const Forgot = () => {
  // states
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false);

  // hooks
  const nav = useNavigate();

  // methods
  const getEmail = ({ currentTarget: t }) => setEmail(prev => t.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(() => true);
    await api.post('jobseeker/users/reset_password/', { email })
      .then(data => {
        console.log(data);
        toast.success('you have successfully reset your password', {
          onClick: () => nav('/auth/verify'), onClose: () => nav('/auth/verify'),
        });
      })
      .catch(err => {
        console.error(err);
        toast.error('something wnet wrong, try again');
      })
    setLoad(() => false);
  };

  return (
    <section className='flex items-center justify-center py-20'>
      <form onSubmit={handleSubmit} className='w-[clamp(20em,30vw,60em)] m-auto flex flex-col justify-center items-center text-center'>
        <div className='w-full'>
          <div className='flex justify-center' >
            <img src={password} className=' ' alt="" />
          </div>

          <h1 className='text-black font-bold text-2xl capitalize'>forgot password</h1>
          <p className='my-4 leading-[1em]'>
            Kindly enter your registered email addess below and a resent link will be sent.
          </p>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex p-4 rounded relative w-full h-12 border border-grey">
              <input value={email} onChange={getEmail} type="email" name="email" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="email address" required />
              <AiFillMail />
            </div>
            <button disabled={load} className="rounded cursor-pointer hover:brightness-150 disabled:bg-grey transition-all w-full flex items-center justify-center h-12 mt-4 bg-blue text-white uppercase">
              {load ? <ThreeDots radius={5} color={"white"} /> : 'sned link'}
            </button>
          </div>

          <p className='mt-[2rem]'>
            <Link className='text-blue ' to="/auth/resend">Resend Link</Link>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-blue uppercase font-black text-3xl">edujobs</h3>
          <span className="capitalize font-thinbold text-sm">all rights reserved</span>
        </div>
      </form>
    </section>
  )
};

export default Forgot;
