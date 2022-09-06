import React, {useState} from 'react';
import { SubmitResume } from './SubmitResume';
import { ScreenerQuestions } from './ScreenerQuestions';
import { ContactInfo } from './ContactInfo';
import { ReviewApplication } from './ReviewApplication';

export const UserForm = ({job}) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        resume: '',
        why_work_with_us:'',
        cover_letter:'',
        email_address:'',
        phone_number:'',
    })
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
