import React, { useContext, useEffect, useState } from 'react'
import { FormInputBox } from '../../components/Forms/FormInputBox';
import * as Yup from 'yup';
import { useFormik, Formik, Form } from 'formik';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { FaBars, FaTimes } from 'react-icons/fa';
import CustomSelect from '../../components/Forms/CustomSelect';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const validationSchema = Yup.object({
    credential_type: Yup.string().required('Required'),
    file: Yup.string().required('Required')
})
export const AddCredentials = ({ setShowAddCredentials }) => {
    const { updateUser, authTokens } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (values) => {
        const data = new FormData();
        data.append('file', values.file);
        data.append('credential_type', values.credential_type)
        data.append('name', values.file.name)
        setIsLoading(true)
        const response = await axios
            .post(`${process.env.REACT_APP_BASE_URL}jobseeker/user-profile/me/credentials/`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${authTokens.auth_token}`
                }
            })
            .catch(err => {
                console.log(err)
                toast.error(err)
                setIsLoading(false)
            });

        if (response && response.data) {
            setIsLoading(false)
            setShowAddCredentials(false)
            toast.success('Your changes have been successfully saved')
            updateUser('credentials', [response.data])
            console.log(response.data)
           
            // console.log(response)
        }

    }
    const formik = useFormik({
        initialValues: {
            credential_type: "",
            file: '',
            name: ''
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,

    })
    return (

        <>
            <ToastContainer />

            <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full  md:mt-0 my-6 mx-3 max-w-2xl">

                    {/*content*/}
                    <div className="border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex  items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <FaTimes
                                onClick={() => setShowAddCredentials(false)}
                                className='text-blue z-[900] text-[1.3rem] absolute right-5 mt-3 cursor-pointer' />

                            <h3 className="text-3xl font-semibold">
                                Add Credentials
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <Formik>
                                <Form onSubmit={formik.handleSubmit}>
                                    <div className='grid '>
                                        <div className='w-full  max-w-lg'>
                                            <CustomSelect
                                                label="Credential Type"
                                                name="credential_type"
                                                id="credential_type"
                                                placeholder=""
                                                className="border p-2.5 block w-full  border-solid border-[#808080] rounded-lg outline-none"
                                                onChange={formik.handleChange}
                                            >
                                                <option value="">Select a credential type</option>
                                                <option value="CV">CV/Resume</option>
                                                <option value="Certificate">Certificate</option>
                                                <option value="Others">Others</option>

                                            </CustomSelect>

                                            {formik.touched.credential_type && formik.errors.credential_type ? (<small className="text-red-600">{formik.errors.credential_type}</small>) : null}

                                        </div>
                                        <div className='w-full  max-w-lg'>
                                            <FormInputBox name="file" onChange={(event) => {
                                                formik.setFieldValue("file", event.currentTarget.files[0])
                                            }} className="border p-2.5 block w-full mt-[2rem]  border-solid border-[#808080] rounded-lg outline-none" type='file' />
                                            {formik.touched.file && formik.errors.file ? (<small className="text-red-600">{formik.errors.file}</small>) : null}
                                        </div>


                                    </div>


                                    <div className='mt-[3rem] flex justify-center'>
                                        {!isLoading && <button className='bg-blue opacity-100  px-[5rem] text-white rounded-[5px] p-2' type="submit">SAVE</button>}
                                        {isLoading && (
                                            <div className='flex justify-center'>
                                                <ThreeDots type="ThreeDots"
                                                    width={100} height={20} color="blue"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Form>
                            </Formik>
                        </div>      {/*footer*/}

                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
