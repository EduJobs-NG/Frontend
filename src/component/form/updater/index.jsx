import { useState } from 'react';
import { api } from '../../../utils';
import { toast } from 'react-toastify';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import { ThreeDots } from 'react-loader-spinner';

const Updater = ({ close, object: d }) => {
  // states
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);

  // methods
  const setInfo = ({ currentTarget: ele }) => void setData(prev => ({ ...prev, [ele.name]: ele.value || "" }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data, d?.endpoint);
    setLoad(() => true);
    await api.post(d?.endpoint, data)
      .then(data => {
        console.log(data);
        toast.success(`${d?.name} updated successfully`);
      })
      .catch(err => {
        console.error(err);
        toast.error('something went wrong, please check your inputs and try again');
      });
    setLoad(() => false);
  };

  return createPortal(<form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-8 rounded-lg relative w-[clamp(20em,30vw,50em)]">
    <IoMdClose className="absolute top-4 right-4 cursor-pointer text-xl" onClick={() => close?.(_ => "")} />
    <div className="flex items-center justify center gap-4 relative">
      <h3 className="text-2xl capitalize font-bold">change {d?.name} {d?.name === 'email' ? 'address' : null}</h3>
    </div>
    <div className="flex flex-col gap-2 w-full">
      {d?.inputs?.map((obj, key) => (
        <div key={key} className="flex p-4 rounded relative w-full h-12 border border-grey">
          <input required onChange={setInfo} type={obj?.type} name={obj?.name} className="w-full outline-none mr-8 border-none placeholder:capitalize" placeholder={obj?.placeholder} />
          <obj.icon />
        </div>
      ))}
      <button disabled={load} className="rounded cursor-pointer hover:brightness-150 disabled:bg-grey transition-all w-full flex items-center justify-center h-12 mt-4 bg-blue text-white uppercase">
        {load ? <ThreeDots radius={5} color={"white"} /> : (d?.name === 'password' ? 'update ' : 'save ') + d?.name}
      </button>
    </div>
  </form>, document.querySelector("#portal"));
};

export default Updater;
