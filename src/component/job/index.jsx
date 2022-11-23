/* eslint-disable react-hooks/exhaustive-deps */
import { Job } from '../cards';
import Boundary from '../boundary';
import { useSelector } from 'react-redux';
import { useMyDispatch } from '../../store';
import { useEffect, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';

const JobSection = ({ title = "", location = "", Title, Location }) => {
    // hooks
    const { jobs: $jobs } = useMyDispatch();
    const [result, setResult] = useState([]);
    const { data, error, load } = useSelector(state => state.jobs);

    // effects
    useEffect(() => { if (!data.length) $jobs(); }, []);
    useEffect(() => {
        setResult(() => data?.results?.filter(
            ({ title: t, location: l }) => {
                if(title.length && location.length) {
                    return t?.toLowerCase()?.includes(title.toLowerCase()) ||
                        l?.toLowerCase()?.includes(location.toLowerCase());
                } else if (title.length) return t?.toLowerCase()?.includes(title.toLowerCase());
                else if (location.length) return l?.toLowerCase()?.includes(location.toLowerCase());
                else if (!title.length && !location.length) return true;
                else return false;
            })
        );
    }, [title, location, data]);

    // methods
    const handleClick = () => { Title(() => ""); Location(() => ""); };
    const handleNext = () => $jobs(data?.next);
    const handlePrev = () => $jobs(data?.previous);

    return <section>
        <div className="w-full flex items-center justify-between p-8">
            <h2 className="capitalize font-bold text-xl">
                {(title || location) ? 'search results' : 'recent jobs'}
            </h2>
            {(title || location) ? <FaWindowClose onClick={handleClick} className="cursor-pointer" /> : null}
        </div>
        <div className="flex flex-col gap-8 items-center justify-start w-full p-14">
            <Boundary error={error} load={load}>
                {result?.length ? result?.map(item => <Job key={item?.id} {...item} />) : <p className="text-3xl text-center font-bold text-blue">There are no jobs </p>}
                {data?.previous && <button onClick={handlePrev} className="text-white bg-blue flex item-center justify-center p-4 py-1 rounded uppercase">
                    prev
                </button>}
                {data?.next && <button onClick={handleNext} className="text-white bg-blue flex item-center justify-center p-4 py-1 rounded uppercase">
                    next
                </button>}
            </Boundary>
        </div>
    </section>;
};

export default JobSection;
