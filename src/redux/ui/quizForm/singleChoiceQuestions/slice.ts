import {createSlice} from '@reduxjs/toolkit';
import {SingleChoiceQuestionsState} from './types';

const initialState: SingleChoiceQuestionsState = {};

const slice = createSlice({
  name: 'singleChoiceQuestions',
  initialState,
  reducers: {
    selectedAnswerSet(state, action) {
      const {questionIdx, answerIdx} = action.payload;
      state[questionIdx] = answerIdx;
    }
  }
});

export const {selectedAnswerSet} = slice.actions;

export default slice.reducer;
