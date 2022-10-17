import React from "react";
import { SearchCandidate } from "../candidates/SearchCandidate";
import { NavLink } from "react-router-dom";

const activeLink = "border-b border-b-4 font-[700] border-b-blue text-blue";
const normalLink = "border-none text-gray";
export const EmployerHeader = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="flex flex-row py-[1rem] items-center  justify-between">
          <div>
            <ul className="flex  gap-[3rem] flex-row">
              <li className="">
                <a href="/employer/dashboard/view-jobs">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    to="/employer/dashboard/view-jobs"
                  >
                    Jobs
                  </NavLink>
                </a>
              </li>
              {/* <li className="">
                <a href="/employer/candidates">Candidates</a>
              </li>
              <li className="">
                <a href="/employer/interview">Interviews</a>
              </li> */}
            </ul>
          </div>

          {/* <div>
           <SearchCandidate />
          </div> */}

          <ul>

          <a href="/employer/dashboard/post-job">
            <li className="xl:hidden p-1 cursor-pointer px-4 font-[700] border border-solid bg-blue text-white border-white rounded-[8px]">
              POST JOB
            </li>
          </a>
          </ul>

        </div>
      </div>
    </section>
  );
};
