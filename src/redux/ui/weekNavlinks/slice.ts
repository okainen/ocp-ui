import {createSlice} from '@reduxjs/toolkit';
import {WeekNavlinksState} from './types';

const initialState: WeekNavlinksState = {
  prev: null,
  next: null
};

const slice = createSlice({
  name: 'weekNavlinks',
  initialState,
  reducers: {
    navlinksSet(state: WeekNavlinksState, action) {
      const {prev, next} = action.payload;
      state.prev = prev;
      state.next = next;
    }
  }
});

export const {navlinksSet} = slice.actions;

export default slice.reducer;
