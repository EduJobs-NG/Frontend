import { FaWindowClose } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const Faq = (item) => {
    // refs
    const ele = useRef(null);

    // states
    const [height, setHeight] = useState(0);
    const [open, setOpen] = useState(false);

    // effects
    useEffect(() => {
        setHeight(_ => ele.current?.scrollHeight || 0);
    }, []);

    // methods
    const toggleInfo = () => setOpen(val => !val);

    return <div ref={ele} key={item?.key} className="overflow-hidden transition-all w-full flex flex-col items-center justify-start p-4 bg-white" style={{ height: `${open ? height : 70}px` }}>
        <div className="flex items-center justify-between w-full py-2 relative before:w-sfull before:h-1 before:bg-grey">
            <h3 className="capitalize mr-auto font-bold">{item?.question}</h3>
            <FaWindowClose className="cursor-pointer text-xl" onClick={toggleInfo} />
        </div>
        <p className='mt-2'>{item?.answer}</p>
    </div>;
};

export default Faq;
