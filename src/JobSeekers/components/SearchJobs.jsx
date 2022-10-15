import React, {useState} from 'react'
import { FormInputBox } from '../../components/Forms/FormInputBox';
import useAxios from '../../utils/useAxios';
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Formik, Form, Field, ErrorMessage} from 'formik'

export const SearchJobs = () => {
    const [jobs, setJobs] = useState([]);
    const[searchKeyword, setSearchKeyword] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [nextURL, setNextURL] = useState();
    const [prevURL, setPrevURL] = useState();
    const api = useAxios()
    const handleJobSearch = async () => {
        if(searchKeyword.trim().length === 0){
            toast.error('Please enter a search keyword')
        }
        else{
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

      {/* <div className='bg-white  hover:border-[#fff]  transition-all px-[2rem] py-[0.3rem] w-full border rounded-[5px] border-[#808080] flex flex-row justify-start items-center gap-2 '>
        <p className='text-blue font-[700]'>Location</p>
        <div className='bg-[#000] ml-[0.5rem] h-[2rem] w-[3px]'></div>
        <div>
        <FormInputBox placeholder='Search keyword' className="border-none p-2.5 block w-full    border-[#808080] outline-none" />
        </div>
        
      </div> */}
      </div>
      <div className='grid mt-[2rem] md:mt-[3rem]  place-items-center'>
           {!isLoading && <button onClick={handleJobSearch} className='bg-blue uppercase opacity-100 w-full md:w-[300px] px-[5rem] text-white rounded-[5px] p-2' type="submit">Search Jobs</button> }
             
             {isLoading && <div className='flex justify-center'>
                <ThreeDots type="ThreeDots"
                  width={100} height={20} color="blue"
                />
              </div>}
           
          </div>

    </div>
    </section>

  )
}
