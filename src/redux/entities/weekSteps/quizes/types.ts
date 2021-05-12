type Question = {
  id: string;
  type: 'SINGLE_CHOICE' | 'MULTI_CHOICE';
};

type Quiz = {
  id: string;
  name: string;
  tryWasUsed: boolean;
  questions: Question[];
};

export type QuizesState = {
  byId: {[id: string]: Quiz};
};
