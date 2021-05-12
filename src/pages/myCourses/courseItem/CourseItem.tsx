import React, {ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import styles from './CourseItem.scss';
import { State } from '@/redux/store';

export type CourseItemProps = {
  courseId: string;
};

export const CourseItem: React.FC<CourseItemProps> = ({courseId}) => {
  const course = useSelector(
    (state: State) => state.entities.courses.byId[courseId]
  );

  return (
    <NavLink to={`/course/${courseId}`} className={styles.courseItem}>
      {/* <NavLink to={link}> */}
      {/* <div className={styles.courseItem}> */}
      {/* <div className='img'>{image}</div> */}
      <div className={styles.img}></div>
      <div className={styles.name}>{course.name}</div>
      {/* <div className={styles.author}>{course.author}</div> */}
      <div className={styles.author}>Author</div>
      {/* </div> */}
    </NavLink>
  );
};

export default CourseItem;
