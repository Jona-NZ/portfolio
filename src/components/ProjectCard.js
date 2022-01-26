import React from 'react';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ props }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2>Project Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          consequatur.
        </p>
        <div className={styles.tags}>
          <span>react</span>
          <span>node</span>
          <span>mongo</span>
          <span>material-ui</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
