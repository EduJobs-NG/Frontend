/* eslint-disable react-hooks/exhaustive-deps */
import api from '../../utils/axios';
import { Markup } from 'interweave';
import { Link } from "react-router-dom";
import { GrFormClose } from 'react-icons/gr';
import { Circles } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import { Error } from "../../components/Error";
import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect, forwardRef } from "react";

export const Recent = forwardRef(({ title = "", location = "", Title, Location }, ref) => {
  // states
  const [jobs, setJobs] = useState(null);
  const [load, setLoad] = useState(null);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [selected, setSelected] = useState(null);
  const [url, setUrl] = useState('jobseeker/job-list');

  // effects
  useEffect(() => { handleRequest(); }, [url]);
  useEffect(() => {
    setResult(() => jobs?.results?.filter(
      ({ title: t, location: l }) => {
        if (title.length && location.length) {
          return t?.toLowerCase()?.includes(title.toLowerCase()) ||
            l?.toLowerCase()?.includes(location.toLowerCase());
        } else if (title.length) return t?.toLowerCase()?.includes(title.toLowerCase());
        else if (location.length) return l?.toLowerCase()?.includes(location.toLowerCase());
        else if (!title.length && !location.length) return true;
        else return false;
      }
    ));
  }, [title, location, jobs]);

  // methods
  const nextUrl = () => setUrl(prev => jobs?.next || prev);
  const prevUrl = () => setUrl(prev => jobs?.previous || prev);
  const clearSearch = () => { Title && Title(() => ""); Location && Location(() => ""); };
  const handleSelected = ({ currentTarget: t }) => setSelected(() => Number(t.id) === selected ? null : Number(t.id));
  const handleRequest = async () => {
    setLoad(() => true);
    await api.get(url, null, { Headers: { Authorization: "" } })
      .then(res => {
        setError(() => null);
        setJobs(() => res.data);
      })
      .catch(({ message }) => {
        setError(() => message);
        if (message === 'Network Error') toast.error(`${message}. Could not fetch jobs`);
      });
    setLoad(() => false);
  };

  return <section className="bg-[#f5f5f5] flex flex-col items-center justify-center py-12" ref={ref}>
    <ToastContainer />
    <div className="container">
      <hr className="text-gray-200" />
      <div className="flex items-center justify-between">
        <h2 className="text-blue my-4 font-bold text-2xl capitalize">{(title || location) ? 'searched' : 'recent'} jobs</h2>
        {(title || location) ? <GrFormClose className='cursor-pointer text-3xl' onClick={clearSearch} /> : null}
      </div>
      {
        load ?
          <div className="w-full flex items-center justify-center">
            <Circles type="ThreeDots" width={100} color="blue" />
          </div>
          : error ? <Error message={error} /> :
            result?.length ? result?.map((item, key) => (
              <div
                key={item?.id || key}
                className="relative mx-0 md:mx-4 my-8 py-6 px-[1rem] border bg-white border-gray-300 rounded-3xl "
              >
                <h2 className="font-bold text-xl">{item?.title}</h2>
                <p className="font-thinbold">{item?.organization_name}</p>
                <p className="font-thinbold">{item?.location}</p>
                <p className="font-thinbold">{item?.id === selected ? item?.summary : `${item?.summary.substring(0, 250)}...`}</p>
                {
                  selected === item?.id &&
                  <div className="my-4">
                    <h3 className="font-bold text-xl capitalize">requirements</h3>
                    <div>
                      {item?.requirements ? <Markup content={item?.requirements} /> : 'No requirements from the organization.'}
                      <div className="grid w-full my-8 md:mt-12 items-center justify-center">
                        <Link to={`/dashboard/apply/job/${item?.id}`} className="">
                          {item?.applied === true ? <button disabled className="bg-blue opacity-20 font-bold uppercase w-full md:w-100 px-20 text-white rounded p-2">
                            APPLIED
                          </button> : <button className="bg-blue  font-bold uppercase w-full md:w-100 px-20 text-white rounded p-2">
                            APPLY
                          </button> }
                          
                        </Link>
                      </div>
                    </div>
                  </div>
                }
                <div className="pt-[1rem] w-full flex items-center justify-between">
                  <small className="font-thinbold">{item?.posted_time} ago</small>
                  <button id={item?.id} onClick={handleSelected} className=" text-blue font-bold capitalize">view {item?.id === selected ? 'less' : 'more'}</button>
                </div>
              </div>
            )) : <p className="text-3xl text-center font-bold text-blue capitalize">{(title.length || location.length) ? 'could not find a job that match your search' : 'There are no jobs'} </p>
      }
      <div className="container mx-auto flex justify-end">
        <div className="grid grid-cols-2 gap-4">
          {
            jobs?.previous ? <button onClick={prevUrl} className="bg-blue flex justify-center items-center text-white uppercase px-4 rounded-md py-1">
              previous
            </button> : null
          }
          {
            jobs?.next ? <button onClick={nextUrl} className="bg-blue flex justify-center items-center text-white uppercase px-4 rounded-md py-1">
              next
            </button> : null
          }
        </div>
      </div>
    </div>
  </section>;
});
