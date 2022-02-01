import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.frontLayer}>
          <div className={styles.textContainer}>
            <div className={styles.varMargin}>
              <h1 className={styles.underline}>Hi, I'm Jona.</h1>
              <p>
                I am a final-year Bachelor of Computer and Information Sciences
                student from AUT, majoring in Software Development. I'm
                passionate about all things tech; I love to learn new
                technologies, solve problems, and always look to improve &amp;
                expand my skills.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.backLayer}>
          <div className={styles.bgImg} />
        </div>
      </div>
    </div>
  );
};

export default About;
