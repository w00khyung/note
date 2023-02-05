import { useEffect, useState } from 'react';

export const useCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    console.log('isChecked', isChecked);
  }, [isChecked]);

  return {
    isChecked,
    onChange: () => setIsChecked(!isChecked),
  };
};
