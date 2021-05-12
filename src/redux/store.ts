import {configureStore} from '@reduxjs/toolkit';
import {createSelectorHook} from 'react-redux';
import authReducer from './auth/slice';
import entitiesReducer from './entities/reducer';
import uiReducer from './ui/reducer';
import {AuthState} from './auth/types';
import {UiState} from './ui/types';
import {EntitiesState} from './entities/types';

export type State = {
  auth: AuthState;
  entities: EntitiesState;
  ui: UiState;
};

const persistedState: State = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState')!)
  : {};
const store = configureStore({
  reducer: {
    auth: authReducer,
    entities: entitiesReducer,
    ui: uiReducer
  },
  preloadedState: persistedState
});
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export const useSelector = createSelectorHook<State>();

export default store;
