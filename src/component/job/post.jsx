/* eslint-disable react-hooks/exhaustive-deps */
import * as _ from './tabs';
import { useNavigate } from 'react-router-dom';
import aside from '../../assets/asideprofile.svg';
import { useEffect, useMemo, useState } from 'react';

const Post = () => {
    // state
    const [id, setId] = useState(1);
    const [data, setData] = useState({});

    // hooks
    const nav = useNavigate();


    // effect
    useEffect(() => {
        nav(`/employer/post-job?tab=${id}`);
    }, [id]);

    // memo
    const Tab = useMemo(() => _[`$${id}`] || _.$1, [id]);

    // methods
    const prev = () => setId(prev => --prev);
    const next = () => setId(prev => ++prev);

    return <section className="flex items-start w-screen gap-4">
        <div className="hidden items-start w-[40vw] flex-none lg:flex">
            <img src={aside} alt="" className="object-contain w-full" />
        </div>
        <div className="flex flex-col gap-8 grow p-4">
            <div className="flex flex-col w-full items-start justify-center">
                <h2 className="text-2xl capitalize font-bold">post jobs</h2>
                <span>Kindly fill in the following fields to post available jobs on EduJobs NG</span>
            </div>
            <Tab parentData={setData} />
            <div className="flex items-center justify-between px-10">
                {id > 1 && <span onClick={prev} className='font-bold capitalize cursor-pointer'>back</span>}
                {id <= 3 && <button onClick={next} className="mx-auto flex items-center justify-center bg-blue text-white uppercase font-bold px-6 py-2">
                    next
                </button>}
            </div>
        </div>
    </section>;
};

export default Post;
