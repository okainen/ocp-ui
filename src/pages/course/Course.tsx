import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router';
import {RouteComponentProps} from 'react-router';
import {Route, Switch, Redirect} from 'react-router-dom';
import CourseSidebar from './courseSidebar';
import Overview from '@/pages/overview';
import Week from '@/pages/week';
// import Grades from '../pages/Grades';
import styles from './Course.scss';

type CourseProps = {};

type RouteParams = {
  courseId: string;
};

const Course: React.FC<CourseProps & RouteComponentProps<RouteParams>> = ({
  match,

  ...props
}) => {
  const baseUrl = match.url;
  const {courseId} = match.params;

  return (
    <div className={styles.course}>
      <CourseSidebar courseId={courseId} baseUrl={baseUrl} />
      <main className={styles.body}>
        <Switch>
          <Route exact path={baseUrl}>
            <Redirect exact from={baseUrl} to={baseUrl + '/overview'} />
          </Route>
          <Route exact path={baseUrl + '/overview'} component={() => <Overview courseId={courseId} />} />
          <Route
            exact
            path={baseUrl + '/week/:week1bIdx'}
            component={Week}
          />
          {/* <Route exact path={baseUrl + '/grades'} component={Grades} /> */}
          <Redirect to={'/404'} />
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(Course);
