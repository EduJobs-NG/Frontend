import { useEffect, useState } from 'react';

const SearchJob = ({ Title, Location, t, l, style = {} }) => {
    // states
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");

    // effects
    useEffect(() => {
        if (!t) setTitle(_ => "");
        if (!l) setLocation(_ => "");
    }, [t, l]);

    // methods
    const getTitle = (e) => void setTitle(_ => e?.target?.value || "");
    const getLocation = (e) => void setLocation(_ => e?.target?.value || "");
    const handleSubmit = (e) => {
        e.preventDefault();
        Title && Title(_ => title);
        Location && Location(_ => location);
    };

    return <form className="w-full flex flex-wrap gap-4 items-center justify-center my-8" onSubmit={handleSubmit} style={style}>
        <div className="relative flex grow-2 shrink-0 basis-[18em] p-2 bg-white rounded gap-4 shadow-md">
            <label
                htmlFor="title"
                children='job title'
                className='relative text-blue capitalize font-bold pr-2 whitespace-nowrap
                before:absolute before:h-full before:w-[.05em] before:bg-blue before:right-0'
            />
            <input
                name="title"
                type="search"
                value={title}
                onChange={getTitle}
                placeholder='search keywords'
                className='outline-none text-black placeholder:capitalize'
            />
        </div>
        <div className="relative flex grow-2 shrink-0 basis-[18em] p-2 bg-white rounded gap-4 shadow-md">
            <label
                htmlFor="title"
                children='location'
                className='relative text-blue capitalize font-bold pr-2 
                before:absolute before:h-full before:w-[.05em] before:bg-blue before:right-0'
            />
            <input
                type="search"
                name="location"
                value={location}
                onChange={getLocation}
                placeholder='search keywords'
                className='outline-none text-black placeholder:capitalize'
            />
        </div>
        <div
            className="flex grow-2 shrink-0 basis-[18em] md:basis-[12em] p-2 shadow-md bg-white rounded cursor-pointer text-blue hover:bg-transparent hover:border-white border-2 hover:text-white transition-all transition-500"
        >
            <button type='submit' className="font-bold uppercase w-full h-full flex items-center justify-center ">
                search jobs
            </button>
        </div>
    </form>;
};

export default SearchJob;
