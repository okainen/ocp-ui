import {createSlice} from '@reduxjs/toolkit';
import {ReadingsState} from './types';

const initialState: ReadingsState = {
  byId: {
    '1': {
      id: '1',
      name: 'Intro?'
    },
    '2': {
      id: '2',
      name: 'W isfs34dff Less?'
    },
    '3': {
      id: '3',
      name: 'sf4dff Less?'
    }
  }
  // allIds: ['1', '2', '3']
};

const slice = createSlice({
  name: 'readings',
  initialState,
  reducers: {}
});

export default slice.reducer;
