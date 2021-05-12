type Reading = {
  id: string;
  name: string;
};

export type ReadingsState = {
  byId: {[id: string]: Reading};
};
