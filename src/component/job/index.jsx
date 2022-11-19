/* eslint-disable react-hooks/exhaustive-deps */
import { Job } from '../cards';
import Boundary from '../boundary';
import { useApi } from '../../hooks';
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
            ({ title: t, location: l }) => l?.toLowerCase().includes(location?.toLowerCase()) || t?.toLowerCase().includes(title?.toLowerCase()) || false)
        );
    }, [title, location, data]);

    // methods
    const handleClick = () => { Title(() => ""); Location(() => ""); };

    return <section>
        <div className="w-full flex items-center justify-between p-8">
            <h2 className="capitalize font-bold text-xl">
                {(title || location) ? 'search results' : 'recent jobs'}
            </h2>
            {(title || location) ? <FaWindowClose onClick={handleClick} className="cursor-pointer" /> : null}
        </div>
        <div className="flex flex-col gap-8 items-center justify-start w-full p-14">
            <Boundary error={error} load={load}>
                {result?.map(item => <Job key={item?.id} {...item} />) || <p >There are no jobs </p>}
                <Job />
            </Boundary>
        </div>
    </section>;
};

export default JobSection;
