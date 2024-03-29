import React from "react";
import { JobDetail } from "./JobDetail";

export const JobDetailPopup = ({ job, setShowJobDetail }) => {
  return (
    <>
      <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[99999] outline-none focus:outline-none">
        <div className="relative  w-auto md:w-[500px] my-6 mx-3 ">
          {/*content*/}
          <div className="">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-1  rounded-t">
            <div className="p-6 relative   flex-auto">
              <JobDetail job={job} setShowJobDetail={setShowJobDetail} />
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40  bg-black"></div>
      {/* I need a Chemistry Teacher that can teach well. I need my students to have all A's in their exams, chemistry inclusive. You need to have a Bachelor's degree to apply for this position. */}
    </>
  );
};
