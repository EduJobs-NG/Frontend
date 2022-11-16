/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useMyDispatch } from "../../../store";

export const personal = () => {
    // states
    const [data, setData] = useState({});

    // hooks
    const { profile } = useMyDispatch();
    const { data: user } = useSelector(state => state.profile);

    // effects
    useEffect(() => {
        if (!user) {
            profile();
            setData(prev => ({...user?.personal_info}))
        }
    }, []);
    // useEffect(() => {  },[]);

    // methods
    const updateData = ({ currentTarget: target }) => setData(prev => ({ ...prev, [target.name]: target.value }))
    const handleSubmit = (e) => {
        e.preventDefault();
        console.table(data);
    };

    return <form onSubmit={handleSubmit} className="w-full flex flex-wrap items-center justify-center gap-4 p-8 px-12 lg:px-32">
        <div className="flex flex-col grow basis-96">
            <label htmlFor="first_name" className="font-thinbold capitalize text-grey" children='first name' />
            <span className="mx-1 shrink grow">
                <input name="first_name" type="text" className='rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-96">
            <label htmlFor="middle_name" className="font-thinbold capitalize text-grey" children='middle name' />
            <span className="mx-1 shrink grow">
                <input name="middle_name" type="text" className='rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-96">
            <label htmlFor="last_name" className="font-thinbold capitalize text-grey" children='last name' />
            <span className="mx-1 shrink grow">
                <input name="last_name" type="text" className='rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-96">
            <label htmlFor="gender" className="font-thinbold capitalize text-grey" children='gender' />
            <span className="mx-1 shrink grow">
                <input name="gender" type="text" className='rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-96">
            <label htmlFor="phone_number" className="font-thinbold capitalize text-grey" children='phone number' />
            <span className="mx-1 shrink grow">
                <input name="phone_number" type="text" className='rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-96">
            <label htmlFor="email" className="font-thinbold capitalize text-grey" children='email address' />
            <span className="mx-1 shrink grow">
                <input name="email" type="text" className='rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-11/12">
            <label htmlFor="home_address" className="font-thinbold capitalize text-grey" children='home address' />
            <span className="mx-1 shrink grow">
                <textarea name="home_address" type="text" className='resize-none h-40 rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-96">
            <label htmlFor="city" className="font-thinbold capitalize text-grey" children='city' />
            <span className="mx-1 shrink grow">
                <input name="city" type="text" className='rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-96">
            <label htmlFor="state" className="font-thinbold capitalize text-grey" children='state' />
            <span className="mx-1 shrink grow">
                <input name="state" type="text" className='rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-11/12 my-8 gap-4">
            <span className="w-full capitalize">social media links</span>
            <div className="mx-6 flex items-center justify-start gap-4 w-full">
                <label htmlFor="facebook" className="capitalize font-bold w-20">facebook</label>
                <input type="text" name="facebook" className="grow-1 border border-grey w-full p-2 py-1 rounded-md" />
            </div>
            <div className="mx-6 flex items-center justify-start gap-4 w-full">
                <label htmlFor="twitter" className="capitalize font-bold w-20">twitter</label>
                <input type="text" name="twitter" className="grow-1 border border-grey w-full p-2 py-1 rounded-md" />
            </div>
            <div className="mx-6 flex items-center justify-start gap-4 w-full">
                <label htmlFor="instagram" className="capitalize font-bold w-20">instagram</label>
                <input type="text" name="instagram" className="grow-1 border border-grey w-full p-2 py-1 rounded-md" />
            </div>
            <div className="mx-6 flex items-center justify-start gap-4 w-full">
                <label htmlFor="linkedin" className="capitalize font-bold w-20">linkedin</label>
                <input type="text" name="linkedin" className="grow-1 border border-grey w-full p-2 py-1 rounded-md" />
            </div>
        </div>
        <div className="w-full basis-11/22 flex items-centr justify-center">
            <button type="submit" className="px-20 flex-none py-2 rounded hover:brightness-150 transition-all bg-blue text-white uppercase font-bold">save</button>
        </div>
    </form>;
};

export const professional = () => {
    // methods
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return <form onSubmit={handleSubmit} className="w-full">professional</form>;
};

export const credential = () => {
    // methods
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return <form onSubmit={handleSubmit} className="w-full">credential</form>;
};

export const contact = () => {
    // methods
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return <form onSubmit={handleSubmit} className="w-full">contact</form>;
};
