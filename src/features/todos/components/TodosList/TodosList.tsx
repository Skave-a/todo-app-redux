import { FC } from 'react';

import styles from './TodosList.module.css';

import { TodosListItem } from '../TodosListItem';

const todos = [
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

export const TodosList: FC = () => {
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodosListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
