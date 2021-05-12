import {combineReducers} from 'redux';
import weekSidebarReducer from './weekSidebar/slice';
import courseSidebarReducer from './courseSidebar/slice';
import weekBreadcrumbsReducer from './weekBreadcrumbs/slice';
import weekNavlinksReducer from './weekNavlinks/slice';
import quizFormReducer from './quizForm/reducer';

const reducer = combineReducers({
  courseSidebar: courseSidebarReducer,
  weekSidebar: weekSidebarReducer,
  weekBreadcrumbs: weekBreadcrumbsReducer,
  weekNavlinks: weekNavlinksReducer,
  quizForm: quizFormReducer
});

export default reducer;
