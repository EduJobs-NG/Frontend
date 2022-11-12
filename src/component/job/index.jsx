/* eslint-disable react-hooks/exhaustive-deps */
import { Job } from '../cards';
import Boundary from '../boundary';
import { useApi } from '../../hooks';
import { useEffect, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';

const JobSection = ({ title = "", location = "", Title, Location }) => {
    // hooks
    const [result, setResult] = useState([]);
    const [data, error, load] = useApi('/jobseeker/job-list');

    useEffect(() => {
        setResult(_ => data?.results?.filter(
            ({ title: t, location: l }) => l.includes(location) || t.includes(title) || false)
        );
    }, [title, location, data]);

    // methods
    const handleClick = () => { Title(_ => ""); Location(_ => ""); };

    return <section>
        <div className="w-full flex items-center justify-between p-8">
            <h2 className="capitalize font-bold text-xl">
                {(title || location) ? 'search results' : 'recent jobs'}
            </h2>
            {(title || location) ? <FaWindowClose onClick={handleClick} className="cursor-pointer" /> : null}
        </div>
        <div className="flex flex-col gap-8 items-center justify-start w-full p-14">
            <Boundary error={error} load={load}>
                {result?.map(Job) || <p >There are no jobs </p>}
                <Job />
            </Boundary>
        </div>
    </section>;
};

export default JobSection;
