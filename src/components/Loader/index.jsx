import React from 'react';
import styles from './index.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
