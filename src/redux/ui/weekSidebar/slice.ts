import {createSlice} from '@reduxjs/toolkit';
import {WeekSidebarState} from './types';

const initialState: WeekSidebarState = {
  collapsed: false,
  activeWeekItem: 0,
  expandedWeekItems: {0: true},
  activeStepItem: 0
};

const slice = createSlice({
  name: 'weekSidebar',
  initialState,
  reducers: {
    toggled(state, action) {
      state.collapsed = !state.collapsed;
    },
    stepItemSetActive(state, action) {
      const {weekIdx, stepIdx} = action.payload;
      state.expandedWeekItems = {[weekIdx]: true};
      state.activeWeekItem = weekIdx;
      state.activeStepItem = stepIdx;
    },
    weekItemToggled(state, action) {
      const currentItemState = state.expandedWeekItems[action.payload];
      state.expandedWeekItems[action.payload] = !currentItemState;
    }
  }
});

export const {toggled, stepItemSetActive, weekItemToggled} = slice.actions;

export default slice.reducer;
