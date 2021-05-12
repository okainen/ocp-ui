import React from 'react';
import {useDispatch} from 'react-redux';
import {useSelector, State} from '@/redux/store';
import {stepItemSetActive, weekItemToggled} from '@/redux/ui/weekSidebar/slice';
// import {WeekStep, WeekStep as WeekType} from '@/redux/entities/weeks/types';
import styles from './weekSidebar.scss';
import classnames from 'classnames';
import _ from 'lodash';
import StepItem from './stepItem';
import { WeekStep } from '@/redux/entities/weeks/types';

type WeekSidebarProps = {
  baseUrl: string;
  weekId: string;
};

const WeekSidebar: React.FC<WeekSidebarProps> = ({baseUrl, weekId}) => {
  const {activeWeekItem, expandedWeekItems, activeStepItem} = useSelector(
    (state: State) => state.ui.weekSidebar
  );
  const dispatch = useDispatch();
  const setActiveStepItem = (stepIdx: number) => {
    dispatch(stepItemSetActive({stepIdx}));
  };
  const toggleItem = (weekIdx: number) => {
    dispatch(weekItemToggled(weekIdx));
  };
  const week = useSelector((state: State) => state.entities.weeks.byId[weekId]);

  const isCollapsed = useSelector((state: State) => {
    return state.ui.weekSidebar.collapsed;
  });

  const classes = classnames(styles.weekSidebar, {
    [styles.notDisplayed]: isCollapsed
  });

  return (
    <div className={classes}>
      {/* {week.weeks.map((weekId: string, weekIdx: number) => (
        <WeekItem
          weekId={weekId}
          weekIdx={weekIdx}
          baseUrl={`${baseUrl}/week/${weekIdx + 1}`}
          onClick={() => toggleItem(weekIdx)}
          active={expandedWeekItems[weekIdx]}
          // key={weekId}
          key={weekIdx.toString()}
          onStepItemClick={(stepIdx: number) =>
            setActiveStepItem(weekIdx, stepIdx)
          }
          activeStepItem={activeWeekItem == weekIdx ? activeStepItem : -1}
        />
      ))} */}
      {/* <div className={styles.menu}> */}
      <div>
        {week.steps.map((step: WeekStep, stepIdx: number) => (
          <StepItem
            weekStep={step}
            // className={styles.menuItem}
            weekStepIdx={stepIdx}
            baseUrl={baseUrl}
            onClick={() =>
              setActiveStepItem(stepIdx)
            }
            active={activeStepItem == stepIdx}
            key={stepIdx.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default WeekSidebar;
