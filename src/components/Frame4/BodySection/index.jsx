import PrimaryButton from '~/components/common/PrimaryButton';
import styles from './BodySection.module.scss';

const BodySection = () => {
  return (
    <div className={styles.bodyWrap}>
      <div className={styles.blurShape}></div>
      <div className={styles.bodyContent}>
        <div className={styles.bodyContentLeft}>
          <div className={styles.bodyContentLeftVideo}>
            <img src="/frame4-pic1.png" alt="frame4 pic1" />
            <div className={styles.bodyContentLeftVideoIcon}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 19 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24.0072 13.9997L0.287907 27.9284L0.0849303 0.42251L24.0072 13.9997Z"
                  fill="#171717"
                />
              </svg>
            </div>
            <img
              className={styles.bodyContentLeftVideoImg}
              src="/frame4-pic1.png"
              alt="frame4 pic1"
            />
          </div>
          <img
            className={styles.bodyContentLeftPic}
            src="/frame4-pic2.png"
            alt="frame4 pic2"
          />
        </div>
        <div className={styles.bodyContentRight}>
          <h3 className={styles.bodyContentRightTitle}>Why Choose Us</h3>
          <p className={styles.bodyContentRightDescription}>
            Get lost on the beautiful beaches of United, or get caught up in the
            wildness of the night life. Its up to you. Nihil quaeque moderatius
            quo ut, eu vix noster fierent{' '}
          </p>
          <PrimaryButton widthType="fit" style={{ borderRadius: '7px' }}>
            ORDER NOW
          </PrimaryButton>
          <div className={styles.bodyContentRightUnderLine}>
            <span className={styles.bodyContentRightUnderLineStart}>01</span>
            <div className={styles.bodyContentRightUnderLineDash}>
              <svg
                width="330"
                height="3"
                viewBox="0 0 330 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1.5H328.5"
                  stroke="#E4E2E3"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1.5H162"
                  stroke="#222222"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
            <span className={styles.bodyContentRightUnderLineEnd}>03</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
