import React, { useState } from "react";
import { IndividualRegistration } from "../components/IndividualRegistration";
import { CorporateRegistration } from "../components/CorporateRegistration";
import { FaUserPlus, FaTimes } from "react-icons/fa";

export const EmployersRegistration = ({ setShowRegister, showModal }) => {
  const typeOfRegistration = ["individual", "corporate"];
  const [title, setTitle] = useState("individual");
  const [active, setActive] = useState(0);

  const handleTitle = (e, index) => {
    setTitle(() => e.target.textContent.toLowerCase());
    setActive(index);
  };
  const handleDisplay = () => {
    switch (title) {
      case "individual":
        return <IndividualRegistration />;
      case "corporate":
        return <CorporateRegistration />;
      default:
        <IndividualRegistration />;
    }
  };

  return (
    <>
      {showModal && (
        <section className="relative max-w-[500px] px-[42px] bg-white rounded-[40px] flex flex-col h-screen justify-center items-center">
          <div className="flex  my-4 md:gap-x-[0.2rem] justify-center ">
            <FaUserPlus className="text-[2rem] text-blue" />
            <div className="h-[2.5rem] ml-[1rem] mr-[1rem] w-[3px] bg-black"></div>
            <h2 className="title text-blue  text-[24px] font-[700]">SIGN UP</h2>
          </div>
          {showModal ? (
            <FaTimes
              onClick={() => setShowRegister(false)}
              className="text-blue z-[99999] text-[1.3rem] absolute top-[1rem] right-[1rem]  cursor-pointer"
            />
          ) : null}

          <ul className="mt-[1rem] grid grid-cols-2 gap-4">
            {typeOfRegistration.map((title, index) => {
              return (
                <li
                  className={`${
                    active === index
                      ? "text-blue border-b-[0.2rem] border-b-blue"
                      : "text-black"
                  } font-[700] cursor-pointer capitalize`}
                  key={index}
                  onClick={(e) => handleTitle(e, index)}
                >
                  {title}
                </li>
              );
            })}
          </ul>
          <div className="mt-[1rem]">{handleDisplay()}</div>
        </section>
      )}

      {!showModal && (
        <section className=" bg-blue py-[1rem] flex h-screen justify-center items-center">
          {/* className=" */}
          <div className=" border  bg-white p-2 py-[2rem] px-[20px] mx-[1.5rem] md:px-[42px] rounded-[30px] md:rounded-[50px] max-w-[500px]">
            <div className="flex my-4 md:gap-x-[0.2rem] justify-center items-center ">
              <FaUserPlus className="text-[2rem] text-blue" />
              <div className="h-[2.5rem] ml-[1rem] mr-[1rem] w-[3px] bg-black"></div>
              <h2 className="title text-blue  text-[1.5rem] font-[700]">
                SIGN UP
              </h2>
            </div>
            {showModal ? (
              <FaTimes
                onClick={() => setShowRegister(false)}
                className="text-blue z-[99999] text-[1.3rem] absolute top-[1rem] right-[1.5rem] mt-3 cursor-pointer"
              />
            ) : null}
            <div className="mt-[1rem] flex justify-center">
              <ul className=" grid justify-center  grid-cols-2 gap-4">
                {typeOfRegistration.map((title, index) => {
                  return (
                    <li
                      className={`${
                        active === index
                          ? "text-blue  border-b-blue border-b-[0.2rem]"
                          : "text-black"
                      } font-[700] cursor-pointer capitalize`}
                      key={index}
                      onClick={(e) => handleTitle(e, index)}
                    >
                      {title}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-[1rem]">{handleDisplay()}</div>
          </div>
        </section>
      )}
    </>
  );
};