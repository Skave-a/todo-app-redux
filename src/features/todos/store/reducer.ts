interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const todos: Todo[] = [
  {
    id: 'c1a69b93-d3cb-49da-b736-87accbc7852f',
    text: 'Understand What React Is',
    completed: true,
  },
  {
    id: 'b69ab839-0999-4bc6-a99c-ccc011be6ef3',
    text: 'Learn How to Set Up your Development Environment',
    completed: false,
  },
];

const initialState = { todos };

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

interface AddTodoAction  {
  type: typeof ADD_TODO;
  payload: {
    id: string;
    text: string;
  };
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: {
    id: string;
  };
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: {
    id: string;
  };
}

type TodoActionTypes = AddTodoAction | RemoveTodoAction | ToggleTodoAction;

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