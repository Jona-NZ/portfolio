import React from 'react';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ props }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src='/images/1.png' alt='' />
      <div className={styles.content}>
        <h2>Project Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          consequatur.
        </p>
        <div className={styles.tags}>
          <span className={styles.react}>react</span>
          <span className={styles.node}>node</span>
          <span className={styles.mongo}>mongo</span>
          <span className={styles.firebase}>firebase</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
