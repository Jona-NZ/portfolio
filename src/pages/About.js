import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.frontLayer}>
          <div className={styles.textContainer}>
            <div
              style={{
                margin: '60px' /* EDIT FOR MOBILE - 60px desktop 40px mobile */,
              }}
            >
              <h1 className={styles.underline}>Hi, I'm Jona.</h1>
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet epic consectetur adipisicing elit.
                Nihil dolores eos ut beatae facere soluta eius swag ipsam
                provident tempora nulla adipisci, voluptatibus cupiditate aut
                voluptas iste quisquam animi? Placeat delectus aperiam elit
                reiciendis ullam ducimus dolor ipsa natus tempora aliquid dicta?
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
