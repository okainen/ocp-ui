import React from 'react';
import {useSelector} from 'react-redux';
import LectureItem from '@/components/lectureItem';
import ReadingItem from '@/components/readingItem';
import QuizItem from '@/components/quizItem';
import styles from './weekItem.scss';
import {State} from '@/redux/store';
import {WeekStep, WeekStepTypes} from '@/redux/entities/weeks/types';
import {Parents} from '@/enums';

type WeekItemProps = {
  weekId: string;
  weekIdx: number;
  baseUrl: string;
};

const WeekItem: React.FC<WeekItemProps> = ({weekId, weekIdx, baseUrl}) => {
  const week = useSelector((state: State) => state.entities.weeks.byId[weekId]);

  return (
    <div className={styles.weekItem}>
      <div className={styles.name}>{`Week ${weekIdx}. ${week.name}`}</div>
      {week.steps.map((step: WeekStep, i: number) => {
        const props = {
          baseUrl,
          key: i,
          parent: Parents.WEEK_ITEM
        };
        const stepId = step.id;
        if (step.type === WeekStepTypes.LECTURE)
          return <LectureItem {...props} lectureId={stepId} />;
        else if (step.type === WeekStepTypes.READING)
          return <ReadingItem {...props} readingId={stepId} />;
        else return <QuizItem {...props} quizId={stepId} />;
      })}
    </div>
  );
};

export default WeekItem;
