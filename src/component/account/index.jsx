import { } from '../../hooks';
import { useState } from 'react';
import { Update } from '../form';
import { useSelector } from 'react-redux';
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
  const { user } = useSelector(state => state.auth);

  // methods
  const getShow = ({ currentTarget: target }) => {
    setShow(() => modelInput[target.name]);
  }

  return <section className="w-screen flex flex-col my-8">
    {show && <Update close={setShow} object={show} />}
    <div className="w-full flex relative items-center justify-center p-14">
      <span className="absolute top-4 left-4 capitalize font-bold text-2xl">profile</span>
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={user?.avatar} alt="" className="rounded-full w-24 h-24 bg-gray-200 outline-none" />
        <h2 className="font-bold capitalize">{user?.fullname}</h2>
      </div>
    </div>
    <div className="flex flex-col gap-4 w-full">
      <div className="flex w-full px-4 pb-1 items-center justify-center relative before:absolute before:bottom-0 py-4 before:opacity-40 before:w-full before:h-[1px] before:bg-grey">
        <h3 className="w-[max(16em,20%)] mr-auto capitalize">full name</h3>
        <input type="text" className="text-left capitalize pointer-events-none outline-none" readOnly={true} name="name" value={user?.fullname} />
        <button onClick={null} className="w-[max(16em,20%)] ml-auto text-blue flex gap-2 justify-end">
          <b className="capitalize font-thin ">edit</b>
          <b className="">&gt;</b>
        </button>
      </div>
      <div className="flex w-full px-4 pb-1 items-center justify-center relative before:absolute before:bottom-0 py-4 before:opacity-40 before:w-full before:h-[1px] before:bg-grey">
        <h3 className="w-[max(16em,20%)] mr-auto ">email</h3>
        <input type="text" className="text-left capitalize pointer-events-none outline-none" readOnly={true} name="name" value={user?.email} />
        <button name="email" onClick={getShow} className="w-[max(16em,20%)] ml-auto text-blue flex gap-2 justify-end">
          <b className="capitalize font-thin ">change email address</b>
          <b className="">&gt;</b>
        </button>
      </div>
      <div className="flex w-full px-4 pb-1 items-center justify-center relative before:absolute before:bottom-0 py-4 before:opacity-40 before:w-full before:h-[1px] before:bg-grey">
        <h3 className="w-[max(16em,20%)] mr-auto capitalize">password</h3>
        <input type="password" className="text-left capitalize pointer-events-none outline-none" readOnly={true} name="name" value="muhammad inuwa" />
        <button name="password" onClick={getShow} className="w-[max(16em,20%)] ml-auto text-blue flex gap-2 justify-end">
          <b className="capitalize font-thin ">change password</b>
          <b className="">&gt;</b>
        </button>
      </div>
      <div className="flex w-full px-4 pb-1 items-center justify-center relative before:absolute before:bottom-0 py-4 before:opacity-40 before:w-full before:h-[1px] before:bg-grey">
        <h3 className="w-[max(16em,20%)] mr-auto capitalize">billing plan and information</h3>
        <input type="text" className="text-left capitalize pointer-events-none outline-none" readOnly={true} name="name" value="basic plan" />
        <button onClick={null} className="w-[max(16em,20%)] ml-auto text-blue flex gap-2 justify-end">
          <b className="capitalize font-thin ">edit plan</b>
          <b className="">&gt;</b>
        </button>
      </div>
    </div>
  </section>;
};

export default Account;
