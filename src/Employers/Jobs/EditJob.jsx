import React, { useEffect, useState } from "react";
import { EmployersNavbar } from "../LoggedInComponents/EmployersNavbar";
import { useParams } from "react-router-dom";
import useAxios from "../../utils/useAxios";

export const EditJob = ({}) => {
  const [job, setJob] = useState({});
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const api = useAxios();
  const getJob = async () => {
    setIsLoading(true);
    const response = await api.get(`/employer/jobs/${id}/`).catch((err) => {
      console.log(err);
      setIsLoading(false);
      setError(true);
      setErrorMessage(err.message);
    });

    if (response && response.data) {
      setJob(response.data);
      setIsLoading(false);
      console.log(response.data);
      setError(false);
    }
  };
  useEffect(() => {
    getJob();
  }, []);
  
  return (
    <section className="">
      <EmployersNavbar />

      <div className="container mx-auto">
        <h1>Edit {job.title}</h1>   
      </div>
    </section>
  );
};
