import styles from './Frame1.module.scss';
import MainContent from './MainContent';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

const Frame1 = () => {
  return (
    <div className={styles.frame1}>
      <Navbar />
      <MainContent />
      <SearchBar />
    </div>
  );
};

export default Frame1;
