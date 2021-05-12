import {CoursesState} from './courses/types';
import {WeeksState} from './weeks/types';
import {WeekStepsState} from './weekSteps/types';
import {QuizQuestionsState} from './quizQuestions/types'

// type NormalizedObjects<T> = {
//   //   byId: { [id: string]: T };
//   byId: {[id: string]: T};
//   //   allIds: string[];
//   allIds: number[];
// };

export type EntitiesState = {
  courses: CoursesState;
  weeks: WeeksState;
  weekSteps: WeekStepsState;
  quizQuestions: QuizQuestionsState;
};
