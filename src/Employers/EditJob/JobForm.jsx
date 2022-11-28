/* eslint-disable react-hooks/exhaustive-deps */
import api from '../../utils/axios';
import { toast } from 'react-toastify';
import { BasicInfo1 } from './BasicInfo1';
import { BasicInfo2 } from './BasicInfo2';
import { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const JobForm = () => {
  // params hook
  const { id } = useParams();

  // states
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    deadline: '', title: '', organization_name: '', location: '',
    summary: '', requirements: '', job_type: '', open_status: '',
    min_pay_range: '', max_pay_range: '', resume_submit: ''
  });

  // effects
  useEffect(() => { fetchData(); }, [id]);

  // methods
  const fetchData = async () => {
    try {
      const res = await api.get(`/employer/jobs/${id}/`);
      setFormData(() => res.data);
    }
    catch (err) {
      console.error(err);
      toast.error('Job ' + err?.response?.data?.detail || 'There was an error fetching data');
    };
  };


  // objects and methods
  const steps = { 1: BasicInfo1, 2: BasicInfo2 };
  const nextStep = () => setStep(prev => ++prev);
  const prevStep = () => setStep(prev => --prev);

  // memo
  const InfoTab = useMemo(() => steps[step] || steps[1], [step, steps]);

  return <section>
    <InfoTab setStep={setStep} formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} step={step} id={id} />
  </section>;
};
