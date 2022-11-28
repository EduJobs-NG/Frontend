/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom';
import img from "../../assets/jobs-2.png";
import { useState, useEffect } from "react";
import useAxios from "../../utils/useAxios";
import { Circles } from "react-loader-spinner";
import { JobDetailPopup as Popup } from './JobDetailPopup';

export const Jobslists = ({ url = "/employer/jobs/open/", title = "" }) => {
  // states
  const [job, setJob] = useState(null);
  const [data, setData] = useState([]);
  const [pop, setPop] = useState(false);
  const [load, setLoad] = useState(false);
  const [result, setResult] = useState([]);
  const [error, setError] = useState(false);
  const api = useAxios()

  // effects
  useEffect(() => { fetchData(); }, [url]);
  useEffect(() => { setResult(() => data?.filter(item => title.length ? item?.title?.toLowerCase()?.includes(title.toLowerCase()) : true) || []); }, [data, title]);

  // methods
  const handlePopup = (singleJob) => { setPop(() => true); setJob(() => singleJob) };
  const fetchData = async () => {
    setLoad(() => true);
    await api.get(url)
      .then(res => { setData(() => res?.data || []); console.log(res) })
      .catch(err => { setError(() => err) });
    setLoad(() => false);
  };

  return <div className="">
    {pop ? <Popup job={job} setShowJobDetail={setPop} /> : null}

    {
      load ?
        <div className="flex justify-center">
          <Circles type="ThreeDots" width={100} height={20} color="blue" />
        </div>
        : error ?
          <div className="capitalize text-blue text-xl">there was an error fetching jobs</div>
          : result.length ? result.map(item => (
            <div className="bg-white rounded-[1rem] mb-[2rem] px-[2rem] py-[1rem] grid lg:grid-cols-4 gap-[2rem]">
              <div>
                <h2 className="text-blue font-bold">{item?.title}</h2>
                <p>{item?.location}</p>
                <p>{item?.created}</p>
              </div>

              <div className="flex flex-row justify-between lg:flex-col">
                <p className="text-blue">Job status</p>
                <select
                  name="status"
                  className="border p-2.5   border-solid border-[#808080] rounded-lg outline-none"
                >
                  <option value={item?.open_status}>{item?.open_status}</option>
                </select>
              </div>

              <div className="flex flex-row  justify-between md:justify-center items-center  gap-[1rem]">
                <div>
                  <Link to={`/employer/dashboard/edit-job/${item?.id}`} className="text-blue cursor-pointer">Edit job</Link>
                </div>
                <div>
                  <p onClick={() => handlePopup(item)} className="bg-blue cursor-pointer px-[1rem] py-[0.4rem] text-white rounded-[5px]">
                    View job details
                  </p>
                </div>
              </div>
            </div>
          )) : (
            <div className="flex flex-col items-center justify-center gap-2">
              <img src={img} alt="" />
              <p className="capitalize font-bold text-blue">
                {title.length ? 'the search result was not fund' : `No ${url.includes('open') ? 'open' : 'closed'} jobs yet`}
              </p>
            </div>
          )
    }
  </div>;
};
