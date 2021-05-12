type Lecture = {
  id: string;
  name: string;
};

export type LecturesState = {
  byId: {[id: string]: Lecture};
};
