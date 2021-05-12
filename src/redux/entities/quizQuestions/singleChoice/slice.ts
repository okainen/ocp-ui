import {createSlice} from '@reduxjs/toolkit';
import {SingleChoiceState} from './types';

const initialState: SingleChoiceState = {
  byId: {
    1: {
      id: '1',
      question: 'Intro?',
      points: 1,
      answers: ['yay', 'nah', 'maybe'],
      correctAnswer: 0,
      selectedAnswer: -1
    },
    2: {
      id: '2',
      question: 'Intr.....o?',
      points: 1,
      answers: ['ya2y', 'n1ah', 'may1be'],
      correctAnswer: 2,
      selectedAnswer: -1
    },
    3: {
      id: '3',
      question: 'Int jkbkj kjn jknjknjkn ro?',
      points: 2,
      answers: ['yay', 'na4h', '3o4pjio', 'maklybe'],
      correctAnswer: 1,
      selectedAnswer: -1
    },
    4: {
      id: '4',
      question: 'Intrs0d-09u08 uiy bo?',
      points: 3,
      answers: ['ypfsihoay', 'nasfoh', 'ma-0090ybe'],
      correctAnswer: 1,
      selectedAnswer: -1
    }
  }
  // allIds: [1, 2, 3, 4]
};

const slice = createSlice({
  name: 'singleChoice',
  initialState,
  reducers: {
    selectedAnswerSet(state, action) {
      const {questionId, selectedAnswer} = action.payload;
      state.byId[questionId].selectedAnswer = selectedAnswer;
    }
  }
});

export const {selectedAnswerSet} = slice.actions;

export default slice.reducer;
