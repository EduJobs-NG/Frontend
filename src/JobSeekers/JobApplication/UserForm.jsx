import React, { useState } from 'react';
import { ContactInfo } from './ContactInfo';
import { SubmitResume } from './SubmitResume';
import { useAuth } from '../../context/auth.context';
import { ScreenerQuestions } from './ScreenerQuestions';
import { ReviewApplication } from './ReviewApplication';
import { SuccessfulApplication } from './SuccessfulApplication';


export const UserForm = ({ job }) => {
  const { user } = useAuth();
  const { phone_number, user: { email } } = user;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    resume: "",
    cover_letter: '',
    why_work_with_us: '',
    email_address: email,
    phone_number: phone_number,
    job: job.id
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleJobApplication = () => {
    switch (step) {
      case 1:
        return <SubmitResume
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
          job={job}
        />
      case 2:
        return <ScreenerQuestions
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
          job={job}
        />
      case 3:
        return <ContactInfo
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
          job={job}
        />
      case 4:
        return <ReviewApplication
          nextStep={nextStep}
          setStep={setStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
          job={job}
        />
      case 5:
        return <SuccessfulApplication
          nextStep={nextStep}
          setStep={setStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
          job={job}
        />

      default:
        return <SubmitResume
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
          job={job}
        />

    }
  }


  return (
    <section>
      {handleJobApplication()}
    </section>
  )
}
