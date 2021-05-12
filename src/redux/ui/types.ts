import {CourseSidebarState} from './courseSidebar/types';
import {WeekSidebarState} from './weekSidebar/types';
import {WeekBreadcrumbsState} from './weekBreadcrumbs/types';
import {WeekNavlinksState} from './weekNavlinks/types';
import {QuizFormState} from './quizForm/types';

export type UiState = {
  courseSidebar: CourseSidebarState;
  weekSidebar: WeekSidebarState;
  weekBreadcrumbs: WeekBreadcrumbsState;
  weekNavlinks: WeekNavlinksState;
  quizForm: QuizFormState;
};
