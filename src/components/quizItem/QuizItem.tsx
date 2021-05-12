import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import styles from './QuizItem.scss';
import {BsCardList} from 'react-icons/bs';
import {State} from '@/redux/store';
import {Parents} from '@/enums';

type QuizItemProps = {
  quizId: string;
  baseUrl: string;
  parent: Parents;
};

const QuizItem: React.FC<QuizItemProps> = ({quizId, baseUrl, parent}) => {
  const quiz = useSelector(
    (state: State) => state.entities.weekSteps.quizes.byId[quizId]
  );
  return (
    <NavLink to={`${baseUrl}/quiz/${quizId}`}>
      <div
        className={
          parent == Parents.WEEK_ITEM
            ? styles.weekStepItem
            : styles.sidebarWeekStepItem
        }
      >
        <BsCardList className={styles.icon} />
        <div className={styles.name}>
          <strong>Quiz: </strong>
          <span>{quiz.name}</span>
        </div>
        <div className={styles.effort}>1 question</div>
      </div>
    </NavLink>
  );
};

export default QuizItem;
