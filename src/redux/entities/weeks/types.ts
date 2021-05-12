export enum WeekStepTypes {
  LECTURE,
  READING,
  QUIZ
}

export type WeekStep = {
  type:  WeekStepTypes;
  id: string;
};

export type Week = {
  id: string;
  name: string;
  steps: WeekStep[];
};

export type WeeksState = {
  byId: {[id: string]: Week};
};
