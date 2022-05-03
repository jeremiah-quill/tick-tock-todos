import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultState) => {
  const currentState = JSON.parse(window.localStorage.getItem(key)) || defaultState;

  const [state, setState] = useState(currentState);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
