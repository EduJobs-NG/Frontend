import React, { useState } from 'react';
import { JobseekerNavbar } from '../components/JobseekerNavbar';
import { CvPayment } from '../../components/paystack/CvPayment';

export const JobseekerCv = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [summary, setSummary] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [competence, setCompetence] = useState('');
  // const [loading, setLoading] = useState('');

  return (
    <div>
      <JobseekerNavbar />
      <section className='relative bg-jobs lg:pt-[20px] lg:pb-[70px] h-[500px] bg-center bg-cover bg-no-repeat'>
        <div className='container mx-auto h-full flex flex-col items-center justify-center gap-8'>
          <h2 className='title text-[35px] font-heading lg:text-[66px] font-[700] text-white text-center z-10'>
            Get a Professional CV
          </h2>
        </div>

        <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#02378B] opacity-60'></div>
      </section>
      <div className=''>
        <div className='min-h-screen p-6 bg-gray-100 flex items-center justify-center'>
          <div className='container max-w-screen-lg mx-auto'>
            <div>
              <h2 className='font-semibold text-xl text-gray-600'>
                Get a new CV
              </h2>
              <p className='text-gray-500 mb-6'>
                Fill the form below correctly
              </p>

              <div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
                <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
                  <div className='text-gray-600'>
                    <p className='font-medium text-lg'>Personal Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div className='lg:col-span-2'>
                    <form>
                      <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
                        <div className='md:col-span-5'>
                          <label htmlFor='first_name'>First Name</label>
                          <input
                            type='text'
                            name='first_name'
                            id='first_name'
                            className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>

                        <div className='md:col-span-5'>
                          <label htmlFor='last_name'>Last Name</label>
                          <input
                            type='text'
                            name='last_name'
                            id='last_name'
                            className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                          />
                        </div>

                        <div className='md:col-span-5'>
                          <label htmlFor='email'>Email Address</label>
                          <input
                            type='text'
                            name='email'
                            id='email'
                            className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='email@domain.com'
                            required
                          />
                        </div>

                        <div className='md:col-span-3'>
                          <label htmlFor='address'>Address / Street</label>
                          <input
                            type='text'
                            name='address'
                            id='address'
                            className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder=''
                            required
                          />
                        </div>

                        <div className='md:col-span-2'>
                          <label htmlFor='city'>City</label>
                          <input
                            type='text'
                            name='city'
                            id='city'
                            className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder=''
                            required
                          />
                        </div>

                        <div className='md:col-span-2'>
                          <label htmlFor='country'>Country / region</label>
                          <div className='h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
                            <input
                              name='country'
                              id='country'
                              placeholder='Country'
                              className='px-4 appearance-none outline-none text-gray-800 w-full bg-transparent'
                              value={country}
                              onChange={(e) => setCountry(e.target.value)}
                              required
                            />
                            <button
                              tabIndex='-1'
                              className='cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600'
                            >
                              <svg
                                className='w-4 h-4 mx-2 fill-current'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <line x1='18' y1='6' x2='6' y2='18'></line>
                                <line x1='6' y1='6' x2='18' y2='18'></line>
                              </svg>
                            </button>
                            <button
                              tabIndex='-1'
                              htmlFor='show_more'
                              className='cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600'
                            >
                              <svg
                                className='w-4 h-4 mx-2 fill-current'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <polyline points='18 15 12 9 6 15'></polyline>
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className='md:col-span-2'>
                          <label htmlFor='state'>State / province</label>
                          <div className='h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
                            <input
                              name='state'
                              id='state'
                              placeholder='State'
                              className='px-4 appearance-none outline-none text-gray-800 w-full bg-transparent'
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                              required
                            />
                            <button
                              tabIndex='-1'
                              className='cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600'
                            >
                              <svg
                                className='w-4 h-4 mx-2 fill-current'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <line x1='18' y1='6' x2='6' y2='18'></line>
                                <line x1='6' y1='6' x2='18' y2='18'></line>
                              </svg>
                            </button>
                            <button
                              tabIndex='-1'
                              htmlFor='show_more'
                              className='cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600'
                            >
                              <svg
                                className='w-4 h-4 mx-2 fill-current'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <polyline points='18 15 12 9 6 15'></polyline>
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className='md:col-span-1'>
                          <label htmlFor='zipcode'>ZipCode</label>
                          <input
                            type='text'
                            name='zipcode'
                            id='zipcode'
                            className='transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                            placeholder=''
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            required
                          />
                        </div>
                        <div className='md:col-span-5'>
                          <label htmlFor='summary'>Summary</label>
                          <textarea
                            type='text'
                            name='summary'
                            id='summary'
                            className='h-40 border mt-1 rounded px-4 w-full bg-gray-50'
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                            required
                          >
                            {' '}
                          </textarea>
                        </div>
                        <div className='md:col-span-5'>
                          <label htmlFor='education'>Education</label>
                          <textarea
                            type='text'
                            name='education'
                            id='education'
                            className='h-40 border mt-1 rounded px-4 w-full bg-gray-50'
                            value={education}
                            onChange={(e) => setEducation(e.target.value)}
                            required
                          >
                            {' '}
                          </textarea>
                        </div>
                        <div className='md:col-span-5'>
                          <label htmlFor='experience'>Experience</label>
                          <textarea
                            type='text'
                            name='experience'
                            id='experience'
                            className='h-40 border mt-1 rounded px-4 w-full bg-gray-50'
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            required
                          >
                            {' '}
                          </textarea>
                        </div>
                        <div className='md:col-span-5'>
                          <label htmlFor='skills'>Skills</label>
                          <textarea
                            type='text'
                            name='skills'
                            id='skills'
                            className='h-40 border mt-1 rounded px-4 w-full bg-gray-50'
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                            required
                          >
                            {' '}
                          </textarea>
                        </div>
                        <div className='md:col-span-5'>
                          <label htmlFor='competence'>Competence</label>
                          <textarea
                            type='text'
                            name='competence'
                            id='competence'
                            className='h-40 border mt-1 rounded px-4 w-full bg-gray-50'
                            value={competence}
                            onChange={(e) => setCompetence(e.target.value)}
                            required
                          >
                            {' '}
                          </textarea>
                        </div>

                        <div className='md:col-span-5 text-right'>
                          <div className='inline-flex items-end'>
                            <CvPayment />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
