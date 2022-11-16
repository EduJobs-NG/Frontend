import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiFillEdit } from 'react-icons/ai';
import { useMyDispatch } from '../../../store';
import marker from '../../../assets/Marker.png';
import aside from '../../../assets/asideprofile.svg';

const Profile = () => {
    // hooks
    const { profile } = useMyDispatch();
    const { data } = useSelector(state => state.profile);

    // effects
    useEffect(() => { if (!data) profile(); }, []);

    return <section className="flex items-start w-screen gap-4">
        <div className="flex flex-col gap-8 grow p-4">
            <div className="flex flex-col item-start gap-2">
                <h3 className='capitalize font-bold text-3xl'>welcome, {data?.user?.first_name}</h3>
                <div className="flex items-center justify-start px-4 gap-4">
                    <img src={data?.avatar} alt='profile' className="w-14 bg-grey" />
                    <div className="flex grow-[1] flex-col items-start">
                        <h4 className='font-bold text-xl'>{data?.user?.first_name} {data?.user?.last_name || "..."}</h4>
                        <span className="flex gap-2">
                            <img src={marker} alt="" className='w-4' />
                            <h5 className="capitalize">{data?.city || '...'}, <span className="uppercase">{data?.state || '...'}</span></h5>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full rounded-lg border-gray-400 border p-4 gap-4">
                <header className="w-full flex items-center justify-between">
                    <h3 className="capitalize font-bold text-md">personal information</h3>
                    <Link to='/jobseeker/profile/edit?tab=personal'><AiFillEdit className='w-8' /></Link>
                </header>
                <div className="grow-1 w-full flex flex-wrap justify-center p-[o] gap-2">
                    <div className="flex flex-col grow basis-52">
                        <label htmlFor="first_name" className="font-thinbold capitalize text-grey" children='first name' />
                        <span className="mx-1 shrink grow">
                            <input name="first_name" type="text" disabled className='rounded-md text-sm p-2 w-full border border-grey' value={data?.user?.first_name || "..."} />
                        </span>
                    </div>
                    <div className="flex flex-col grow basis-52">
                        <label htmlFor="middle_name" className="font-thinbold capitalize text-grey" children='middle name' />
                        <span className="mx-1 shrink grow">
                            <input name="middle_name" type="text" disabled className='rounded-md text-sm p-2 w-full border border-grey' value={data?.user?.middle_name || "..."} />
                        </span>
                    </div>
                    <div className="flex flex-col grow basis-52">
                        <label htmlFor="last_name" className="font-thinbold capitalize text-grey" children='last name' />
                        <span className="mx-1 shrink grow">
                            <input name="last_name" type="text" disabled className='rounded-md text-sm p-2 w-full border border-grey' value={data?.user?.last_name || "..."} />
                        </span>
                    </div>
                    <div className="flex flex-col grow basis-52">
                        <label htmlFor="gender" className="font-thinbold capitalize text-grey" children='gender' />
                        <span className="mx-1 shrink grow">
                            <input name="gender" type="text" disabled className='rounded-md text-sm p-2 w-full border border-grey' value={data?.gender || "..."} />
                        </span>
                    </div>
                    <div className="flex flex-col grow basis-52">
                        <label htmlFor="phone_number" className="font-thinbold capitalize text-grey" children='phone number' />
                        <span className="mx-1 shrink grow">
                            <input name="phone_number" type="text" disabled className='rounded-md text-sm p-2 w-full border border-grey' value={data?.user?.phone_number || "..."} />
                        </span>
                    </div>
                    <div className="flex flex-col grow basis-52">
                        <label htmlFor="email" className="font-thinbold capitalize text-grey" children='email address' />
                        <span className="mx-1 shrink grow">
                            <input name="email" type="text" disabled className='rounded-md text-sm p-2 w-full border border-grey' value={data?.user?.email || "..."} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full rounded-lg border-gray-400 border p-4">
                <header className="w-full flex items-center justify-between">
                    <h3 className="capitalize font-bold text-md">professional information</h3>
                    <Link to='/jobseeker/profile/edit?tab=professional'><AiFillEdit className='w-8' /></Link>
                </header>
                <div className="grow-1 w-full flex flex-col items-start">
                    <h3 classname="font-thin text-sm leading-[1em]">{data?.professional_info?.degree}</h3>
                    <span className="font-thin text-sm leading-[1em]">{data?.professional_info?.school_name}</span>
                    <span className="font-thin text-sm leading-[1em]">{data?.professional_info?.start_of_education} - {data?.professional_info?.end_of_education}</span>
                    <span className="font-thin text-sm leading-[1em]">First Class</span>
                    <p className="leading-[1em] text-md">
                        {data?.professional_info?.study_summary}
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-full rounded-lg border-gray-400 border p-4">
                <header className="w-full flex items-center justify-between">
                    <h3 className="capitalize font-bold text-md">credentials</h3>
                    <Link to='/jobseeker/profile/edit?tab=credential'><AiFillEdit className='w-8' /></Link>
                </header>
                <div className="grow-1 w-full flex flex-col gap-4">
                    {data?.credentials?.map((item) => (
                        <div key={item.id} className="flex w-full gap-4 px-4">
                            <div className="w-12 h-14 flex-none bg-gray-400"></div>
                            <div className="flex flex-col items-start justify-center">
                                <h4 className="font-bold capitalize">{item?.name} <span className="uppercase">cv</span></h4>
                                <span className="capitalize leading-[1em] text-sm">added 7/4/2022</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col w-full rounded-lg border-gray-400 border p-4">
                <header className="w-full flex items-center justify-between">
                    <h3 className="capitalize font-bold text-md">contact information</h3>
                    <Link to='/jobseeker/profile/edit?tab=contact'><AiFillEdit className='w-8' /></Link>
                </header>
                <div className="grow-1 w-full flex flex-wrap justify-center p-[o] gap-2">
                    <span className="flex-none w-full capitalize text-sm">next of kin details</span>
                    <div className="flex flex-col grow basis-52">
                        <label htmlFor="first_name" className="font-thinbold capitalize text-grey" children='first name' />
                        <span className="mx-1 shrink grow">
                            <input name="first_name" type="text" disabled className='rounded-md text-sm p-2 w-full border border-grey' value={data?.contact_info?.next_kin_fname} />
                        </span>
                    </div>
                    <div className="flex flex-col grow basis-52">
                        <label htmlFor="last_name" className="font-thinbold capitalize text-grey" children='last name' />
                        <span className="mx-1 shrink grow">
                            <input name="last_name" type="text" disabled className='rounded-md text-sm p-2 w-full border border-grey' value={data?.contact_info?.next_kin_lname} />
                        </span>
                    </div>
                    <div className="flex flex-col grow basis-52">
                        <label htmlFor="phone_number" className="font-thinbold capitalize text-grey" children='last name' />
                        <span className="mx-1 shrink grow">
                            <input name="phone_number" type="nutextmber" disabled className='rounded-md text-sm p-2 w-full border border-grey' value={data?.contact_info?.next_kin_phone} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-start w-[40vw] flex-none">
            <img src={aside} alt="" className="object-contain w-full" />
        </div>
    </section>;
};

export default Profile;
