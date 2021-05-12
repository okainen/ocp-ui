import React from 'react';
import styles from './NotFound.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.not_found}>
      <h1 style={{fontSize: '170px'}}>404</h1>
      <h1>Not Found.</h1>
    </div>
  );
};

export default NotFound;
