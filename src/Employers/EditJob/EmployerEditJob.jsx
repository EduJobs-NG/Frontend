import { JobForm } from "./JobForm";
import img from "../../assets/post-job.png";
import { Footer } from '../../components/Footer'
import { EmployersNavbar } from "../LoggedInComponents/EmployersNavbar";

export const EmployerEditJob = () => {
  return (
    <>
      <EmployersNavbar />
      <section>
        <div className="md:flex md:gap-[3rem] md:flex-row">
          <div className="hidden md:block relative w-1/3">
            <img src={img} className=" h-full " alt="" />

            <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue opacity-50 "></div>
          </div>

          <div className=" mt-[2rem]  md:w-1/2">
            <div className="mb-[3rem] container mx-auto">
              <h1 className="font-[700] text-2xl">Edit Job</h1>
              <p>
                Kindly fill in the following fields to post available jobs on
                EduJobs NG
              </p>
            </div>
            <div className="container mx-auto md:mx-0">
              <JobForm />
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
