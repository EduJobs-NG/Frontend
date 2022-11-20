/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import Loader from '../../loader';
import { api } from '../../../utils';
import { useApi } from '../../../hooks';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { useMyDispatch } from '../../../store';

export const personal = () => {
    // states
    const [data, setData] = useState({});
    const [updater, setUpdater] = useState(false);

    // hooks
    // const [user, _error, load] = useApi('/jobseeker/user-profile-update');
    const { data: user, load } = useSelector(state => state.profile);
    const { profile: $profile } = useMyDispatch();

    // effects
    useEffect(() => { if (!user) $profile(); }, []);

    // methods
    const updateData = ({ currentTarget: t }) => setData(prev => ({ ...prev, [t.name]: t.value }))
    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdater(() => true);
        setData(prev => {
            let copy = { ...prev };
            for (let i in copy) { if (copy[i] === '') delete copy[i]; };
            return copy;
        });
        await api.put('/jobseeker/user-profile-update/', data)
        .then(data => {
            console.log(data);
            toast.success('profile updated successfully');
        })
        .catch(err => {
            console.error(err);
            toast.error('It seems you encountered an issue');
        });
        setUpdater(() => false);
    };

    return <form onSubmit={handleSubmit} className="w-full flex flex-wrap items-center justify-center gap-4 p-8 px-12 lg:px-32">
        <div className="flex flex-col grow basis-96">
            <label htmlFor="first_name" className="font-thinbold capitalize text-grey" children='first name' />
            <span className="mx-1 shrink grow">
                <input disabled={updater} name="first_name" type="text" placeholder={user?.user?.first_name || '...'} className='outline-none rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-96">
            <label htmlFor="middle_name" className="font-thinbold capitalize text-grey" children='middle name' />
            <span className="mx-1 shrink grow">
                <input disabled={updater} name="middle_name" type="text" placeholder={user?.middle_name || '...'} className='outline-none rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-96">
            <label htmlFor="last_name" className="font-thinbold capitalize text-grey" children='last name' />
            <span className="mx-1 shrink grow">
                <input disabled={updater} name="last_name" type="text" placeholder={user?.user?.first_name || '...'} className='outline-none rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-96">
            <datalist id='gender'>
                <option value="male">male</option><option value="female">female</option>
            </datalist>
            <label htmlFor="gender" className="font-thinbold capitalize text-grey" children='gender' />
            <span className="mx-1 shrink grow">
                <input disabled={updater} autoCorrect={false || undefined} name="gender" list='gender' type="text" placeholder={user?.gender || '...'} className='outline-none rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-96">
            <label htmlFor="phone_number" className="font-thinbold capitalize text-grey" children='phone number' />
            <span className="mx-1 shrink grow">
                <input disabled={updater} name="phone_number" type="text" placeholder={user?.phone_number || '...'} className='outline-none rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-96">
            <label htmlFor="email" className="font-thinbold capitalize text-grey" children='email address' />
            <span className="mx-1 shrink grow">
                <input disabled={updater} name="email" type="text" placeholder={user?.user?.email || '...'} className='outline-none rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-11/12">
            <label htmlFor="home_address" className="font-thinbold capitalize text-grey" children='home address' />
            <span className="mx-1 shrink grow">
                <textarea name="home_address" type="text" placeholder={user?.home_address || '...'} className='resize-none h-40 rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-96">
            <label htmlFor="city" className="font-thinbold capitalize text-grey" children='city' />
            <span className="mx-1 shrink grow">
                <input disabled={updater} name="city" type="text" className='outline-none rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-96">
            <label htmlFor="state" className="font-thinbold capitalize text-grey" children='state' />
            <span className="mx-1 shrink grow">
                <input disabled={updater} name="state" type="text" placeholder={user?.state || '...'} className='outline-none rounded-md text-sm p-2 w-full border border-grey' onChange={updateData} />
            </span>
        </div>
        <div className="flex flex-col grow basis-11/12 my-8 gap-4">
            <span className="w-full capitalize">social media links</span>
            <div className="mx-6 flex items-center justify-start gap-4 w-full">
                <label htmlFor="facebook" className="capitalize font-bold w-20">facebook</label>
                <input disabled={updater} onChange={updateData} type="text" name="facebook_url" placeholder={user?.facebookm_url || '...'} className="outline-none grow-1 border border-grey w-full p-2 py-1 rounded-md" />
            </div>
            <div className="mx-6 flex items-center justify-start gap-4 w-full">
                <label htmlFor="twitter" className="capitalize font-bold w-20">twitter</label>
                <input disabled={updater} onChange={updateData} type="text" name="twitter_url" placeholder={user?.twitter_url || '...'} className="outline-none grow-1 border border-grey w-full p-2 py-1 rounded-md" />
            </div>
            <div className="mx-6 flex items-center justify-start gap-4 w-full">
                <label htmlFor="instagram" className="capitalize font-bold w-20">instagram</label>
                <input disabled={updater} onChange={updateData} type="text" name="instagram_url" placeholder={user?.instagram_url || '...'} className="outline-none grow-1 border border-grey w-full p-2 py-1 rounded-md" />
            </div>
            <div className="mx-6 flex items-center justify-start gap-4 w-full">
                <label htmlFor="linkedin" className="capitalize font-bold w-20">linkedin</label>
                <input disabled={updater} onChange={updateData} type="text" name="linkedin_url" placeholder={user?.linkedin_url || '...'} className="outline-none grow-1 border border-grey w-full p-2 py-1 rounded-md" />
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
