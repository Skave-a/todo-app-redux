export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface AddTodoAction  {
  type: string;
  payload: {
    id: string;
    text: string;
  };
}

export interface RemoveTodoAction {
  type: string;
  payload: {
    id: string;
  };
}

export interface ToggleTodoAction {
  type: string;
  payload: {
    id: string;
  };
}

export type TodoActionTypes = AddTodoAction | RemoveTodoAction | ToggleTodoAction;
