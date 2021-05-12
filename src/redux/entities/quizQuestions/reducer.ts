import {combineReducers} from 'redux';
import singleChoiceReducer from './singleChoice/slice';
import multiChoiceReducer from './multiChoice/slice';

const reducer = combineReducers({
  singleChoice: singleChoiceReducer,
  multiChoice: multiChoiceReducer
});

export default reducer;
