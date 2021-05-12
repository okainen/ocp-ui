import {combineReducers} from 'redux';
import coursesReducer from './courses/slice';
import weeksReducer from './weeks/slice';
import weekStepsReducer from './weekSteps/reducer';
import quizQuestionsReducer from './quizQuestions/reducer';

const reducer = combineReducers({
  courses: coursesReducer,
  weeks: weeksReducer,
  weekSteps: weekStepsReducer,
  quizQuestions: quizQuestionsReducer
});

export default reducer;
