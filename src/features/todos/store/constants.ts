import { Todo } from "../types";

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


const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

export {todos, ADD_TODO, REMOVE_TODO, TOGGLE_TODO};
