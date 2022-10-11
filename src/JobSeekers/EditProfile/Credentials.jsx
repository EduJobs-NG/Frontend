import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import AddIcon from "../../assets/AddIcon.png";
import { AddCredentials } from "./AddCredentials";
import { DeleteCredential } from "../DeleteProfile/DeleteCredential";
import { AddCV } from "./AddCV";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { EditCV } from "./EditCV";

export const Credentials = () => {
  const { user, getUserMeHandler } = useContext(AuthContext);
  const credentials = user?.credentials;
  const cv = user?.cv;
  const certificates = credentials.filter((item) => {
    return item.credential_type === "Certificate";
  });
  const [selectedItem, setSelectedItem] = useState({});
  const [showDelete, setShowDelete] = useState(false);
  const [showAddCredentials, setShowAddCredentials] = useState(false);
  const [showAddCV, setShowAddCV] = useState(false);
  const [showEditCV, setShowEditCV] = useState(false);

  const addCredentialsHandler = () => {
    setShowAddCredentials(true);
  };
  const deleteSelectedItem = (item) => {
    setSelectedItem(item);
    setShowDelete(true);
  };
  const editCVHandler = () => {
    setShowEditCV(true);
    setSelectedItem(cv)
  }
  return (
    <section>
      {showAddCredentials && (
        <AddCredentials
          credentials={credentials}
          showAddCredentials={showAddCredentials}
          setShowAddCredentials={setShowAddCredentials}
        />
      )}
      {showDelete && (
        <DeleteCredential
          credentials={credentials}
          setShowDelete={setShowDelete}
          getUserMeHandler={getUserMeHandler}
          item={selectedItem}
        />
      )}
      {showAddCV && <AddCV setShowAddCV={setShowAddCV} />}
      {showEditCV && <EditCV cv={cv} setShowEditCV={setShowEditCV} item={selectedItem} />}

      <div>
        <h1 className="text-xl font-[700]">CV/Resume</h1>
        
        <div className="border relative mt-[0.5rem] px-[2rem] py-[1rem] rounded-lg border-[#808080]">
        <div className="absolute right-5">
                <div className="flex flex-row justify-end gap-6 ">
               <p onClick={()=> editCVHandler()} className="text-blue cursor-pointer">Edit</p>
                  {/* <FaPencilAlt onClick={()=> editCVHandler()} className="text-blue cursor-pointer"/> */}
                  {/* <FaTrash
                    className="cursor-pointer text-blue ml-5 md:ml-0"
                    
                  /> */}
                </div>
              </div>
                  <p>
                    <a className="text-blue underline" href={cv.file}>
                     MY CV
                    </a>
                  </p>
                </div>

        <div
          className={
            cv !== null
              ? "hidden"
              : "mt-[3rem] items-baseline gap-3 text-center flex flex-row justify-center"
          }
        >
          <div>
            <img src={AddIcon} alt="" />
          </div>
          <span
            className="text-blue font-[700] text-2xl cursor-pointer"
            onClick={() => setShowAddCV(true)}
          >
            Add CV
          </span>
        </div>
      </div>

      <div className="mt-[4rem]">
        <h1 className="text-xl font-[700]">Credentials</h1>
        <p>Add all of your necessary credentials.</p>
       {credentials && <p className="mt-[2rem] font-[700]">Certificates</p>}
        {certificates &&
          certificates.map((item) => {
            return (
              <div key={item.id} className="">
                <div className="border relative mt-[0.5rem] px-[2rem] py-[1rem] rounded-lg border-[#808080]">
                  <p
                    className="absolute cursor-pointer right-5 text-red-600"
                    onClick={() => deleteSelectedItem(item)}
                  >
                    Remove
                  </p>
                  <p>
                    <a className="text-blue underline" href={item.file}>
                      {item.name}
                    </a>
                  </p>
                </div>
              </div>
            );
          })}

        <div
          className={
            credentials.length === 3
              ? "hidden"
              : "mt-[3rem] items-baseline gap-3 text-center flex flex-row justify-center"
          }
        >
          <div>
            <img src={AddIcon} alt="" />
          </div>
          <span
            className="text-blue font-[700] text-2xl cursor-pointer"
            onClick={() => addCredentialsHandler()}
          >
            Add Credentials
          </span>
        </div>

        {credentials.length === 0 && (
          <div className="bg-[#f0f0f0] px-2 mt-[2rem] flex items-end justify-center text-center  rounded-md pb-[1rem] pt-[5rem]">
            <p>
              Please click on “Add Credentials” to record your credentials and
              CV.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
