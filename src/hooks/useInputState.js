import { useState } from 'react';

const useInputState = (intialVal = '') => {
  const [field, setField] = useState(intialVal);
  const handleChange = e => {
    setField(e.target.value);
  };
  const reset = () => {
    setField('');
  };
  return [field, handleChange, reset];
};

export default useInputState;
