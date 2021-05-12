import {SingleChoiceState} from './singleChoice/types';
import {MultiChoiceState} from './multiChoice/types';

export type QuizQuestionsState = {
  singleChoice: SingleChoiceState;
  multiChoice: MultiChoiceState;
};
