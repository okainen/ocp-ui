import React from 'react';
import styles from './Footer.scss';

const Footer: React.FC<React.HTMLProps<HTMLDivElement>> = props => {
  return (
    <footer className={styles.footer}>
      <p>Some Footer</p>
    </footer>
  );
};

export default Footer;
