import { useState, useEffect } from 'react';

function useLocalStorage(key, deValue) {
  const [state, setState] = useState(() => {
    let intVal;
    try {
      intVal = JSON.parse(localStorage.getItem(key) || String(deValue));
    } catch (e) {
      intVal = deValue;
    }
    return intVal;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, setState];
}

export default useLocalStorage;
