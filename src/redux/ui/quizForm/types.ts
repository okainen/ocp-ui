import {SingleChoiceQuestionsState} from './singleChoiceQuestions/types';
import {MultiChoiceQuestionsState} from './multiChoiceQuestions/types';

export type QuizFormState = {
  singleChoiceQuestions: SingleChoiceQuestionsState;
  multiChoiceQuestions: MultiChoiceQuestionsState;
};
