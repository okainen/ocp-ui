import React, {ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import styles from './CourseItem.scss';
import { State } from '@/redux/store';

type CourseItemProps = {
  courseId: string;
};

const CourseItem: React.FC<CourseItemProps> = ({courseId}) => {
  const course = useSelector(
    (state: State) => state.entities.courses.byId[courseId]
  );

  return (
    <NavLink to={`/course/${courseId}`} className={styles.courseItem}>
      {/* <div className={styles.courseItem}> */}
      {/* <div className='img'>{image}</div> */}
      <div className={styles.thumbnail}></div>
      <div className={styles.details}>
        <div className={styles.name}>{course.name}</div>
        {/* <div className={styles.author}>{course.author}</div> */}
        <div className={styles.author}>Author</div>
      </div>
      {/* </div> */}
    </NavLink>
  );
};

export default CourseItem;
