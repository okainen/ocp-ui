import React from 'react';
import {withRouter} from 'react-router';
import {RouteComponentProps} from 'react-router-dom';
import {useSelector} from 'react-redux';
import PaginationNav from '@/components/paginationNav';
import Footer from '@/components/footer';
import CourseItem from '@/components/courseItem';
import styles from './Search.scss';
import { State } from '@/redux/store';

type SearchProps = {};

const Search: React.FC<SearchProps & RouteComponentProps> = ({}) => {
  const courseIds = useSelector((state: State) => state.entities.courses.allIds);

  return (
    <div className={styles.search}>
      <main className={styles.results}>
        <h1>"course": 25 results</h1>
        <section className={styles.items}>
          {courseIds.map((courseId: string) => (
            <CourseItem courseId={courseId} />
          ))}
        </section>
        <PaginationNav />
      </main>
      <Footer />
    </div>
  );
};

export default withRouter(Search);
