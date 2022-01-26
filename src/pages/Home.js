import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  return (
    <div>
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
          <FaGithub style={{ color: '#edf0f1', fontSize: '25px' }} />
          <FaLinkedin
            style={{
              color: '#edf0f1',
              fontSize: '25px',
              margin: '0px 15px',
            }}
          />
          <FaEnvelope style={{ color: '#edf0f1', fontSize: '25px' }} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            paddingTop: '40px',
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
