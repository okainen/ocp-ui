import React from 'react';
import {SEARCH} from '@/config/routes';
import TextField from '@/components/textField';
import classnames from 'classnames';
import styles from './PaginationNav.scss';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';

type PaginationNavProps = {};

const PaginationNav: React.FC<
  PaginationNavProps & React.HTMLProps<HTMLDivElement>
> = ({className, ...props}) => {
  const classes = classnames({[className || '']: !!className}, styles.paginationNav);
  const prevAndNextClasses = classnames(styles.item, styles.prevAndNext);

  return (
    <nav {...props} className={classes}>
      <span className={prevAndNextClasses}>
        <BsChevronLeft className={styles.icon} />
        <span>Prev</span>
      </span>
      <span className={`${styles.item} ${styles.active}`}>1</span>
      <span className={styles.item}>2</span>
      <span className={styles.item}>3</span>
      <span className={styles.item}>4</span>
      <span className={prevAndNextClasses}>
        <span>Next</span>
        <BsChevronRight className={styles.icon} />
      </span>
    </nav>
  );
};

export default PaginationNav;
