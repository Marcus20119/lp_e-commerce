import styles from './Frame1.module.scss';
import MainContent from './MainContent';
import Navbar from './Navbar';

const Frame1 = () => {
  return (
    <div className={styles.frame1}>
      <Navbar />
      <MainContent />
    </div>
  );
};

export default Frame1;
