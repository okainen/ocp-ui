import React from 'react';
// import {withRouter} from 'react-router';
// import {RouteComponentProps} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Footer from '@/components/footer';
import CourseItem from './courseItem';
import styles from './MyCourses.scss';
import { State } from '@/redux/store';
// import _ from 'lodash';

type MyCoursesProps = {};

// const MyCourses: React.FC<MyCoursesProps & RouteComponentProps> = ({
const MyCourses: React.FC<MyCoursesProps> = ({...props}) => {
  const courseIds = useSelector((state: State) => state.entities.courses.allIds);

  return (
    <div className={styles.myCourses}>
      <div className={styles.courses}>
        {courseIds.map((courseId: string) => (
          <CourseItem courseId={courseId} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

// export default withRouter(MyCourses);
export default MyCourses;
