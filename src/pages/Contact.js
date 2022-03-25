import React from 'react';
import styles from '../styles/Contact.module.css';

const contactObjs = [
  {
    title: 'website',
    link: 'jona.nz',
    href: 'https://jona.nz',
  },
  {
    title: 'github',
    link: 'jona-nz',
    href: 'https://github.com/Jona-NZ',
  },
  {
    title: 'linkedin',
    link: 'jona-stevenson-nz',
    href: 'https://www.linkedin.com/in/jona-stevenson-nz/',
  },
  {
    title: 'email',
    link: 'hello@jona.nz',
    href: 'mailto:hello@jona.nz',
  },
];

const Contact = () => {
  let lastElement = contactObjs.length - 1;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1 className={styles.underline}>Get in Touch</h1>
        </div>

        <span className={styles.title}>
          <span className={styles.number}>1</span> .contact{' '}
          <span className={styles.bracket}>&#123;</span>
        </span>

        {contactObjs.map((contactObj, index) => {
          return (
            <div>
              <span className={styles.number}>{index + 2}</span>
              <span className={styles.line} key={index}>
                {contactObj.title}:{' '}
                <a
                  href={contactObj.href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className={styles.link}>{contactObj.link}</span>
                </a>
                &#59;
              </span>
            </div>
          );
        })}

        <span className={styles.bracket}>
          <span className={styles.number}>{lastElement + 3}</span> &#125;
        </span>
      </div>
    </div>
  );
};

export default Contact;
