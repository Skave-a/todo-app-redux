import { FC } from 'react';

import styles from './App.module.css';

import { Todos } from '@/features/todos';
import { Provider } from 'react-redux';
import { store } from './store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className={styles.appContainer}>
        <h1 className={styles.header}>Todo App</h1>
        <Todos />
      </div>
    </Provider>
  );
};

export default App;
