import { FC, useState } from 'react';

import styles from './TodoForm.module.css';

import { Button } from '@/components/Button';

export const TodoForm: FC = () => {
  const [text, setText] = useState('');

  const handleClick = (): void => {
    const trimmedValue = text.trim();

    if (trimmedValue) {
      console.log('Add new todo:', trimmedValue);
      setText('');
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
