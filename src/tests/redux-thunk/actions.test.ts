/**
 * @vitest-environment jsdom
 */
import { vi } from 'vitest';

import { mockStore } from '../test-utils';
import { db } from '../server/db';

import {
  loadTodosAsync,
  addTodoAsync,
  toggleTodoAsync,
  removeTodoAsync,
} from '@/features/todos/store/actions';
import * as constants from '@/features/todos/store/constants';

vi.mock('uuid', () => ({ v4: () => db.todos[0].id }));

describe('actionsAsync', () => {
  it('handles fetches all todos', async () => {
    const store = mockStore();

    await store.dispatch(loadTodosAsync());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: constants.LOAD_TODOS,
      payload: { results: db.todos },
    });
  });

  it('handles adds new todo', async () => {
    const store = mockStore();

    await store.dispatch(addTodoAsync(db.todos[0].text));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: constants.ADD_TODO,
      payload: db.todos[0],
    });
  });

  it('handles remove todo', async () => {
    const store = mockStore();

    await store.dispatch(removeTodoAsync(db.todos[0].id));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: constants.REMOVE_TODO,
      payload: db.todos[0].id,
    });
  });

  it('handles toggle todo', async () => {
    const store = mockStore(() => ({ todos: db.todos }));

    await store.dispatch(toggleTodoAsync(db.todos[0].id));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: constants.TOGGLE_TODO,
      payload: db.todos[0].id,
    });
  });
});
