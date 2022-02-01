import React from 'react';
import styles from '../styles/ProjectCard.module.css';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = (props) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={props.project.image} alt='project' />
      <div className={styles.content}>
        <h2>{props.project.name}</h2>
        <p>{props.project.description}</p>
        <div className={styles.tags}>
          {props.project.tags.map((tag, index) => (
            <span key={index} className={`${styles[tag]}`}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.iconContainer}>
          <a
            href={props.project.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className={styles.socialIcons} />
          </a>
          {props.project.isWIP && (
            <span className={styles.wip}>Work in Progress</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
