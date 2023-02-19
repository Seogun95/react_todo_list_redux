import { useRef, useEffect } from 'react';

const useInputAutoFoucs = () => {
  const inputFoucsRef = useRef();

  useEffect(() => {
    inputFoucsRef.current.focus();
  }, []);

  return inputFoucsRef;
};

export default useInputAutoFoucs;
