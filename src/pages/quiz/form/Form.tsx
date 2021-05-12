import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectedAnswerSet} from '@/redux/ui/quizForm/singleChoiceQuestions/slice';
import {selectedAnswerAdded} from '@/redux/ui/quizForm/multiChoiceQuestions/slice';
import {selectedAnswerSet as selectedAnswerPersisted} from '@/redux/entities/quizQuestions/singleChoice/slice';
import {selectedAnswersSet as selectedAnswersPersisted} from '@/redux/entities/quizQuestions/multiChoice/slice';
import SingleChoice from './singleChoice';
import MultiChoice from './multiChoice';
import styles from './Form.scss';
import { State } from '@/redux/store';

type FormProps = {
  tryWasUsed: boolean;
  questions: {id: string; type: 'SINGLE_CHOICE' | 'MULTI_CHOICE'}[];
};

const Form: React.FC<FormProps> = ({tryWasUsed, questions}) => {
  const dispatch = useDispatch();
  const singleChoiceAnswers = useSelector(
    (state: State) => state.ui.quizForm.singleChoiceQuestions
  );
  const multiChoiceAnswers = useSelector(
    (state: State) => state.ui.quizForm.multiChoiceQuestions
  );
  const setSelectedAnswer = (questionIdx: number, answerIdx: number) => {
    dispatch(selectedAnswerSet({questionIdx, answerIdx}));
  };
  const addSelectedAnswer = (questionIdx: number, answerIdx: number) => {
    dispatch(selectedAnswerAdded({questionIdx, answerIdx}));
  };
  const persistSelectedAnswer = (
    questionId: string,
    selectedAnswer: number
  ) => {
    dispatch(selectedAnswerPersisted({questionId, selectedAnswer}));
  };
  const persistSelectedAnswers = (
    questionId: string,
    selectedAnswers: number[]
  ) => {
    dispatch(selectedAnswersPersisted({questionId, selectedAnswers}));
  };
  const saveAnswers = () => {
    const arrayFromObject = (obj: {[item: string]: boolean}): number[] => {
      return Object.keys(obj)
        .filter((key: string) => !!obj[key])
        .map((key: string) => Number(key));
    };
    questions.forEach(
      (
        question: {id: string; type: 'SINGLE_CHOICE' | 'MULTI_CHOICE'},
        questionIdx: number
      ) => {
        if (question.type === 'SINGLE_CHOICE') {
          persistSelectedAnswer(question.id, singleChoiceAnswers[questionIdx]);
        } else {
          persistSelectedAnswers(
            question.id,
            arrayFromObject(multiChoiceAnswers[questionIdx])
          );
        }
      }
    );
  };

  return (
    <form className={styles.form}>
      {questions.map(
        (
          question: {id: string; type: 'SINGLE_CHOICE' | 'MULTI_CHOICE'},
          questionIdx: number
        ) => {
          const props = {
            tryWasUsed
          };
          return question.type === 'SINGLE_CHOICE' ? (
            <SingleChoice
              {...props}
              singleChoiceId={question.id.toString()}
              selectedAnswer={
                singleChoiceAnswers[questionIdx] === undefined
                  ? -1
                  : singleChoiceAnswers[questionIdx]
              }
              setSelectedAnswer={(answerIdx: number) =>
                setSelectedAnswer(questionIdx, answerIdx)
              }
              key={`s${question.id}`}
            />
          ) : (
            <MultiChoice
              {...props}
              multiChoiceId={question.id.toString()}
              selectedAnswers={
                multiChoiceAnswers[questionIdx] === undefined
                  ? {}
                  : multiChoiceAnswers[questionIdx]
              }
              addSelectedAnswer={(answerIdx: number) =>
                addSelectedAnswer(questionIdx, answerIdx)
              }
              key={`m${question.id}`}
            />
          );
        }
      )}
      <div className={styles.buttons}>
        <button type='button'>Submit</button>
        <button type='button' onClick={saveAnswers}>
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
