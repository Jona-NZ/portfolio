import React from 'react';
import styles from '../styles/ProjectCard.module.css';
import { FaGithub } from 'react-icons/fa';

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

        <div className={styles.iconContainer}>
          <a
            href='https://github.com/Jona-NZ'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className={styles.socialIcons} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
