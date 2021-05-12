import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import {useSelector} from 'react-redux';
import Form from './form';
import styles from './Quiz.scss';
import { State } from '@/redux/store';

type QuizProps = {};

type RouteParams = {
  quizId: string;
};

const Quiz: React.FC<QuizProps & RouteComponentProps<RouteParams>> = ({
  match
}) => {
  const {quizId} = match.params;
  const quiz = useSelector((state: State) => {
    return state.entities.weekSteps.quizes.byId[quizId];
  });
  return (
    <div className={styles.quiz}>
      <p>Quiz 1.</p>
      <Form tryWasUsed={quiz.tryWasUsed} questions={quiz.questions} />
    </div>
  );
};

export default withRouter(Quiz);
