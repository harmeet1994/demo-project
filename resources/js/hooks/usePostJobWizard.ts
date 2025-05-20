import { useState } from 'react';

const initialState = {
  step: 0,
  details: {
    jobTitle: '',
    workplaceType: '',
    jobType: '',
    experience: '',
    company: '',
    location: '',
  },
  description: '',
  jobId: null,
};  

export default function usePostJobWizard() {
  const [state, setState] = useState(initialState);

  const next = () => setState((s) => ({ ...s, step: s.step + 1 }));
  const back = () => setState((s) => ({ ...s, step: s.step - 1 }));
  const reset = () => setState(initialState);
  const setDetails = (details) => setState((s) => ({ ...s, details: { ...s.details, ...details } }));
  const setDescription = (desc) => setState((s) => ({ ...s, description: desc }));
  const setJobId = (id) => setState((s) => ({ ...s, jobId: id }));

  return {
    ...state,
    next,
    back,
    reset,
    setDetails,
    setDescription,
    setJobId,
  };
}
