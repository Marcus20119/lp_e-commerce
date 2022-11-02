import BodySection from './BodySection';
import styles from './Frame4.module.scss';
import HeaderSection from './HeaderSection';

const Frame4 = () => {
  return (
    <div className={styles.frame4}>
      <HeaderSection />
      <BodySection />
    </div>
  );
};

export default Frame4;
