import { createStore, Store } from 'redux';
import { todosReducer } from '../features/todos/store/reducer';
import { Todo } from '../features/todos/types';

export interface AppState {
  todos: Todo[];
}

export const store: Store<AppState> = createStore(todosReducer);
