import React from 'react';
import {Route, Switch, Redirect, RouteProps} from 'react-router-dom';
import {
  ROOT,
  SIGN_UP,
  SIGN_IN,
  VERIFY_EMAIL,
  SEARCH,
  MY_COURSES,
  COURSE,
  WEEK,
  NOT_FOUND
} from '@/config/routes';
import Navbar from '@/components/navbar';
import Welcome from '@/pages/welcome';
import SignUp from '@/pages/signUp';
import SignIn from '@/pages/signIn';
import EmailVerification from '@/pages/emailVerification';
import Search from '@/pages/search';
import MyCourses from '@/pages/myCourses';
import Course from '@/pages/course';
import Week from '@/pages/week';
import NotFound from '@/pages/notFound';
import styles from './App.scss';

const RouteWithNavbar: React.FC<RouteProps> = ({
  exact,
  path,
  component,
  ...rest
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      {...rest}
      render={() => {
        return (
          <>
            <Navbar />
            <div className={styles.body}>
              {!!component && React.createElement(component)}
            </div>
          </>
        );
      }}
    />
  );
};

type RootProps = {};

const Root: React.FC<RootProps> = () => {
  const isLoggedIn: boolean = false;
  return (
    <div className={styles.app}>
      {/* <Navbar /> */}
      {/* <div className={styles.body}> */}
      <Switch>
        <RouteWithNavbar exact path={ROOT} component={Welcome} />
        {/* {isLoggedIn && } */}
        {!isLoggedIn && [
          <RouteWithNavbar
            exact
            path={SIGN_UP}
            component={SignUp}
            key={SIGN_UP}
          />,
          <RouteWithNavbar
            exact
            path={SIGN_IN}
            component={SignIn}
            key={SIGN_IN}
          />
        ]}
        <RouteWithNavbar
          exact
          path={VERIFY_EMAIL}
          component={EmailVerification}
        />
        <RouteWithNavbar exact path={SEARCH} component={Search} />
        <RouteWithNavbar exact path={MY_COURSES} component={MyCourses} />
        <Route path={WEEK} component={Week} />
        <RouteWithNavbar path={COURSE} component={Course} />
        <Route component={NotFound} />
      </Switch>
      {/* </div> */}
    </div>
  );
};

export default Root;
