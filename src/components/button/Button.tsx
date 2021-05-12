import React from 'react';
import styles from './Button.scss';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button {...props} className={`${className} ${styles.button}`}>
      {children}
    </button>
  );
};

export default Button;
