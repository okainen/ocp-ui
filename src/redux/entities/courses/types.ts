export type Course = {
  id: string;
  name: string;
  weeks: string[];
};

export type CoursesState = {
  byId: {[id: string]: Course};
  allIds: string[];
};
