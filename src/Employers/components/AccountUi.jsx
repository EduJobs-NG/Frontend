import Update from './updater';
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import Auth from '../../context/AuthContext';
import { AiFillMail, AiFillEye } from 'react-icons/ai';

const modelInput = {
  email: {
    name: 'email',
    endpoint: 'employer/account/individual-employer/set_email/',
    inputs: [
      { placeholder: 'new email address', type: 'email', name: 'new_email', icon: AiFillMail },
      { placeholder: 'enter password', type: 'password', name: 'current_password', icon: AiFillEye },
    ]
  },
  password: {
    name: 'password',
    endpoint: 'employer/account/individual-employer/set_password/',
    inputs: [
      { placeholder: 'current password', type: 'password', name: 'current_password', icon: AiFillEye },
      { placeholder: 'new password', type: 'password', name: 'new_password', icon: AiFillEye },
      { placeholder: 'confirm new password', type: 'password', name: 're_new_password', icon: AiFillEye },
    ]
  }
};

const Account = () => {
  // state
  const [show, setShow] = useState(false);

  // user store
  const { user } = useContext(Auth);

  useEffect(() => {
    console.log(user);
  }, [])

  // methods
  const getShow = ({ currentTarget: target }) => {
    setShow(() => modelInput[target.name]);
  }

  return <section className="w-screen flex flex-col my-8">
    {show && <Update close={setShow} object={show} />}
    <div className="w-full flex relative items-center justify-center p-14">
      <span className="absolute top-4 left-4 capitalize font-bold text-2xl">profile</span>
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={user?.avatar}  className="rounded-full w-24 h-24 bg-gray-200 outline-none" alt="avatar" />
        <h2 className="font-bold capitalize">{`${user?.user?.first_name || ''} ${user?.middle_name || ''} ${user?.user?.last_name || ''}`}</h2>
      </div>
    </div>
    <div className="flex flex-col gap-4 w-full">
      <div className="grid max_sm:grid-rows-3 grid-cols-1 sm:grid-cols-3 flex-wrap w-full px-4 md:px-8 pb-1 lg:flex-row flex-col items-center justify-between relative before:absolute before:bottom-0 py-4 before:opacity-40 before:w-full before:h-[1px] before:bg-grey">
        <h3 className="max_sm:text-center capitalize">full name</h3>
        <input type="text" className="text-center capitalize pointer-events-none outline-none" readOnly={true} name="name" value={`${user?.user?.first_name || ''} ${user?.middle_name || ''} ${user?.user?.last_name || ''}`} />
        <button onClick={null} className="text-blue flex gap-2 justify-center sm:justify-end">
          <b className="capitalize font-thin ">edit</b>
          <b className="hidden sm:flex">&gt;</b>
        </button>
      </div>
      <div className="grid max_sm:grid-rows-3 grid-cols-1 sm:grid-cols-3 flex-wrap w-full px-4 md:px-8 pb-1 items-center justify-between relative before:absolute before:bottom-0 py-4 before:opacity-40 before:w-full before:h-[1px] before:bg-grey">
        <h3 className="max_sm:text-center ">email</h3>
        <input type="text" className="text-center pointer-events-none outline-none" readOnly={true} name="name" value={user?.user?.email} />
        <button name="email" onClick={getShow} className="text-blue flex gap-2 justify-center sm:justify-end">
          <b className="capitalize font-thin ">change email address</b>
          <b className="hidden sm:flex">&gt;</b>
        </button>
      </div>
      <div className="grid max_sm:grid-rows-3 grid-cols-1 sm:grid-cols-3 flex-wrap w-full px-4 md:px-8 pb-1 items-center justify-between relative before:absolute before:bottom-0 py-4 before:opacity-40 before:w-full before:h-[1px] before:bg-grey">
        <h3 className="max_sm:text-center capitalize">password</h3>
        <input type="password" className="text-center capitalize pointer-events-none outline-none" readOnly={true} name="name" value="muhammad inuwa" />
        <button name="password" onClick={getShow} className="text-blue flex gap-2 justify-center sm:justify-end">
          <b className="capitalize font-thin ">change password</b>
          <b className="hidden sm:flex">&gt;</b>
        </button>
      </div>
      <div className="grid max_sm:grid-rows-3 grid-cols-1 sm:grid-cols-3 flex-wrap w-full px-4 md:px-8 pb-1 items-center justify-between relative before:absolute before:bottom-0 py-4 before:opacity-40 before:w-full before:h-[1px] before:bg-grey">
        <h3 className="max_sm:text-center capitalize">billing plan and information</h3>
        <input type="text" className="text-center capitalize pointer-events-none outline-none" readOnly={true} name="name" value="basic plan" />
        <button onClick={null} className="text-blue flex gap-2 justify-center sm:justify-end">
          <b className="capitalize font-thin ">edit plan</b>
          <b className="hidden sm:flex">&gt;</b>
        </button>
      </div>
    </div>
  </section>;
};

export default Account;
