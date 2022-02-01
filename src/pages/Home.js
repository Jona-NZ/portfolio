import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Home.module.css';
import { getProjects } from '../api/ProjectAPI';

const Home = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(getProjects());
    console.log(getProjects());
  }, [projects]);

  return (
    <div>
      <div className={styles.imgContainer}>
        <div className={styles.bgImg} />
      </div>
      <div className={styles.container}>
        <h1 className={styles.titleText}>Hi, I'm Jona 👋</h1>
        <div className={styles.iconContainer}>
          <a
            href='https://github.com/Jona-NZ'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className={styles.socialIcons} />
          </a>
          <a
            href='https://www.linkedin.com/in/jona-stevenson-nz/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin className={styles.socialIcons} />
          </a>
          <a href='mailto:jonastevenson.nz@gmail.com'>
            <FaEnvelope className={styles.socialIcons} />
          </a>
        </div>
      </div>
      <div className={styles.projectTitleContainer}>
        <h2 className={styles.titleText}>Recent Projects 💻</h2>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.projectCardContainer}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/*
          <ProjectCard name='A Project Title' />
          <ProjectCard name='Project Title' />
          <ProjectCard name='Project Title' />
          <ProjectCard name='Project Title' />
          */}
        </div>
      </div>
    </div>
  );
};

export default Home;
