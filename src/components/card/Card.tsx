import React from 'react';
import styles from './Card.scss';

const Card: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={`${styles.card} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
