import React from "react";

export const JobApplication = ({job}) => {
  return (
    <section>
      <div
        key={job.id}
        className="relative md:mx-[1rem] my-[2rem]  py-[1.2rem] border bg-white border-[#d9d9d9] px-[1.2rem] rounded-[20px]"
      >
        <h2 className="font-[700] text-[1.2rem]">{job.title}</h2>
        <p className="font-[500]">{job.organization_name}</p>
        <p className="font-[500]">{job.location}</p>
        <p className="mt-[0.5rem] mb-[1.2rem]">
          {viewMore ? `${job.summary}` : `${job.summary.substring(0, 250)}...`}
        </p>
        <p className="absolute  left-5 bottom-[0.5rem]">5 hours ago</p>
        <p
          onClick={() => handleView(job.id)}
          className="cursor-pointer font-[600] absolute text-blue right-5 bottom-[0.5rem]"
        >
          {viewMore ? "View Less" : "View More"}
        </p>
        {viewMore && jobId && (
          <div className="my-[1rem]">
            <h1 className="font-[700]">Requirements</h1>
            <ol className="list-style">
              <li>lorem ipsum dolor sit amer consectetur elit</li>
              <li>lorem ipsum dolor sit amer consectetur elit</li>
              <li>lorem ipsum dolor sit amer consectetur elit</li>
              <li>lorem ipsum dolor sit amer consectetur elit</li>
              <li>lorem ipsum dolor sit amer consectetur elit</li>
              <li>lorem ipsum dolor sit amer consectetur elit</li>
            </ol>
            <div className="grid w-full  my-[2rem] md:mt-[3rem] place-items-center">
              <Link to="#">
                <button
                  className="bg-blue uppercase opacity-100 w-full md:w-[300px] px-[5rem] text-white rounded-[5px] p-2"
                  type="submit"
                >
                  APPLY
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
