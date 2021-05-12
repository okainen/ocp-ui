import React from 'react';
import {withRouter} from 'react-router';
import {RouteComponentProps} from 'react-router';
import {useSelector} from 'react-redux';
// import WeekItem2 from './weekItem/weekItem2';
import styles from './Overview.scss';
import {WeekStepTypes} from '@/redux/entities/weeks/types';
// import LectureItem from '@/components/LectureItem';
// import ReadingItem from '@/components/ReadingItem';
// import QuizItem from '@/components/QuizItem';
import WeekItem from './weekItem';
import {State} from '@/redux/store';

type OverviewProps = {
  courseId: string;
};

const Overview: React.FC<OverviewProps> = ({courseId}) => {
  const weeks = useSelector(
    (state: State) => state.entities.courses.byId[courseId].weeks
  );

  return (
    <div className={styles.overview}>
      <div
        style={{
          borderColor: '#004f63',
          borderStyle: 'solid',
          borderWidth: '0 0 3px 0'
        }}
      >
        <div style={{fontSize: '48px'}}>{'Introduction to sIOHf kjbg'}</div>
        <div style={{fontSize: '36px'}}>{'by Name Name'}</div>
      </div>
      <section className={''}>
        {/* {week.steps.map((step: WeekStep) => {
          const props = {
            className: 'weekStepItem',
            baseUrl: `/course/${courseId}/week/${week1bIdx}`
          };
          const stepId = step.id;
          if (step.type === WeekStepTypes.LECTURE)
            return <LectureItem {...props} lectureId={stepId} />;
          else if (step.type === WeekStepTypes.READING)
            return <ReadingItem {...props} readingId={stepId} />;
          else return <QuizItem {...props} quizId={stepId} />;
        })} */}
        {weeks.map((week: any, i: number) => {
          return (
            <WeekItem
              weekId={week}
              weekIdx={i + 1}
              baseUrl={`/course/${courseId}/week/${i + 1}`}
              key={i}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Overview;
