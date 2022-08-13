import React, { useState } from 'react';
import { useFormik, Formik, Form } from 'formik';
import { ThreeDots } from 'react-loader-spinner';
import { FaBars, FaTimes } from 'react-icons/fa';



export const EditBionPic = ({setShow}) => {
    const [isLoading, setIsLoading] = useState(false);
   
    const formik = useFormik({
        initialValues: {
            bio: ''
        }
    })
    return (
        <>
        
          <div onClick={() => setShow(false)}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-3 max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                     Bio
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
             <Form>
                 <div className='w-full max-w-xl grid  mt-[1rem]'>
                     {/* <label className='text-xl mb-3 font-[700]'>Edit Bio</label> */}
                     <textarea value={formik.values.bio} name="bio" id="bio" onChange={formik.handleChange} className='w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 '
                         placeholder='Say something about yourself' cols="100" rows="7">
                     </textarea>
         <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">        
         
         <div className='mt-[1.6rem]'>
                         {!isLoading && <button  className= 'bg-blue  opacity-100 block w-full px-6 text-white rounded-md p-2' type="submit">SAVE</button>}
                         {isLoading && (
                             <div className='flex justify-center'>
                                 <ThreeDots type="ThreeDots"
                                     width={100} height={20} color="blue"
                                 />
                             </div>
                         )}
                     </div>
         {/* <button
           className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
           type="button"
          
         >
           Save Changes
         </button> */}
       </div>
                   
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



// <>
       
        // <section className='absolute top-[3rem]'>
        //     <div className='container flex flex-col items-center mx-auto'>
        //     <FaTimes className='text-blue text-[1.3rem] mt-3 cursor-pointer absolute right-5 top-5' />

        //         <div className='bg-white round-md w-full'>
        //         <Formik>
        //             <Form>
        //                 <div className='w-full max-w-xl grid  mt-[1rem]'>
        //                     <label className='text-xl font-[700]'>Edit Bio</label>
        //                     <textarea value={formik.values.bio} name="bio" id="bio" onChange={formik.handleChange} className='w-full border border-solid outline-none rounded-md resize-none border-[#808080]  p-2 '
        //                         placeholder='Say something about yourself' cols="100" rows="7">
        //                     </textarea>
        //                     <div className='mt-[1.6rem]'>
        //                         {!isLoading && <button disabled={!formik.isValid} className={!formik.isValid ? 'bg-blue block w-full text-white opacity-25 rounded-sm p-2' : 'bg-blue opacity-100 block w-full text-white rounded-sm p-2'} type="submit">SAVE</button>}
        //                         {isLoading && (
        //                             <div className='flex justify-center'>
        //                                 <ThreeDots type="ThreeDots"
        //                                     width={100} height={20} color="blue"
        //                                 />
        //                             </div>
        //                         )}
        //                     </div>
        //                 </div>
        //             </Form>

        //         </Formik>
        //     </div>

        //     </div>


        // </section>
       
        // </>