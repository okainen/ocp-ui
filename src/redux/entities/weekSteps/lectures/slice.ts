import {createSlice} from '@reduxjs/toolkit';
import {LecturesState} from './types';

const initialState: LecturesState = {
  byId: {
    1: {
      id: '1',
      name: 'Intro?'
    },
    2: {
      id: '2',
      name: 'W isfs342dff Less?'
    },
    3: {
      id: '3',
      name: 'sf342dff Less?'
    },
    4: {
      id: '4',
      name: 'sf342dff Less?'
    }
  }
  // allIds: ['1', 2, 3, 4]
};

const slice = createSlice({
  name: 'lectures',
  initialState,
  reducers: {}
});

export default slice.reducer;
