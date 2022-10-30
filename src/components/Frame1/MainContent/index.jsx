import { Fragment } from 'react';
import styles from './MainContent.module.scss';

const MainContent = () => {
  return (
    <Fragment>
      <div className={styles.mainInfo}>
        <div className={styles.mainInfoTitle}>
          <h2>All Your Style</h2>
          <h3>Are Here</h3>
        </div>
        <p className={styles.mainInfoDescription}>
          This e commerce website is a platform where you can order or purchase
          electronic items. You can also find different items.
        </p>
        <div className={styles.mainInfoBtn}></div>
      </div>
      <div className={styles.subInfo}></div>
      <img className={styles.tShirtImg} src="/T-shirt.png" alt="T-shirt" />
      <img className={styles.abstract1} src="/abstract.png" alt="abstract-1" />
      <img className={styles.abstract2} src="/abstract.png" alt="abstract-2" />
      <div className={styles.blurShape}></div>
    </Fragment>
  );
};

export default MainContent;
