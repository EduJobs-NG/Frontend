import React, { useState } from "react";
import AddIcon from "../../assets/AddIcon.png";
import { AddCredentials } from "./AddCredentials";
import { DeleteCredential } from "../DeleteProfile/DeleteCredential";
import { AddCV } from "./AddCV";
import { EditCV } from "./EditCV";
import { useAuth } from "../../context/auth.context";

export const Credentials = () => {
  const { user, getUser } = useAuth(), cv = user?.cv, credentials = user?.credentials;

  const [showAddCV, setShowAddCV] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEditCV, setShowEditCV] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [showAddCredentials, setShowAddCredentials] = useState(false);

  const addCredentialsHandler = () => {setShowAddCredentials(true);};
  const editCVHandler = () => {setShowEditCV(true);setSelectedItem(cv);};
  const deleteSelectedItem = (item) => {setSelectedItem(item);setShowDelete(true);};

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
          getUserMeHandler={getUser}
          item={selectedItem}
        />
      )}
      {showAddCV && <AddCV setShowAddCV={setShowAddCV} />}
      {showEditCV && (
        <EditCV cv={cv} setShowEditCV={setShowEditCV} item={selectedItem} />
      )}

      <div>
        <h1 className="text-[1.2rem]  font-[700]">CV/Resume</h1>

        {cv && (
          <div className="border relative mt-[0.5rem] px-[2rem] py-[1rem] rounded-lg border-[#808080]">
            <div className="absolute right-5">
              <div className="flex flex-row justify-end gap-6 ">
                <p
                  onClick={() => editCVHandler()}
                  className="text-blue cursor-pointer"
                >
                  Edit
                </p>
              </div>
            </div>
            <p>
              <a className="text-blue underline" href={cv?.file}>
                {cv?.name}
              </a>
            </p>
          </div>
        )}
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

      <div className="mt-[4rem]">
        <h1 className="text-[1.2rem] font-[700]">Certificates</h1>
        <p>Add maximum of 3 of your necessary certificate.</p>
        {credentials && credentials.length > 0 ? (
          credentials.map((item) => {
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
          })
        ) : (
          <div className="bg-[#f0f0f0] px-2 mt-[2rem] flex items-end justify-center text-center  rounded-md pb-[1rem] pt-[5rem]">
            <p>
              Please click on “Add Certificate” to record your certificates.
            </p>
          </div>
        )}

        <div
          className={
            credentials && credentials.length === 3
              ? "hidden"
              : "mt-[3rem] items-baseline gap-3 text-center flex flex-row justify-center"
          }
        >
          <div
            className="cursor-pointer"
            onClick={() => addCredentialsHandler()}
          >
            <img src={AddIcon} alt="" />
          </div>
          <span
            className="text-blue font-[700] text-[1.2rem] cursor-pointer"
            onClick={() => addCredentialsHandler()}
          >
            Add Certificate
          </span>
        </div>

        {/* {credentials.length === 0 && (
          <div className="bg-[#f0f0f0] px-2 mt-[2rem] flex items-end justify-center text-center  rounded-md pb-[1rem] pt-[5rem]">
            <p>Please click on “Add Certificate” to record your certificate</p>
          </div>
        )} */}
      </div>
    </section>
  );
};
