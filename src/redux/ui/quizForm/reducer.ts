import {combineReducers} from 'redux';
import singleChoiceQuestionsReducer from './singleChoiceQuestions/slice';
import multiChoiceQuestionsReducer from './multiChoiceQuestions/slice';

const reducer = combineReducers({
  singleChoiceQuestions: singleChoiceQuestionsReducer,
  multiChoiceQuestions: multiChoiceQuestionsReducer
});

export default reducer;
