import {createSlice} from '@reduxjs/toolkit';
import {QuizesState} from './types';

const initialState: QuizesState = {
  byId: {
    1: {
      id: '1',
      name: 'Intro?',
      tryWasUsed: false,
      questions: [
        {
          id: '1',
          type: 'SINGLE_CHOICE'
        },
        {
          id: '1',
          type: 'MULTI_CHOICE'
        },
        {
          id: '2',
          type: 'SINGLE_CHOICE'
        },
        {
          id: '2',
          type: 'MULTI_CHOICE'
        }
      ]
    },
    2: {
      id: '2',
      name: 'W isfs342dff Less?',
      tryWasUsed: false,
      questions: [
        {
          id: '2',
          type: 'SINGLE_CHOICE'
        },
        {
          id: '2',
          type: 'MULTI_CHOICE'
        }
      ]
    },
    3: {
      id: '3',
      name: 'sf342dff Less?',
      tryWasUsed: false,
      questions: [
        {
          id: '1',
          type: 'SINGLE_CHOICE'
        },
        {
          id: '3',
          type: 'MULTI_CHOICE'
        }
      ]
    }
  }
  // allIds: ['1', '2', 3]
};

const slice = createSlice({
  name: 'quizes',
  initialState,
  reducers: {}
});

export default slice.reducer;
