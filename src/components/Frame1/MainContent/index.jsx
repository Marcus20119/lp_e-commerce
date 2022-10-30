import { Fragment } from 'react';
import styles from './MainContent.module.scss';

const MainContent = () => {
  return (
    <Fragment>
      <div className={styles.mainInfo}></div>
      <div className={styles.subInfo}></div>
      <img className={styles.tShirtImg} src="/T-shirt.png" alt="T-shirt" />
      <img className={styles.abstract1} src="/abstract.png" alt="abstract-1" />
      <img className={styles.abstract2} src="/abstract.png" alt="abstract-2" />
      <div className={styles.blurShape}></div>
    </Fragment>
  );
};

export default MainContent;
