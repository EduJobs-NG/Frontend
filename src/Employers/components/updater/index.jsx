import api from '../../../utils/axios';
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from 'react-loader-spinner';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from "react-toastify";

const Updater = ({ close, object: d }) => {
  // states
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);
  const [toggle, setToggler] = useState({});

  // effects
  useEffect(() => {
    setToggler(prev => {
      let obj = {};
      for (let i of d?.inputs) {
        if (i.type?.includes('password')) obj[i.name] = false;
      };
      // console.log(obj);
      return obj;
    })
  }, []);

  // methods
  const setInfo = ({ currentTarget: ele }) => void setData(prev => ({ ...prev, [ele.name]: ele.value || "" }));
  const toggleIcon = (name) => {
    // console.log(name);
    if (toggle[name] !== undefined) setToggler(prev => ({ ...prev, [name]: !toggle[name] }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(() => true);
    await api.post(d?.endpoint, data)
      .then(() => {
        toast.success(`${d?.name} updated successfully`);
      })
      .catch(err => {
        console.error(err);
        toast.error('something went wrong, please check your inputs and try again');
      });
    setLoad(() => false);
  };

  return createPortal(<form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-8 rounded-lg relative w-[clamp(20em,30vw,50em)]">
    <ToastContainer />
    <IoMdClose className="absolute top-4 right-4 cursor-pointer text-xl" onClick={() => close?.(_ => "")} />
    <div className="flex items-center justify center gap-4 relative">
      <h3 className="text-2xl capitalize font-bold">change {d?.name} {d?.name === 'email' ? 'address' : null}</h3>
    </div>
    <div className="flex flex-col gap-2 w-full">
      {d?.inputs?.map((obj, key) => (
        <div key={key} className="flex p-4 rounded relative w-full h-12 border border-grey">
          <input required onChange={setInfo} type={toggle[obj.name] ? 'text' : obj?.type} name={obj?.name} className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder={obj?.placeholder} />
          {toggle[obj.name] ? <AiFillEyeInvisible onClick={() => toggleIcon(obj?.name)} /> : <obj.icon onClick={() => toggleIcon(obj?.name)} />}
        </div>
      ))}
      <button disabled={load} className="rounded cursor-pointer hover:brightness-150 disabled:bg-grey transition-all w-full flex items-center justify-center h-12 mt-4 bg-blue text-white uppercase">
        {load ? <ThreeDots radius={5} color={"white"} /> : (d?.name === 'password' ? 'update ' : 'save ') + d?.name}
      </button>
    </div>
  </form>, document.querySelector("#portal"));
};

export default Updater;
