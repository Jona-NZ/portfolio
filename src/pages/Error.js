import React from 'react';
import styles from '../styles/Error.module.css';
import { HiOutlineEmojiSad } from 'react-icons/hi';

const Error = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <HiOutlineEmojiSad />
        </div>
        <h2>404</h2>
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
};

export default Error;
