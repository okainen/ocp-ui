import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MultiChoiceState} from './types';

const initialState: MultiChoiceState = {
  byId: {
    1: {
      id: '1',
      question: 'Intro?',
      points: 1,
      answers: ['1yay', '2nah', 'Mmaybe'],
      correctAnswers: [0, 2],
      selectedAnswers: []
    },
    2: {
      id: '2',
      question: 'Intr.....o?',
      points: 1,
      answers: ['1ya2y', 'n1ah', 'may1be'],
      correctAnswers: [2],
      selectedAnswers: []
    },
    3: {
      id: '3',
      question: 'Int jkbkj kjn jknjknjkn ro?',
      points: 2,
      answers: ['1yay', '1na4h', '13o4pjio', '1maklybe'],
      correctAnswers: [1],
      selectedAnswers: []
    },
    4: {
      id: '4',
      question: 'Intrs0d-09u08 uiy bo?',
      points: 3,
      answers: ['Ypfsihoay', 'Ynasfoh', 'Yma-0090ybe'],
      correctAnswers: [1, 2],
      selectedAnswers: []
    }
  }
  // allIds: [1, 2, 3, 4]
};

const slice = createSlice({
  name: 'multiChoice',
  initialState,
  reducers: {
    selectedAnswersSet(
      state: MultiChoiceState,
      action: PayloadAction<{questionId: string; selectedAnswers: number[]}>
    ) {
      const {questionId, selectedAnswers} = action.payload;
      state.byId[questionId].selectedAnswers = selectedAnswers;
    }
  }
});

export const {selectedAnswersSet} = slice.actions;

export default slice.reducer;
