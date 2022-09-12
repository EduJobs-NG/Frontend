import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { Circles } from 'react-loader-spinner';
export const RecentJobs = () => {
  const {authTokens} = useContext(AuthContext)
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleView = (id) =>{
    if(selectedJob === id){
     return setSelectedJob(null)
    }
    setSelectedJob(id)
    
  }
//  count 10 access 90 mins refresh 5 days
  const getJobs = async () =>{
    setIsLoading(true)
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}jobseeker/job-list`, {
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Token ${authTokens.auth_token}`
      }
    }).catch(err =>{
      console.log(err)
      setIsLoading(false)
    })
 
    if (response && response.data){
      const {results, count, previous, next} = response.data
      
      setJobs(results)
      console.log(response.data)
      setIsLoading(false);

    }
 
  }

 const  getNextJobs = () =>{
  

  }
  useEffect(() =>{
    getJobs();
  }, [])
  return (
    <>
    <section className='bg-[#f5f5f5]'>
        <div className='container py-[4rem] mx-auto'>
            <hr className='text-[#d9d9d9]' />
            <h2 className='text-blue my-[1rem] font-[700] text-[1.5rem]'>Recent Jobs</h2>

            {isLoading && (
              <div className='flex justify-center'>
                <Circles type="ThreeDots"
                  width={100} height={20} color="blue"
                />
              </div>)}

            {jobs && jobs.map((job) =>{
              const {id} = job;
              return (
   
            <div key={job.id} className='relative md:mx-[1rem] my-[2rem]  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]'>

              <h2 className='font-[700] text-[1.2rem]'>{job.title}</h2>
              <p className='font-[500]'>{job.organization_name}</p>
              <p className='font-[500]'>{job.location}</p>
              <p className='mt-[0.5rem] mb-[1.2rem]'>
               {selectedJob === id ? `${job.summary}` : `${job.summary.substring(0, 250)}...` } 
            
                  </p>
                  <p className='absolute  left-5 bottom-[0.5rem]'>5 hours ago</p>
                  <p onClick={() => handleView(id)} className='cursor-pointer font-[600] absolute text-blue right-5 bottom-[0.5rem]'>{selectedJob === id ? 'View Less':'View More'}</p>
                  {selectedJob === id && (
                    <div className='my-[1rem]'>
                      <h1 className='font-[700]'>Requirements</h1>
                      <ol className='list-style'>
                        {/* <li>lorem ipsum dolor sit amer consectetur elit</li>
                        <li>lorem ipsum dolor sit amer consectetur elit</li>
                        <li>lorem ipsum dolor sit amer consectetur elit</li>
                        <li>lorem ipsum dolor sit amer consectetur elit</li>
                        <li>lorem ipsum dolor sit amer consectetur elit</li>
                        <li>lorem ipsum dolor sit amer consectetur elit</li> */}
                        <p>{job.requirements ? job.requirements : 'No requirements from the organization'}</p>
                      </ol>
                      <div className='grid w-full  my-[2rem] md:mt-[3rem] place-items-center'>
                       <Link to={`/dashboard/apply/job/${id}`}>
                      <button  className='bg-blue uppercase opacity-100 w-full md:w-[300px] px-[5rem] text-white rounded-[5px] p-2' type="submit">
                        APPLY
                        </button>
                        </Link> 


                      </div>

                    </div>
                  
                  )}
                  
            </div>
              )
                     })}
        </div>
    </section>
    </>
  )
}
