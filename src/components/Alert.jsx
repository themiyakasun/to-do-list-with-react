import React from 'react';
import { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className='my-2 px-5'>
      <p className={`${type === 'danger' ? 'bg-[#ed6b5c]' : 'bg-[#32a852]'}`}>
        {msg}
      </p>
    </div>
  );
};

export default Alert;
