import { useState } from 'react';

function useInputOnChange() {
  const [value, setValue] = useState('');

  const handler = (e) => {
    setValue(e.target.value);
  };
  return [value, setValue, handler];
}
export default useInputOnChange;
