import { useState } from "react";
import { toast } from 'react-toastify';

export const SearchJobs = () => {
  // states hooks
  const [title, setTitle] = useState('');
  // const [result, setResult] = useState([]);
  const [location, setLocation] = useState('');

  // methods
  const handleTitle = (e) => void setTitle(p => e.target.value);
  const handleLocation = (e) => void setLocation(p => e.target.value);
  const handleClick = () => {
    if (title && location) toast.success(`success ${title} - ${location}`);
    else toast.error(
      !title && !location ?
        'provide a title and location for the job' : !title ?
          'title parameter cannot be empty' : 'enter a location'
    );
  };

  return (
    <form
      className="z-10 w-full flex flex-wrap ites-center justify-center gap-4 p-6 w-[70%]"
    >
      <div className="relative flex grow-2 shrink-0 basis-[18em] p-2 bg-white rounded gap-4">
        <label
          htmlFor="title"
          className='relative text-blue capitalize font-bold pr-2 before:absolute before:h-full before:w-[.05em] before:bg-blue before:right-0'>job title</label>
        <input
          type="search" name="title" value={title} placeholder='search keywords'
          required onChange={handleTitle} className='outline-none text-black placeholder:capitalize'
        />
      </div>
      <div className="relative flex grow-2 shrink-0 basis-[18em] p-2 bg-white rounded gap-4">
        <label
          htmlFor="location"
          className='relative text-blue capitalize font-bold pr-2 before:absolute before:h-full before:w-[.05em] before:bg-blue before:right-0'>location</label>
        <input
          type="search" name="location" value={location} placeholder='search keywords'
          required onChange={handleLocation} className='outline-none text-black placeholder:capitalize'
        />
      </div>
      <div
        onClick={handleClick}
        className="flex grow-2 shrink-0 basis-[18em] md:basis-[12em] p-2 bg-white rounded cursor-pointer text-blue hover:bg-transparent hover:border-white border-2 hover:text-white transition-all transition-500"
      >
        <span className="font-bold uppercase w-full h-full flex items-center justify-center ">search jobs</span>
      </div>
    </form>
  );
};
