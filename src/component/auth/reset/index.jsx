
import { useState } from 'react';
import { api } from '../../../utils';
import { toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';
import password from '../../../assets/password.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible as Hidden } from 'react-icons/ai';

export const Reset = () => {
  // states
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState({ new_password: false, re_new_password: false });

  // hooks
  const nav = useNavigate();
  const { uid, token } = useParams();

  // methods
  const togglePass = ({ currentTarget: t }) => setVisible(prev => ({ ...prev, [t.name]: !prev[t.name] }))
  const getData = ({ currentTarget: t }) => setData(prev => ({ ...prev, [t.name]: t.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data?.new_password !== data?.re_new_password) return toast.error('passwords did not match');
    setLoad(() => true);
    await api.post('jobseeker/users/reset_password_confirm/', { ...data, uid, token })
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

  return <section className='flex items-center justify-center py-20'>
      <form onSubmit={handleSubmit} className='w-[clamp(20em,30vw,60em)] m-auto flex flex-col justify-center items-center text-center'>
        <div className='w-full'>
          <div className='flex justify-center' >
            <img src={password} className=' ' alt="" />
          </div>

          <h1 className='text-black font-bold text-2xl capitalize'>change password</h1>
          <p className='my-4 leading-[1em]'>
            Create a new Password with at least 8 characters and must include an uppercase letter and a number.
          </p>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex p-4 rounded relative w-full h-12 border border-grey">
              <input onChange={getData} type={visible.new_password ? "text" : "password"} name="new_password" min="8" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="password" required />
              {
                visible.new_password ?
                  <AiFillEye className="cursor-pointer" name='new_password' onClick={togglePass} /> :
                  <Hidden className="cursor-pointer" name='new_password' onClick={togglePass} />
              }
            </div>
            <div className="flex p-4 rounded relative w-full h-12 border border-grey">
              <input onChange={getData} type={visible.re_new_password ? "text" : "password"} name="re_new_password" min="8" className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder="confirm password" required />
              {
                visible.re_new_password ?
                  <AiFillEye className="cursor-pointer" name='re_new_password' onClick={togglePass} /> :
                  <Hidden className="cursor-pointer" name='re_new_password' onClick={togglePass} />
              }
            </div>
            <button disabled={load} className="rounded cursor-pointer hover:brightness-150 disabled:bg-grey transition-all w-full flex items-center justify-center h-12 mt-4 bg-blue text-white uppercase">
              {load ? <ThreeDots radius={5} color={"white"} /> : 'update password'}
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
    </section>;
};

export default Reset;
