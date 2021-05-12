import {combineReducers} from 'redux';
import quizesReducer from './quizes/slice';
import readingsReducer from './readings/slice';
import lecturesReducer from './lectures/slice';

const reducer = combineReducers({
  quizes: quizesReducer,
  readings: readingsReducer,
  lectures: lecturesReducer
});

export default reducer;
