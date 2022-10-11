import React from "react";

export const EmployerHeader = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="flex flex-row py-[1.5rem]  justify-between">
          <div>
            <ul className="flex  gap-x-[3rem] flex-row">
              <li className="">
                <a href="/employer/view-jobs">Jobs</a>
              </li>
              <li className="">
                <a href="/employer/candidates">Candidates</a>
              </li>
              <li className="">
                <a href="/employer/interview">Candidates</a>
              </li>
            </ul>
          </div>

          <div>
            <p>Search Candidates</p>
          </div>
        </div>
   
      </div>
    </section>
  );
};
