import React from 'react';
import {withRouter} from 'react-router';
import {RouteComponentProps} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CourseItem from '@/components/courseItem';
import styles from './welcome.scss';
import {State} from '@/redux/store';

type WelcomeProps = {};

const Welcome: React.FC<WelcomeProps & RouteComponentProps> = ({}) => {
  const courseIds = useSelector(
    (state: State) => state.entities.courses.allIds
  );

  return (
    <div className={styles.welcome}>
      <main className={styles.newCourses}>
        <h1>New courses:</h1>
        <section className={styles.items}>
          {courseIds.map((courseId: string, i: number) => (
            <CourseItem courseId={courseId} key={i} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default withRouter(Welcome);
