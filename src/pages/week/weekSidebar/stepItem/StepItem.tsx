import React, {HTMLProps} from 'react';
import {WeekStepTypes, WeekStep} from '@/redux/entities/weeks/types';
import LectureItem from '@/components/lectureItem';
import ReadingItem from '@/components/readingItem';
import QuizItem from '@/components/quizItem';
import classnames from 'classnames';
import styles from './StepItem.scss';
import {Parents} from '@/enums';

type StepItemProps = {
  weekStep: WeekStep;
  weekStepIdx: number;
  baseUrl: string;
  active: boolean;
  onClick: () => void;
};

const StepItem: React.FC<StepItemProps & HTMLProps<HTMLDivElement>> = ({
  weekStepIdx,
  weekStep,
  baseUrl,
  active = false,
  ...props
}) => {
  const classes = classnames(
    {[props.className || '']: !!props.className},
    styles.stepItem,
    {[styles.active]: active}
  );
  const renderStep = (weekStep: WeekStep) => {
    const weekStepId = weekStep.id;
    const props = {
      baseUrl,
      parent: Parents.SIDEBAR
    };
    if (weekStep.type === WeekStepTypes.LECTURE)
      return <LectureItem {...props} lectureId={weekStepId} />;
    else if (weekStep.type === WeekStepTypes.READING)
      return <ReadingItem {...props} readingId={weekStepId} />;
    else return <QuizItem {...props} quizId={weekStepId} />;
  };
  return (
    <div {...props} className={classes}>
      {renderStep(weekStep)}
    </div>
  );
};

export default StepItem;
