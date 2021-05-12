export type WeekSidebarState = {
  collapsed: boolean;
  activeWeekItem: number;
  expandedWeekItems: {[idx: number]: boolean};
  activeStepItem: number;
};
