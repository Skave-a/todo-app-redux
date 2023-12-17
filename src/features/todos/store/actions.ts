import { Todo } from "../types";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./constants";
import { AddTodoAction, RemoveTodoAction, ToggleTodoAction } from "./types";

const addTodo = (todo: Todo): AddTodoAction => ({
  type: ADD_TODO,
  payload: todo,
});

const removeTodo = (id: string): RemoveTodoAction => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});

const toggleTodo = (id: string): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export {addTodo, removeTodo, toggleTodo};
