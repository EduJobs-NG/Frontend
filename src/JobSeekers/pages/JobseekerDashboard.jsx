import React, { useState } from "react";
import { Recent } from '../components/RecentJobs';
import { Footer } from "../../components/Footer";
import SearchJobs from '../components/SearchJobs';
import { JobseekerNavbar } from "../components/JobseekerNavbar";

export const JobseekerDashboard = () => {
  // states
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  return <>
    <JobseekerNavbar />
    <section className="relative bg-jobs lg:pt-[20px] lg:pb-[70px] h-[500px] bg-center bg-cover bg-no-repeat">
      <div className="container mx-auto h-full flex flex-col items-center justify-center gap-8">
        <h2 className="title text-[35px] font-heading lg:text-[66px] font-[700] text-white text-center z-10">
          Find Jobs that Best Suit You
        </h2>
        <SearchJobs title={title} location={location} Title={setTitle} Location={setLocation} />
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#02378B] opacity-60"></div>
    </section>

    <section>
      <Recent title={title} location={location} Title={setTitle} Location={setLocation} />
    </section>

    <Footer />
  </>;
};
