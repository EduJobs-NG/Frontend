import { useState } from "react";
import { Jobslists } from './JobsLists';
import { FaSearch } from 'react-icons/fa';

export const Jobs = () => {
  const [title, setTitle] = useState("");
  const [active, setActive] = useState(0);
  const [url, setUrl] = useState("/employer/jobs/open/");

  // methods
  const handleSearch = ({ currentTarget: t }) => setTitle(() => t.value);
  const setStyle = (id) => id === active ? 'bg-blue text-white' : 'bg-white text-blue';
  const getActive = ({ currentTarget: t }) => {
    setTitle(() => "");
    setActive(() => Number(t.id));
    setUrl(() => `/employer/jobs/${Number(t.id) === active ? 'open' : 'closed'}/`);
  };

  return <section className="w-screen p-12">
    <div className="w-full flex flex-col gap-8 items-center justify-center">
      <div className="flex rounded-lg overflow-hidden font-bold text-sm">
        <button onClick={getActive} id={0} className={`transition-all capitalize flex items-center justify-center py-3 p-8 ${setStyle(0)}`}>open jobs</button>
        <button onClick={getActive} id={1} className={`transition-all capitalize flex items-center justify-center py-3 p-8 ${setStyle(1)}`}>closed jobs</button>
      </div>
      <div className="flex item-center justify-start p-2 w-full">
        <div className="relative rounded-3xl bg-white h-10 w-96 overflow-hidden mr-auto">
          <input onChange={handleSearch} value={title} type="text" name="title" placeholder="search job titles" className="w-full h-full px-4 placeholder:capitalize outline-none border-none" />
          <FaSearch className="absolute right-4 top-5 -translate-y-1/2 cursor-pointer" color="blue" />
        </div>
      </div>
      <Jobslists url={url} title={title} />
    </div>
  </section >;
};
