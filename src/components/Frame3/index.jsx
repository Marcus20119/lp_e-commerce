
import styles from './Frame3.module.scss'
import ProductSection from './ProductSection';
import ProductThumbnail from './ProductThumbnail';
const Frame3 = () => {
  return (
    <div className={styles.frame3}>
      <ProductSection />
      <ProductThumbnail/>
    </div>
  )
};

export default Frame3;

