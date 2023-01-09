/* eslint-disable react-hooks/exhaustive-deps */
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import img from "../../assets/jobs-2.png";
import { useState, useEffect } from "react";
import useAxios from "../../utils/useAxios";
import { Circles } from "react-loader-spinner";
import { JobDetailPopup as Popup } from "./JobDetailPopup";

export const Jobslists = ({ url = "/employer/jobs/open/", title = "" }) => {
  // states
  const [job, setJob] = useState(null);
  const [data, setData] = useState([]);
  const [pop, setPop] = useState(false);
  const [load, setLoad] = useState(false);
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const api = useAxios();

  // effects
  useEffect(() => {
    fetchData();
  }, [url]);
  useEffect(() => {
    setResult(
      () =>
        data?.filter((item) =>
          title.length
            ? item?.title?.toLowerCase()?.includes(title.toLowerCase())
            : true
        ) || []
    );
  }, [data, title]);

  // methods

  const handlePopup = (singleJob) => {
    setPop(() => true);
    setJob(() => singleJob);
  };
  const fetchData = async () => {
    setLoad(() => true);
    await api
      .get(url)
      .then((res) => {
        setData(() => res?.data || []);
        console.log(res);
      })
      .catch((err) => {
        setError(() => err);
      });
    setLoad(() => false);
  };
  const closeJob = async (item) => {
    const data = new FormData();

    data.append("title", item.title);
    data.append("summary", item.summary);
    data.append("requirements", item.requirements);
    data.append("job_type", item.job_type);
    data.append("min_pay_range", item.min_pay_range);
    data.append("max_pay_range", item.max_pay_range);
    data.append("location", item.location);
    data.append("open_status", "Closed");
    data.append("organization_name", item.organization_name);

    try {
      await api.put(`/admin/jobs-review/${item.id}/`, data);
      setIsLoading(() => false);
    } catch (err) {
      console.error(err);
      setIsLoading(() => false);
      toast.error(err?.response?.detail || "Something went wrong");
    }
  };

  return (
    <div className="">
      {pop ? <Popup job={job} setShowJobDetail={setPop} /> : null}

      {load ? (
        <div className="flex justify-center">
          <Circles type="ThreeDots" width={100} height={20} color="blue" />
        </div>
      ) : error ? (
        <div className="capitalize text-blue text-xl">
          there was an error fetching jobs
        </div>
      ) : result.length ? (
        result.map((item) => (
          <div
            key={item?.id}
            className="bg-white rounded-[1rem] my-[2rem] px-[2rem] py-[1rem] grid lg:grid-cols-2 gap-[2rem]"
          >
            <div>
              <h2 className="text-blue font-bold">{item?.title}</h2>
              <p>{item?.location}</p>
              <p>{item?.created}</p>
            </div>

            <div className="flex flex-row  justify-between md:justify-center items-center  gap-[1rem]">
              {item.open_status === "Closed" ? null : (
                <div>
                  <a
                    className="text-blue"
                    href={`/employer/dashboard/edit-job/${item?.id}`}
                  >
                    Edit Job
                  </a>
                </div>
              )}

              <div>
                <p
                  onClick={() => handlePopup(item)}
                  className="bg-blue cursor-pointer px-[1rem] py-[0.4rem] text-white rounded-[5px]"
                >
                  Job details
                </p>
              </div>

              {item.open_status === "Closed" ? null : (
                <div className="flex flex-row justify-between lg:flex-col">
                  <p
                    onClick={() => closeJob(item)}
                    className="bg-red-600 cursor-pointer px-[1rem] py-[0.4rem] text-white rounded-[5px]"
                  >
                    Close job
                  </p>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={img} alt="" />
          <p className="capitalize font-bold text-blue">
            {title.length
              ? "No job matches your search"
              : `No ${url.includes("open") ? "open" : "closed"} jobs yet`}
          </p>
        </div>
      )}
    </div>
  );
};
