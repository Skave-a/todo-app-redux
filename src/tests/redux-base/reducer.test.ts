/**
 * @vitest-environment jsdom
 */

import { vi } from 'vitest';

import { initialState, todosReducer as reducer } from '@/features/todos/store/reducer';
import * as actions from '@/features/todos/store/actions';
import * as constants from '@/features/todos/store/constants';
import { DataGenerator } from '../DataGenerator';

const todoMock = DataGenerator.todoGenerator();
const stateMock = [todoMock];

vi.mock('uuid', () => ({ v4: () => todoMock.id }));

type ActionTypes =
  | ReturnType<typeof actions.addTodo>
  | ReturnType<typeof actions.removeTodo>
  | ReturnType<typeof actions.toggleTodo>;

describe('todos reducer', () => {
  it('should return the initial state', () => {
    const action = {} as ActionTypes;

    const result = reducer(undefined, action);

    expect(result).toEqual(initialState);
  });

  it('should handle ADD_TODO', () => {
    const action: ActionTypes = {
      type: constants.ADD_TODO,
      payload: stateMock[0],
    };

    const result = reducer([], action);

    expect(result).toEqual(stateMock);
  });

  test('should handle ADD_TODO to an existing list', () => {
    const newTodoItem = DataGenerator.todoGenerator();

    const action: ActionTypes = {
      type: constants.ADD_TODO,
      payload: newTodoItem,
    };

    expect(reducer(stateMock, action)).toEqual(stateMock.concat(newTodoItem));
  });

  it('should handle TOGGLE_TODO', () => {
    const action: ActionTypes = {
      type: constants.TOGGLE_TODO,
      payload: todoMock.id,
    };

    const result = reducer(stateMock, action);

    expect(result).toEqual([{ ...stateMock[0], completed: true }]);
  });

  it('should handle REMOVE_TODO', () => {
    const action: ActionTypes = {
      type: constants.REMOVE_TODO,
      payload: todoMock.id,
    };

    const result = reducer(stateMock, action);

    expect(result).toEqual([]);
  });
});
