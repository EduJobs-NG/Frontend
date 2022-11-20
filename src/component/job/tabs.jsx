import { useEffect, useState } from "react";

export const $1 = ({ parentData }) => {
    // states
    const [data, setdata] = useState({});

    // effects
    useEffect(() => { parentData(prev => ({ ...prev, ...data })) }, [data]);

    const updateData = ({ currentTarget: t }) => setdata(prev => ({ ...prev, [t?.name]: t?.value }));
    return <div className="">
        <div className="flex flex-col items-start gap-2 w-full">
            <label htmlFor="title" className="capitalize">job title</label>
            <input name="title" onChange={updateData} type="text" className="border border-grey rounded-md p-2 grow mx-4" />
        </div>
    </div>;
};
export const $2 = ({ parentData }) => {
    // states
    const [data, setdata] = useState({});

    // effects
    useEffect(() => { parentData(prev => ({ ...prev, ...data })) }, [data]);

    const updateData = ({ currentTarget: t }) => setdata(prev => ({ ...prev, [t?.name]: t?.value }));
    return <div className="">
        $2
    </div>;
};
export const $3 = ({ parentData }) => {
    // states
    const [data, setdata] = useState({});

    // effects
    useEffect(() => { parentData(prev => ({ ...prev, ...data })) }, [data]);

    const updateData = ({ currentTarget: t }) => setdata(prev => ({ ...prev, [t?.name]: t?.value }));
    return <div className="">
        $3
    </div>;
};
export const $4 = ({ parentData }) => {
    // states
    const [data, setdata] = useState({});

    // effects
    useEffect(() => { parentData(prev => ({ ...prev, ...data })) }, [data]);

    const updateData = ({ currentTarget: t }) => setdata(prev => ({ ...prev, [t?.name]: t?.value }));
    return <div className="">
        $4
    </div>;
};