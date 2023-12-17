import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './TodoForm.module.css';

import { Button } from '@/components/Button';
import { store } from '../../../../store';

export const TodoForm: FC = () => {
  const [text, setText] = useState('');

  const id = uuidv4();

  const handleClick = (): void => {
    const trimmedValue = text.trim();

    if (trimmedValue) {
      setText('');
      store.dispatch({
        type: 'ADD_TODO',
        payload: { id: id, text: trimmedValue, completed: false },
      });

      console.log(`addTodo: ${id}`);
    }
  };

  return (
    <form className={styles.formWrapper}>
      <div className={styles.formInputWrapper}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.formInput}
          type="text"
          placeholder="Add your new todo"
          aria-label="Add your new todo"
        />
        <Button onCLick={handleClick}>Add new</Button>
      </div>
    </form>
  );
};
