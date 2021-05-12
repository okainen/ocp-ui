export type MultiChoice = {
  id: string;
  question: string;
  points: number;
  answers: string[];
  correctAnswers: number[];
  selectedAnswers: number[];
};

export type MultiChoiceState = {
  byId: {[id: string]: MultiChoice};
  // allIds: number[];
};
