import React from 'react';
import './TextField.scss';

const TextField: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return <input {...props} type='text' />;
};

export default TextField;
