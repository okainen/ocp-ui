import {createSlice} from '@reduxjs/toolkit';
import {CoursesState} from './types';

const initialState: CoursesState = {
  byId: {
    '1': {
      id: '1',
      name: 'Course 1: Intro.',
      weeks: ['1', '2', '3']
    },
    '2': {
      id: '2',
      name: 'Course 2: W isfsff Less?',
      weeks: ['2', '3']
    },
    '3': {
      id: '3',
      name: 'Course 3: sfff Less?',
      weeks: ['1', '4', '3']
    },
    '4': {
      id: '4',
      name: 'Course 4: W isf sfs 4ff Less?',
      weeks: ['4', '2', '3']
    },
    '5': {
      id: '5',
      name: 'Course 5: W isf sfs 4ff Less?',
      weeks: ['4', '2', '3']
    },
    '6': {
      id: '6',
      name: 'Course 6: W isf sfs 4ff Less?',
      weeks: ['4', '2', '3']
    },
    '7': {
      id: '7',
      name: 'Course 7: W isf sfs 4ff Less?',
      weeks: ['4', '2', '3']
    },
    '8': {
      id: '8',
      name: 'Course 8: W isf sfs 4ff Less?',
      weeks: ['4', '2', '3']
    },
    '9': {
      id: '9',
      name: 'Course 9: W isf sfs 4ff Less?',
      weeks: ['9', '2', '3']
    },
    '10': {
      id: '10',
      name: 'Course 10: W isf sfs 4ff Less?',
      weeks: ['4', '2', '3']
    },
    '11': {
      id: '11',
      name: 'Course 11: W isf sfs 4ff Less?',
      weeks: ['4', '2', '3']
    }
  },
  allIds: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
};

const slice = createSlice({
  name: 'courses',
  initialState,
  reducers: {}
});

export default slice.reducer;
