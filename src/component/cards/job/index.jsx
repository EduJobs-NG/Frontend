import { useEffect } from 'react';
import { Markup } from 'interweave';
import { useState, useRef } from 'react';

const Job = (item) => {
    const ele = useRef(null);
    const [more, setMore] = useState(false);
    const [height, setHeight] = useState(12);

    // effects
    useEffect(() => {
        setHeight(prev => ele.current?.scrollHeight || prev);
    },[]);

    // methods
    const toggleMore = () => setMore(prev => !prev);

    console.table(item);
    return <div key={item.id} className="flex flex-col border border-gray-600 rounded-md p-4 w-full gap-8">
        <div className="flex items-start justify-between">
            <div className="flex flex-col items-start justify-center">
                <h3 className="font-bold capitalize">{item?.title}</h3>
            </div>
        </div>
        <div ref={ele} className="flex flex-col items-start gap-4 overflow-hidden transition-all" style={{ height: `${more ? height : 12}px` }}>
            <p className="transition-all overflow-hidden">{item?.summary}</p>
            {item?.requirements ? <Markup content={item.requirements} /> : null}
            <div className="transition-all flex items-center justify-center overflow-hidden bg-red">
                <button className="flex items-center justify-center mx-auto text-white bg-blue font-bold uppercase py-2 px-24 rounded-md">
                    apply
                </button>
            </div>
        </div>
        <div className="flex items-center justify-between w-full">
            <span className="">{item?.posted_time} ago</span>
            <button className="border-none capitalize text-blue" onClick={toggleMore}>read {more ? 'less' : 'more'}</button>
        </div>
    </div>;
};

export default Job;
