import { useState } from 'react';

const usePostJobWizard = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const next = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const back = () => {
    setStep((prev) => prev - 1);
  };

  const reset = () => {
    setStep(0);
    setFormData({});
  };

  return {
    step,
    formData,
    next,
    back,
    reset,
  };
};

export default usePostJobWizard;
