import React from "react";
import successImage from "../../assets/application-successful.png";
export const SuccessfulApplication = ({ email }) => {
  return (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto md:w-[500px] my-6 mx-3 ">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-1 ">
            {/*body*/}
            <div className="flex flex-col justify-center items-center relative p-8 flex-auto">
              <div className="w-full text-center max-w-[300px] grid  mt-[1rem]">
                <img src={successImage} alt="" />

                <h1 className="text-black font-[700] text-2xl">
                  Your Application has been Submitted!
                </h1>
                <p className="mt-4">
                  You will get an email confirmation at{" "}
                  <span className="ml-[0.3rem]">{email}</span>
                </p>
                <a href='/dashboard/find-jobs'
                className="bg-blue mt-[2rem] w-full flex justify-center gap-6 items-center  uppercase opacity-100 px-[1rem]  text-white rounded-[5px] p-2"
                type="submit"
                
              >
                 Find More Jobs
              </a>
              </div>
            </div>{" "}
            {/*footer*/}
          </div>
        </div>
      </div>
    </div>
  <div className="opacity-25 fixed inset-0 z-40  bg-black"></div>
  </>

  );
};
