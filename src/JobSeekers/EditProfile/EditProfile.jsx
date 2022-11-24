import React, { useState, useContext, useEffect } from "react";
import { PersonalInfo } from "./PersonalInfo";
import { ProfessionalInfo } from "./ProfessionalInfo";
import { ContactInfo } from "./ContactInfo";
import { Credentials } from "./Credentials";
import AuthContext from "../../context/AuthContext";
import { Link, useSearchParams } from "react-router-dom";

export const EditProfile = () => {
  const [active, setActive] = useState(0);
  const [searchParams] = useSearchParams();
  const tabIndex = searchParams.get("tab");
  const { user, getUserMeHandler } = useContext(AuthContext);
  const [title, setTitle] = useState("personal information");
  
  const titles = [
    "personal information",
    "education",
    "credentials",
    "contact information",
  ];
  const handleTitle = (e, index, tabIndex) => {
    // setTitle(() => e.target.textContent.toLowerCase());
    setTitle(tabIndex);
    setActive(index);
  };
  const handleDisplay = () => {
    switch (title) {
      case "0":
        return <PersonalInfo setActive={setActive} />;
      case "1":
        return <ProfessionalInfo setActive={setActive} />;

      case "2":
        return <Credentials setActive={setActive} />;
      case "3":
        return <ContactInfo setTitle={setTitle} />;
      default:
        return <PersonalInfo setActive={setActive} />;
    }
  };

  useEffect(() => {
    setTitle(tabIndex);
  }, [tabIndex]);
  return (
    <>
      <section className="border-b  border-b-[#808080] ">
        <ul className=" flex flex-row overflow-x-scroll lg:overflow-hidden  whitespace-nowrap justify-between">
          {titles.map((title, index) => {
            return (
              <Link to={`?tab=${index}`}>
                <li
                  className={`${
                    active === index
                      ? "text-blue text-[1.2rem]  border-b-[0.2rem] border-b-blue"
                      : "text-black"
                  } cursor-pointer capitalize mr-[3rem] text-[1.1rem] font-[700] `}
                  key={index}
                  onClick={(e) => handleTitle(e, index, tabIndex)}
                >
                  {title}
                </li>
              </Link>
            );
          })}
        </ul>
      </section>
      <section className="mt-[2rem]">
        <div className="">{handleDisplay()}</div>
      </section>
    </>
  );
};
