type TodoModel = {
  id: string;
  text: string;
  completed: boolean;
};

export const db: {
  todos: TodoModel[];
} = {
  todos: [],
};

export const initializeDb = (todos: TodoModel[]) => {
  db.todos = todos;
};
