import React, {useState, useEffect} from 'react';
import img from '../../assets/jobs-2.png';
import useAxios from "../../utils/useAxios";
import axios  from 'axios';
import axiosInstance from '../../utils/AxiosInstance'

export const OpenJobs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [openJobs, setOpenJobs] = useState({});
  const api = useAxios()
  const getOpenJobs = async () => {
    setIsLoading(true);
    const response = await axiosInstance
      .get(`/employer/jobs/`)
      .catch((err) => {
      console.log(err);
      });

    if (response && response.data) {
      console.log(response)
      setOpenJobs(response.data)
    }
  }

    useEffect(() =>{
      getOpenJobs();
    }, [])
  
  return (
    <div>

      

      
    </div>
  )
}
