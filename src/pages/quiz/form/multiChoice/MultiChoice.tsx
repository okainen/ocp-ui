import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {produce} from 'immer';
import styles from './MultiChoice.scss';
import { State } from '@/redux/store';

type MultiChoiceProps = {
  multiChoiceId: string;
  tryWasUsed: boolean;
  selectedAnswers: {[answerIdx: number]: boolean};
  addSelectedAnswer: (answerIdx: number) => void;
};

const MultiChoice: React.FC<MultiChoiceProps> = ({
  multiChoiceId,
  tryWasUsed,
  selectedAnswers,
  addSelectedAnswer
}) => {
  const question = useSelector((state: State) => {
    return state.entities.quizQuestions.multiChoice.byId[multiChoiceId];
  });
  return (
    <div className={styles.multiChoice}>
      {/* <p>{question.question}</p> */}
      <div className={styles.question}>{question.question}</div>
      {question.answers.map((answer: string, answerIdx: number) => {
        const answerId = `m${multiChoiceId}-${answerIdx}`;
        const isChecked: boolean = !!selectedAnswers[answerIdx];
        return (
          <div className={styles.answer} key={answerId}>
            <input
              type='checkbox'
              id={answerId}
              name={answerIdx.toString()}
              onChange={() => addSelectedAnswer(answerIdx)}
              checked={isChecked}
            />
            <label htmlFor={answerId}>{answer}</label>
          </div>
        );
      })}
    </div>
  );
};

export default MultiChoice;
