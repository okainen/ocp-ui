import {createSlice} from '@reduxjs/toolkit';
import {WeeksState, WeekStepTypes} from './types';

const initialState: WeeksState = {
  byId: {
    '1': {
      id: '1',
      name: 'Intro.',
      steps: [
        {type: WeekStepTypes.QUIZ, id: '1'},
        {type: WeekStepTypes.LECTURE, id: '1'},
        {type: WeekStepTypes.LECTURE, id: '2'},
        {type: WeekStepTypes.READING, id: '1'}
      ]
    },
    '2': {
      id: '2',
      name: 'W isfs42dff Less?',
      steps: [
        {type: WeekStepTypes.QUIZ, id: '1'},
        {type: WeekStepTypes.LECTURE, id: '1'},
        {type: WeekStepTypes.LECTURE, id: '2'},
        {type: WeekStepTypes.READING, id: '1'}
      ]
    },
    '3': {
      id: '3',
      name: 'sf42dff Less?',
      steps: [
        {type: WeekStepTypes.QUIZ, id: '1'},
        {type: WeekStepTypes.LECTURE, id: '1'},
        {type: WeekStepTypes.LECTURE, id: '2'},
        {type: WeekStepTypes.READING, id: '1'}
      ]
    },
    '4': {
      id: '4',
      name: 'W isf sfs ff Less?',
      steps: [
        {type: WeekStepTypes.QUIZ, id: '1'},
        {type: WeekStepTypes.LECTURE, id: '1'},
        {type: WeekStepTypes.LECTURE, id: '2'},
        {type: WeekStepTypes.READING, id: '1'}
      ]
    }
  }
  // allIds: ['1', '2', '3', '4']
};

const weeksSlice = createSlice({
  name: 'weeks',
  initialState,
  reducers: {}
});

export default weeksSlice.reducer;
