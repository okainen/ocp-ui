import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from './types';

const initialState: AuthState = {
  isLoggedIn: false,
  userId: null
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
});

export default slice.reducer;
