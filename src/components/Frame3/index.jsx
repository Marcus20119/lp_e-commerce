
import styles from './Frame3.module.scss'
import ProductSection from './ProductSection';
import ProductThumnail from './ProductThumbnail';
const Frame3 = () => {
  return (
    <div className={styles.frame3}>
      <ProductSection />
      <ProductThumnail/>
    </div>
  )
};

export default Frame3;

