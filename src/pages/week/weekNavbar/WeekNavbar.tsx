import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {useSelector, State} from '@/redux/store';
import {WeekStepTypes, WeekStep} from '@/redux/entities/weeks/types';
import {toggled as sidebarToggled} from '@/redux/ui/weekSidebar/slice';
import {courseRoute, stepRoute} from '@/helpers/routes';
import styles from './weekNavbar.scss';
import {BsList} from 'react-icons/bs';

const WeekNavbar: React.FC = () => {
  const {prev, next} = useSelector((state: State) => state.ui.weekNavlinks);
  const disabledNavlinkClasses = `${styles.navLink} ${styles.disabledNavLink}`;
  const {courseId, weekIdx, stepIdx} = useSelector((state: State) => {
    return state.ui.weekBreadcrumbs;
  });
  console.log({courseId, weekIdx, stepIdx});
  if (!courseId || weekIdx == null || stepIdx == null) {
    throw new Error();
  }

  const weekId = useSelector(
    (state: State) => state.entities.courses.byId[courseId].weeks[weekIdx]
  );
  const {stepId, stepType, stepName} = useSelector((state: State) => {
    const step: WeekStep = state.entities.weeks.byId[weekId].steps[stepIdx];
    const stepId = step.id;
    const stepType = step.type;
    if (stepType === WeekStepTypes.LECTURE) {
      const stepName = state.entities.weekSteps.lectures.byId[stepId].name;
      return {stepId, stepType, stepName};
    } else if (stepType === WeekStepTypes.READING) {
      const stepName = state.entities.weekSteps.readings.byId[stepId].name;
      return {stepId, stepType, stepName};
    } else {
      const stepName = state.entities.weekSteps.quizes.byId[stepId].name;
      return {stepId, stepType, stepName};
    }
  });

  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch(sidebarToggled({}));
  };

  return (
    <nav className={styles.navbar}>
      <span style={{display: 'flex', justifyContent: 'flex-start'}}>
        <BsList className={styles.sidebarIcon} onClick={toggleSidebar} />
        <span className={styles.breadcrumbs}>
          <NavLink to={courseRoute(courseId)}>Course</NavLink>
          <span>{`/ Week ${weekIdx + 1} / `}</span>
          <NavLink to={stepRoute(courseId, weekIdx, stepId, stepType)}>
            {stepName}
          </NavLink>
        </span>
      </span>
      <span className={styles.prevAndNext}>
        {prev ? (
          <NavLink to={prev} className={styles.navLink}>
            Prev
          </NavLink>
        ) : (
          <span className={disabledNavlinkClasses}>Prev</span>
        )}
        {next ? (
          <NavLink to={next} className={styles.navLink}>
            Next
          </NavLink>
        ) : (
          <span className={disabledNavlinkClasses}>Next</span>
        )}
      </span>
    </nav>
  );
};

export default WeekNavbar;
