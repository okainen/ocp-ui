import {LecturesState} from './lectures/types';
import {ReadingsState} from './readings/types';
import {QuizesState} from './quizes/types';

export type WeekStepsState = {
  lectures: LecturesState;
  readings: ReadingsState;
  quizes: QuizesState;
};
