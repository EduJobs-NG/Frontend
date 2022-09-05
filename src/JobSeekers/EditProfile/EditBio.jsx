import React, { useState, useContext } from "react";
import { useFormik, Formik, Form } from "formik";
import { ThreeDots } from "react-loader-spinner";
import { FaBars, FaTimes } from "react-icons/fa";
import AuthContext from "../../context/AuthContext";
import axios from "axios";

export const EditBio = ({ setShowBio }) => {
  const { user, authTokens, getUserMeHandler } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const { bio } = user;

  const onSubmit = async (values) => {
    setIsLoading(true);
    const response = await axios
      .put(
        `${process.env.REACT_APP_BASE_URL}auth/account/user-profile-update/`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${authTokens.auth_token}`,
          },
        }
      )
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });

    if (response) {
      setIsLoading(false);
      setShowBio(false);
      getUserMeHandler();
      console.log(response);
    }
  };

  const formik = useFormik({
    initialValues: {
      bio,
      
    },

    onSubmit,
  });
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-3 max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <FaTimes
                onClick={() => setShowBio(false)}
                className="text-blue z-[900] text-[1.3rem] absolute right-5 mt-3 cursor-pointer"
              />

              <h3 className="text-3xl font-semibold">Edit Bio</h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <div className="w-full max-w-xl grid  mt-[1rem]">
                    <div>
                      {/* <label className='text-xl mb-3 font-[700]'>Edit Bio</label> */}
                      <textarea
                        value={formik.values.bio}
                        name="bio"
                        id="bio"
                        onChange={formik.handleChange}
                        className="w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 "
                        placeholder="Say something about yourself"
                        cols="100"
                        rows="7"
                      ></textarea>
                    </div>

                    <div className="flex items-center justify-end ">
                      <div className="mt-[1.6rem]">
                        {!isLoading && (
                          <button
                            className="bg-blue  opacity-100 block w-full px-6 text-white rounded-[5px] p-2"
                            type="submit"
                          >
                            SAVE
                          </button>
                        )}
                        {isLoading && (
                          <div className="flex justify-center">
                            <ThreeDots
                              type="ThreeDots"
                              width={100}
                              height={20}
                              color="blue"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40  bg-black"></div>
    </>
  );
};

