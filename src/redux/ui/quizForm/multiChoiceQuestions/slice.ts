import {createSlice} from '@reduxjs/toolkit';
import {MultiChoiceQuestionsState} from './types';

const initialState: MultiChoiceQuestionsState = {};

const slice = createSlice({
  name: 'multiChoiceQuestions',
  initialState,
  reducers: {
    selectedAnswerAdded(state, action) {
      const {questionIdx, answerIdx} = action.payload;
      state[questionIdx] = {
        ...state[questionIdx],
        [answerIdx]: state[questionIdx]
          ? !Boolean(state[questionIdx][answerIdx])
          : true
      };
    }
  }
});

export const {selectedAnswerAdded} = slice.actions;

export default slice.reducer;
