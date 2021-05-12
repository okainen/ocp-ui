import {createSlice} from '@reduxjs/toolkit';
import {CourseSidebarState} from './types';

const initialState: CourseSidebarState = {
  activeItem: 0,
  activeMenuItem: -1
};

const slice = createSlice({
  name: 'courseSidebar',
  initialState,
  reducers: {
    itemSetActive(state, action) {
      state.activeItem = action.payload;
    },
    menuItemSetActive(state, action) {
      state.activeMenuItem = action.payload;
    }
  }
});

export const {itemSetActive, menuItemSetActive} = slice.actions;

export default slice.reducer;
