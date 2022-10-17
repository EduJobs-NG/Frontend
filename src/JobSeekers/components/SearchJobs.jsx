import React, {useState} from 'react'
import { FormInputBox } from '../../components/Forms/FormInputBox';
import useAxios from '../../utils/useAxios';
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Markup } from 'interweave';
import { Link } from "react-router-dom";


export const SearchJobs = ({setShowSearchJobs, showSearchJobs, setShowRecentJobs}) => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [nextURL, setNextURL] = useState();
    const [prevURL, setPrevURL] = useState();
    const api = useAxios();
    const handleView = (id) => {
        if (selectedJob === id) {
          return setSelectedJob(null);
        }
        setSelectedJob(id);
      };
    const handleJobSearch = async () => {
        if(searchKeyword.trim().length === 0){
            toast.error('Please enter a search keyword')
        }
        else{
        setShowRecentJobs(false)
        setIsLoading(true);
        const response = await api
          .get(`jobseeker/job-list?search=${searchKeyword}`)
          .catch((err) => {
            if (err.message === "Network Error") {
              toast.error(`${err.message}. Could not fetch jobs.`);
              setErrorMessage(err.message);
              setError(true);
              setIsLoading(false);
            }
            console.log(err);
            setIsLoading(false);
            setErrorMessage(err.message);
            setError(true);
          });
    
        if (response && response.data) {
          setShowRecentJobs(false)
          setShowSearchJobs(true)
          setError(false);
          setSearchKeyword('');
          console.log(response)
          setErrorMessage('');
          setJobs(response.data.results);
          setPrevURL(response.data.previous)
          setNextURL(response.data.next)
          setIsLoading(false);
        }
    }

    }
  return (
    <section className='bg-ash'>
        <ToastContainer />

    <div className='container mx-auto py-[4rem]'>
    {/* md:grid-cols-2 gap-3 md:gap-[6rem] */}
      <div className='grid place-items-center '>

      <div className='bg-white hover:border-[#fff]  transition-all px-[1rem] py-[0.3rem] w-full md:max-w-[500px] border rounded-[5px] border-[#808080] flex flex-row justify-start items-center gap-2 '>
        <p className='text-blue font-[700]'>Job Title</p>
        <div className='bg-[#000] ml-[0.5rem]  h-[2rem] w-[3px]'></div>
        <div className=''>
        <FormInputBox placeholder='e.g., Physics Teacher'
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
         className="border-none p-2.5 block   w-full border-[#808080] outline-none" />
        </div>
        
      </div>
      </div>
      <div className='grid mt-[2rem] md:mt-[3rem]  place-items-center'>
           {!isLoading && <button onClick={handleJobSearch} className='bg-blue uppercase opacity-100 w-full md:w-[300px] px-[5rem] text-white rounded-[5px] p-2' type="submit">Search Jobs</button> }
             
             {isLoading && <div className='flex justify-center'>
                <ThreeDots type="ThreeDots"
                  width={100} height={20} color="blue"
                />
              </div>}
           
          </div>

          {showSearchJobs && (<>
          
          
          <h2 className="text-blue my-[1rem] font-[700] text-[1.5rem]">
            Search results for {searchKeyword}
          </h2>

          {( jobs.length) === 0 && (
            <p>No Jobs</p>
          )}
          {jobs &&
            jobs.map((job) => {
              const { id } = job;
              // console.log(job.applied)
              return (
                <div
                  key={job.id}
                  className="relative md:mx-[1rem] my-[2rem]  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]"
                >
                  <h2 className="font-[700] text-[1.2rem]">{job.title}</h2>
                  <p className="font-[500]">{job.organization_name}</p>
                  <p className="font-[500]">{job.location}</p>
                  <p className="mt-[0.5rem] mb-[1.2rem]">
                    {selectedJob === id
                      ? `${job.summary}`
                      : `${job.summary.substring(0, 250)}...`}
                  </p>
                  <p className="absolute  left-5 bottom-[0.5rem]">
                    {job.posted_time}
                  </p>
                  <p
                    onClick={() => handleView(id)}
                    className="cursor-pointer font-[600] absolute text-blue right-5 bottom-[0.5rem]"
                  >
                    {selectedJob === id ? "View Less" : "View More"}
                  </p>
                  {selectedJob === id && (
                    <div className="my-[1rem]">
                      <h1 className="font-[700]">Requirements</h1>

                      <div>
                        {job.requirements
                          ? <Markup content={job.requirements} />
                          : "No requirements from the organization"}
                      </div>
                      <div className="grid w-full  my-[2rem] md:mt-[3rem] place-items-center">
                        <Link to={`/dashboard/apply/job/${id}`}>
                          <button disabled={job.applied === true}
                            className={job.applied === true ? "bg-blue uppercase opacity-25 w-full md:w-[300px] px-[5rem] text-white rounded-[5px] p-2": "bg-blue uppercase opacity-100 w-full md:w-[300px] px-[5rem] text-white rounded-[5px] p-2"}
                            type="submit"
                          >
                            {job.applied === true ? 'APPLIED' : 'APPLY'}
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            </>)}

    </div>
    </section>

  )
}
