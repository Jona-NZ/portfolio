import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src='/images/portrait.jpg'
          style={{
            clipPath: 'circle()',
            height: '200px',
          }}
          alt=''
        />
      </div>
      <div style={{ paddingTop: '25px' }}>
        <h1 style={{ color: '#edf0f1', textAlign: 'center' }}>
          Hi, I'm Jona 👋
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px',
          }}
        >
          <a
            href='https://github.com/Jona-NZ'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub style={{ color: '#edf0f1', fontSize: '25px' }} />
          </a>
          <a
            href='https://www.linkedin.com/in/jona-stevenson-nz/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin
              style={{
                color: '#edf0f1',
                fontSize: '25px',
                margin: '0px 15px',
              }}
            />
          </a>
          <a href='mailto:jonastevenson.nz@gmail.com'>
            <FaEnvelope style={{ color: '#edf0f1', fontSize: '25px' }} />
          </a>
        </div>
      </div>
      <div style={{ marginTop: '50px' }}>
        <h2 style={{ color: '#edf0f1', textAlign: 'center' }}>
          Recent Projects 💻
        </h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            margin: '25px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gridGap: '25px',
            width: '70%',
          }}
        >
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
