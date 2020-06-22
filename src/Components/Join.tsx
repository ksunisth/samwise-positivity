import React from 'react';
import { NavBar } from './Landing';
import styles from '../css/Join.module.css';
import JoinUsForm from './JoinUsForm';
import Bear from '../imgs/BEARRRR.svg';


export default (): React.ReactElement => (
  <div className={styles.Join}>
    <NavBar />
    <section className={styles.Team}>
      <div className={styles.Title}>Team</div>
      <span className={styles.img}>
        <img className={styles.bear} src={Bear} alt="Bear" />
        {' '}
      </span>
      <span className={styles.img}>
        <img className={styles.bear} src={Bear} alt="Bear" />
        {' '}
      </span>
      <span className={styles.img}>
        <img className={styles.bear} src={Bear} alt="Bear" />
        {' '}
      </span>
    </section>
    <JoinUsForm />
  </div>

);
