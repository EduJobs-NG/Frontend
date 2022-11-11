import { useState, useEffect, useRef } from 'react';

const Faq = (item) => {
    // refs
    const ele = useRef(null);

    // states
    const [open, setOpen] = useState(false);

    // effects
    useEffect(() => {

    }, []);

    return <div ref={ele} key={item.key} className="w-full flex flex-col items-center justify-center px-4 py-8 bg-white">
        <div className="flex items-center justify-between py-4 relative before:w-sfull before:h-1 before:bg-grey"></div>
    </div>;
};

export default Faq;
