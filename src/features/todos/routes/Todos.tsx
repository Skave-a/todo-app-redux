import { FC } from 'react';

import { TodosList } from '../components/TodosList';
import { TodoForm } from '../components/TodoForm';

export const Todos: FC = () => {
  return (
    <>
      <TodoForm />
      <TodosList />
    </>
  );
};
