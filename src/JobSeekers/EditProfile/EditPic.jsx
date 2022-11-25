import { Crop } from './Crop';
import React, { useState, useContext } from "react";
import { useFormik, Formik, Form } from "formik";
import { ThreeDots } from "react-loader-spinner";
import { FaBars, FaTimes } from "react-icons/fa";
import AuthContext from "../../context/AuthContext";
import { FormInputBox } from '../../components/Forms/FormInputBox';
import * as Yup from 'yup';
import useAxios from "../../utils/useAxios";

const validationSchema = Yup.object({
  avatar: Yup.string().required('Required')
});

export const EditPic = ({ setShowPic }) => {
  const api = useAxios();
  const [pop, setPop] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { getUserMeHandler } = useContext(AuthContext);

  const onSubmit = async (values) => {
    console.log(values)
    setIsLoading(true);
    const data = new FormData();
    data.append('avatar', values.avatar);
    console.log(values)
    console.log(data)
    const response = await api.put(`/jobseeker/user-profile-update/`, data)
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });

    if (response) {
      setIsLoading(false);
      setShowPic(false);
      getUserMeHandler();
      console.log(response);
    }
  };

  const onCancel = () => {
    setPop(() => null);
    setData(() => null);
  };

  const updater = (url) => {
    setData(() => url);
    setPop(() => false);
  };

  const formik = useFormik({
    onSubmit,
    validationSchema,
    validateOnBlur: true,
    initialValues: { avatar: '' },
  });
  return <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      {pop ? <Crop imageUrl={data} close={setPop} cancel={onCancel} update={updater} /> : null}
      <div className="relative w-auto my-6 mx-3 max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <FaTimes
              onClick={() => setShowPic(false)}
              className="text-blue z-[900] text-[1.3rem] absolute right-5  cursor-pointer"
            />

            <h3 className="text-[1.2rem] font-semibold">Change Image</h3>
            <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <p>Upload a headshot of yourself.</p>
            <Formik>
              <Form onSubmit={formik.handleSubmit}>
                <div className="w-full max-w-xl grid  mt-[1rem]">

                  <FormInputBox name="avatar" accept="image/*" onChange={({ currentTarget: t }) => {
                    // if (t.files && t.files[0]) {
                    //   setPop(() => true);
                    //   let reader = new FileReader();
                    //   reader.onload = e => { setData(() => e.target.result); }
                    //   reader.readAsDataURL(t.files[0]);
                    // }
                    formik.setFieldValue("avatar", t.files[0]);
                  }} className="border p-2.5 block w-full mt-[2rem]  border-solid border-[#808080] rounded-lg outline-none" type='file' />
                  {formik.touched.avatar && formik.errors.avatar ? (<small className="text-red-600">{formik.errors.avatar}</small>) : null}

                  <div className="flex items-center justify-end">
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
  </>;
};
