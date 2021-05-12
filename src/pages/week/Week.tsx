import React from 'react';
// import {useSelector, useDispatch} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useSelector, State} from '@/redux/store';
import {withRouter} from 'react-router';
import {RouteComponentProps} from 'react-router';
import {Route, Switch, Redirect} from 'react-router-dom';
import {navlinksSet} from '@/redux/ui/weekNavlinks/slice';
import {breadcrumbsSet} from '@/redux/ui/weekBreadcrumbs/slice';
import {stepItemSetActive} from '@/redux/ui/weekSidebar/slice';
import WeekNavbar from './weekNavbar';
import Navbar from './navbar';
import WeekSidebar from './weekSidebar';
import Lecture from '@/pages/lecture';
import Reading from '@/pages/reading';
import Quiz from '@/pages/quiz';
import classnames from 'classnames';
import styles from './week.scss';
import {
  WeekStepTypes,
  WeekStep as WeekStepEntity,
  Week as WeekEntity
} from '@/redux/entities/weeks/types';
import {stepRoute} from '@/helpers/routes';

type WeekProps = {};

type RouteParams = {
  courseId: string;
  week1bIdx: string;
};

const Week: React.FC<WeekProps & RouteComponentProps<RouteParams>> = ({
  match,
  ...props
}) => {
  const baseUrl = match.url;
  const {courseId} = match.params;
  const week1bIdx = match.params.week1bIdx;
  const weekIdx = +week1bIdx - 1;

  console.log({courseId, weekIdx});
  console.log({baseUrl});

  const weekId: string = useSelector((state: State): string => {
    return state.entities.courses.byId[courseId].weeks[weekIdx];
  });
  const week: WeekEntity = useSelector((state: State) => {
    return state.entities.weeks.byId[weekId];
  });

  const getStepLink = (step: WeekStepEntity): string =>
    stepRoute(courseId, weekIdx, step.id, step.type);

  const getNextStepLink = (stepIdx: number): string | null => {
    const nextStep: WeekStepEntity | null = week.steps[stepIdx + 1];
    if (!!nextStep) {
      return getStepLink(nextStep);
    } else {
      return null;
    }
  };

  const getPrevStepLink = (stepIdx: number): string | null => {
    const prevStep: WeekStepEntity | null = week.steps[stepIdx - 1];
    if (!!prevStep) {
      return getStepLink(prevStep);
    } else {
      return null;
    }
  };

  const dispatch = useDispatch();
  const setNavlinks = (stepIdx: number) => {
    const prevStepLink: string | null = getPrevStepLink(stepIdx);
    const nextStepLink: string | null = getNextStepLink(stepIdx);
    dispatch(navlinksSet({prev: prevStepLink, next: nextStepLink}));
  };
  const setSidebar = (stepIdx: number) => {
    dispatch(stepItemSetActive({stepIdx}));
  };
  const setBreadcrumbs = (stepIdx: number) => {
    dispatch(breadcrumbsSet({courseId, weekIdx, stepIdx}));
  };

  const sidebarIsCollapsed = useSelector((state: State) => {
    return state.ui.weekSidebar.collapsed;
  });

  const bodyClasses = classnames(
    styles.body,
    {[styles.withSidebar]: !sidebarIsCollapsed},
    {[styles.withoutSidebar]: sidebarIsCollapsed}
  );

  setNavlinks(0);
  setBreadcrumbs(0);
  setSidebar(0);

  return (
    <>
      <Navbar />
      <WeekNavbar />
      <div className={styles.week}>
        <WeekSidebar weekId={weekId} baseUrl={baseUrl} />
        <main className={bodyClasses}>
          <Switch>
            <Route
              exact
              path={`${baseUrl}/lecture/:lectureId`}
              component={({
                match
              }: RouteComponentProps<{lectureId: string}>) => {
                const {lectureId} = match.params;
                const stepIdx = week.steps.findIndex((step: WeekStepEntity) => {
                  return (
                    step.type === WeekStepTypes.LECTURE && step.id === lectureId
                  );
                });
                setNavlinks(stepIdx);
                setBreadcrumbs(stepIdx);
                setSidebar(stepIdx);
                console.log(1);
                return <Lecture />;
              }}
            />
            <Route
              exact
              path={`${baseUrl}/reading/:readingId`}
              component={({
                match
              }: RouteComponentProps<{readingId: string}>) => {
                const {readingId} = match.params;
                const stepIdx = week.steps.findIndex((step: WeekStepEntity) => {
                  return (
                    step.type === WeekStepTypes.READING && step.id === readingId
                  );
                });
                setNavlinks(stepIdx);
                setBreadcrumbs(stepIdx);
                setSidebar(stepIdx);
                console.log(1);
                return <Reading />;
              }}
            />
            <Route
              exact
              path={`${baseUrl}/quiz/:quizId`}
              component={({match}: RouteComponentProps<{quizId: string}>) => {
                const {quizId} = match.params;
                const stepIdx = week.steps.findIndex((step: WeekStepEntity) => {
                  return step.type === WeekStepTypes.QUIZ && step.id === quizId;
                });
                setNavlinks(stepIdx);
                setBreadcrumbs(stepIdx);
                setSidebar(stepIdx);
                console.log(1);
                return <Quiz />;
              }}
            />
            {/* <Route exact path={``} /> */}
            <Redirect to={'/404'} />
          </Switch>
        </main>
      </div>
    </>
  );
};

export default withRouter(Week);
