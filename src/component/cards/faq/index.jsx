import { Markup } from 'interweave';
import { AiOutlinePlus } from 'react-icons/ai';
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

    return <div ref={ele} className="overflow-hidden transition-all w-[clamp(20em,70vw,60em)] flex flex-col items-center justify-start p-4 bg-white" style={{ height: `${open ? height : 70}px` }}>
        <div className="flex items-center justify-between w-full py-2 relative before:w-sfull before:h-1 before:bg-grey">
            <h3 className="capitalize mr-auto font-bold">{item?.question}</h3>
            <AiOutlinePlus className="cursor-pointer text-xl transition-all" onClick={toggleInfo} style={{ transform: `rotate(${open ? -405 : 0}deg)` }} />
        </div>
        <div className="mt-2">
            {item?.answer ? <Markup content={item?.answer} /> : null}
        </div>
    </div>;
};

export default Faq;
