import React, {useState, useEffect, useContext} from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { Circles } from 'react-loader-spinner';
import { JobseekerNavbar } from "../components/JobseekerNavbar";
import { UserForm } from "./UserForm";



export const JobApplication = () => {
  const {authTokens} = useContext(AuthContext)
  const [job, setJob] = useState({});
  const { id } = useParams();
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
      console.log(job)
 
    }
 
  }
  useEffect(() =>{
    getJob();
  }, [])
  return (
    <section className="bg-[#f5f5f5]">
        <JobseekerNavbar />


          {isLoading && (
              <div className='flex mt-[1rem] pb-[1rem] justify-center'>
                <Circles type="ThreeDots"
                  width={100} height={20} color="blue"
                />
              </div>)}

              {!isLoading && (
                
      <div className="container py-[2rem] mx-auto">
      <h2 className="font-[700] text-2xl">Job Application</h2>
      <div
        key={job?.id}
        className="relative md:mx-[1rem] mt-[1.5rem]  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]"
      >
        <h2 className="font-[700] text-[1.2rem]">{job?.title}</h2>
        <p className="font-[500]">{job?.organization_name}</p>
        <p className="font-[500]">{job?.location}</p>
        <p className="mt-[0.5rem] mb-[1.2rem]">
          {/* {viewMore ? `${job?.summary}` || '' : `${job && job.summary.substring(0, 250)}...` || ''} */}
          {job?.summary}
        </p>
        <p className="absolute  left-5 bottom-[0.5rem]">5 hours ago</p>
        <p
          onClick={() => handleView()}
          className="cursor-pointer font-[600] absolute text-blue right-5 bottom-[0.5rem]"
        >
          {viewMore ? "View Less" : "View More"}
        </p>
        {viewMore &&  (
          <div className="my-[1rem]">
            <h1 className="font-[700]">Requirements</h1>
               {/*<ol className="list-style">
            <li>lorem ipsum dolor sit amer consectetur elit</li>
              <li>lorem ipsum dolor sit amer consectetur elit</li>
              <li>lorem ipsum dolor sit amer consectetur elit</li>
              <li>lorem ipsum dolor sit amer consectetur elit</li>
              <li>lorem ipsum dolor sit amer consectetur elit</li>
              <li>lorem ipsum dolor sit amer consectetur elit</li>
            </ol> */}
                        <p>{job.requirements ? job.requirements : 'No requirements from the organization'}</p>

          </div>
        )}
         
      </div>
      </div>
        
       )}
      {!isLoading && (
      <div className="pb-[2rem]">
        {<UserForm job={job} />}
      </div>
      )}
      
    </section>
  );
};
