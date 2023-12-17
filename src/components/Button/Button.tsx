import { FC, PropsWithChildren } from 'react';

import styles from './Button.module.css';

type Props = {
  onCLick: () => void;
};

export const Button: FC<PropsWithChildren<Props>> = ({ onCLick, children }) => {
  return (
    <button onClick={onCLick} className={styles.button} type="button">
      {children}
    </button>
  );
};
