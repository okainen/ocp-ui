import React from 'react';
import styles from './Lecture.scss';

type LectureProps = {};

const Lecture: React.FC<LectureProps> = () => {
  return (
    <div className={styles.lecture}>
      <div className={styles.video}></div>
    </div>
  );
};

export default Lecture;
