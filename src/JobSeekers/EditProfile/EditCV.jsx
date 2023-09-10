import * as Yup from "yup";
import api from "../../utils/api";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useFormik, Formik, Form } from "formik";
import { ThreeDots } from "react-loader-spinner";
import { useAuth } from "../../context/auth.context";
import { FormInputBox } from "../../components/Forms/FormInputBox";

const validationSchema = Yup.object({ file: Yup.string().required("Required") });

export const EditCV = ({ setShowEditCV, cv }) => {
  const { getUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values) => {
    setIsLoading(true);

    const data = new FormData();
    data.append("file", values.file);
    data.append("name", values.file.name);
    const response = await api.put(`/jobseeker/user-profile/me/cv/${cv.id}/`, data)
      .catch((err) => {
        console.log(err);
        toast.error(err);
        setIsLoading(false);
      });

    if (response && response.data) {
      setIsLoading(false); setShowEditCV(false);
      toast.success("Your changes have been successfully saved");
      getUser()
    }
  };
  const formik = useFormik({
    onSubmit,
    validationSchema,
    validateOnBlur: true,
    initialValues: { file: "", name: '' },
  });
  return (
    <>
      <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full  md:mt-0 my-6 mx-3 max-w-2xl">
          {/*content*/}
          <div className="border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex  items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <FaTimes
                onClick={() => setShowEditCV(false)}
                className="text-blue z-[900] text-[1.3rem] absolute right-5  cursor-pointer"
              />

              <h3 className="text-[1.2rem] font-semibold">Edit CV</h3>
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
                  <div className="grid ">

                    <div className="w-full  max-w-lg">
                      <FormInputBox
                        name="file"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "file",
                            event.currentTarget.files[0]
                          );
                        }}
                        className="border p-2.5 block w-full mt-[2rem]  border-solid border-[#808080] rounded-lg outline-none"
                        type="file"
                      />
                      {formik.touched.file && formik.errors.file ? (
                        <small className="text-red-600">
                          {formik.errors.file}
                        </small>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-[3rem] flex justify-center">
                    {!isLoading && (
                      <button
                        className="bg-blue opacity-100  px-[5rem] text-white rounded-[5px] p-2"
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
                </Form>
              </Formik>
            </div>{" "}
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
