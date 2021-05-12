import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import { State } from '@/redux/store';
import styles from './SingleChoice.scss';

type SingleChoiceProps = {
  singleChoiceId: string,
  tryWasUsed: boolean;
  selectedAnswer: number;
  setSelectedAnswer: (ai: number) => void;
};

const SingleChoice: React.FC<SingleChoiceProps> = ({
  singleChoiceId,
  tryWasUsed,
  selectedAnswer,
  setSelectedAnswer
}) => {
  const question = useSelector((state: State) => {
    return state.entities.quizQuestions.singleChoice.byId[singleChoiceId];
  });
  return (
    <div className={styles.singleChoice}>
      {/* <p>{question.question}</p> */}
      <div className={styles.question}>{question.question}</div>
      {question.answers.map((answer: string, answerIdx: number) => {
        const answerId = `s${singleChoiceId}-${answerIdx}`;
        const isChecked = selectedAnswer == answerIdx;
        return (
          <div className={styles.answer} key={answerId}>
            <input
              type='radio'
              id={answerId}
              name={answerId}
              value={answerId}
              onChange={() => setSelectedAnswer(answerIdx)}
              // required={true}
              checked={isChecked}
            />
            <label htmlFor={answerId}>{answer}</label>
          </div>
        );
      })}
    </div>
  );
};

export default SingleChoice;
