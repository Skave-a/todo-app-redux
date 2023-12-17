import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, todos } from "./constants";
import { TodoActionTypes } from "./types";

export const initialState = { todos };


const todosReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      }
    }

    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      }
    }

    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo;
        })
      }
    }
    
    default: {
      return  state;
    }
  }
};

export {todosReducer};