import React from 'react';
import styles from '../styles/ProjectCard.module.css';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = (props) => {
  console.log(`styles.${props.project.tags[0]}`);

  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src='/images/1.png' alt='project' />
      <div className={styles.content}>
        <h2>{props.project.name}</h2>
        <p>
          {props.project.description}
          {props.href}
          {props.image}
        </p>
        <div className={styles.tags}>
          {props.project.tags.map((tag, index) => (
            <span key={index} className={`${styles[tag]}`}>
              {tag}
            </span>
          ))}
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
