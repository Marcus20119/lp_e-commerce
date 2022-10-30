import { Fragment } from 'react';
import PrimaryButton from '~/components/common/PrimaryButton';
import styles from './MainContent.module.scss';

const subInfoData = [
  {
    icon: '/frame1-icon1.png',
    title: '1332',
    subtitle: 'Year',
  },
  {
    icon: '/frame1-icon2.png',
    title: '28',
    subtitle: 'Bids so far',
  },
  {
    icon: '/frame1-icon3.png',
    title: 'United',
    subtitle: 'Origin',
  },
];

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
        <div className={styles.mainInfoBtn}>
          <PrimaryButton
            widthType="fit"
            style={{
              fontFamily: "'Roboto', sans-serif",
              paddingRight: '50px',
              paddingLeft: '50px',
            }}>
            Explore now
          </PrimaryButton>
          <div className={styles.mainInfoBtnPlay}>
            <div>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.9151 5.54708L0.721647 10.1585L0.824727 0.757077L8.9151 5.54708Z"
                  fill="#3C3C3E"
                />
              </svg>
            </div>
            <span>Watch a Video</span>
          </div>
        </div>
      </div>
      <img className={styles.tShirtImg} src="/T-shirt.png" alt="T-shirt" />
      <img className={styles.abstract1} src="/abstract.png" alt="abstract-1" />
      <img className={styles.abstract2} src="/abstract.png" alt="abstract-2" />
      <div className={styles.subInfo}>
        {subInfoData.map((item, index) => (
          <div key={`frame1-icon${index}`} className={styles.subInfoItem}>
            <div className={styles.subInfoItemImg}>
              <img src={item.icon} alt={item.subtitle} />
            </div>
            <div className={styles.subInfoItemTitle}>
              <h4>{item.title}</h4>
              <h5>{item.subtitle}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.blurShape}></div>
    </Fragment>
  );
};

export default MainContent;
