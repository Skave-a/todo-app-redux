import { FC } from 'react';

import styles from './TodosListItem.module.css';

import { ButtonRemove } from '@/components/ButtonRemove';
import { Todo } from '../../types';

type Props = {
  todo: Todo;
};

export const TodosListItem: FC<Props> = ({ todo: { id, text, completed } }) => {
  const completedClass = completed ? styles.todoTextThrough : '';

  const handleChange = () => {
    console.log(`toggleTodoCompleted: ${id}`);
  };

  const handleRemove = () => {
    console.log(`removeTodo: ${id}`);
  };

  return (
    <div className={styles.todoRow}>
      <div className={styles.todoInputWrapper}>
        <input
          checked={completed}
          onChange={handleChange}
          type="checkbox"
          className={styles.todoInput}
        />
      </div>
      <div className={`${styles.todoText} ${completedClass}`}>{text}</div>
      <ButtonRemove onCLick={handleRemove} />
    </div>
  );
};
