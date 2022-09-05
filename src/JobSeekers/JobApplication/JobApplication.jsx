import React, {useState, useEffect, useContext} from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';



export const JobApplication = () => {
  const {authTokens} = useContext(AuthContext)
  const [job, setJob] = useState({});
  const { id } = useParams();
  console.log(id)
  const [viewMore, setViewMore] = useState(false);
  const handleView = () =>{
    setViewMore(!viewMore)
  }
  const [isLoading, setIsLoading] = useState(false)
  const getJob = async () =>{

    setIsLoading(true)
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}jobseeker/job-list/${id}`, {
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Token ${authTokens.auth_token}`
      }
    }).catch(err =>{
      console.log(err)
      setIsLoading(false)
    })
 
    if (response && response.data){
      setJob(response.data)
      setIsLoading(false);
      console.log(response)
 
    }
 
  }
  useEffect(() =>{
    getJob();
  }, [])
  return (
    <section>
      {job && (
      <div
        key={job.id}
        className="relative md:mx-[1rem] my-[2rem]  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]"
      >
        <h2 className="font-[700] text-[1.2rem]">{job.title}</h2>
        <p className="font-[500]">{job.organization_name}</p>
        <p className="font-[500]">{job.location}</p>
        <p className="mt-[0.5rem] mb-[1.2rem]">
          {viewMore ? `${job.summary}` : `${job.summary.substring(0, 100)}...`}
        </p>
        <p className="absolute  left-5 bottom-[0.5rem]">5 hours ago</p>
        <p
          onClick={() => handleView()}
          className="cursor-pointer font-[600] absolute text-blue right-5 bottom-[0.5rem]"
        >
          {viewMore ? "View Less" : "View More"}
        </p>
        {viewMore && (
          <div className="my-[1rem]">
            <h1 className="font-[700]">Requirements</h1>
            <ol className="list-style">
              <li>lorem ipsum dolor sit amer consectetur elit</li>
              <li>lorem ipsum dolor sit amer consectetur elit</li>
              <li>lorem ipsum dolor sit amer consectetur elit</li>
              <li>lorem ipsum dolor sit amer consectetur elit</li>
              <li>lorem ipsum dolor sit amer consectetur elit</li>
              <li>lorem ipsum dolor sit amer consectetur elit</li>
            </ol>
            <div className="grid w-full  my-[2rem] md:mt-[3rem] place-items-center">
              <Link to="#">
                <button
                  className="bg-blue uppercase opacity-100 w-full md:w-[300px] px-[5rem] text-white rounded-[5px] p-2"
                  type="submit"
                >
                  APPLY
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      )}
    </section>
  );
};
