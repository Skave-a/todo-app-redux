import { FC } from 'react';

import styles from './TodosList.module.css';

import { TodosListItem } from '../TodosListItem';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../store/store';

export const TodosList: FC = () => {
  const todos = useSelector((state: AppState) => state.todos);

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodosListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
