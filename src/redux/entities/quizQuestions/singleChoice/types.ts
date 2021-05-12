export type SingleChoice = {
  id: string;
  question: string;
  points: number;
  answers: string[];
  correctAnswer: number;
  selectedAnswer: number;
};

export type SingleChoiceState = {
  byId: {[id: string]: SingleChoice};
  // allIds: number[];
};
