import {createSlice} from '@reduxjs/toolkit';
import {WeekBreadcrumbsState} from './types';

const initialState: WeekBreadcrumbsState = {
  courseId: null,
  weekIdx: null,
  stepIdx: null
};

const slice = createSlice({
  name: 'weekBreadcrumbs',
  initialState,
  reducers: {
    breadcrumbsSet(state, action) {
      const {courseId, weekIdx, stepIdx} = action.payload;
      state.courseId = courseId;
      state.weekIdx = weekIdx;
      state.stepIdx = stepIdx;
    }
  }
});

export const {breadcrumbsSet} = slice.actions;

export default slice.reducer;
