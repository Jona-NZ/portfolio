import styles from '../styles/Toggle.module.css';
import { RiSunLine } from 'react-icons/ri';
import { RiMoonLine } from 'react-icons/ri';

const LightDarkToggle = (props) => {
  return (
    <div>
      <div>
        <input
          type='checkbox'
          className={styles.checkbox}
          id='toggle'
          onClick={props.click}
        />
        <label className={styles.label} for='toggle'>
          <RiMoonLine className={styles.moon} />
          <RiSunLine className={styles.sun} />
          <div className={styles.toggleBall}></div>
        </label>
      </div>
    </div>
  );
};

export default LightDarkToggle;
