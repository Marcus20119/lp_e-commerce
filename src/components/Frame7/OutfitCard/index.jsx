import styles from './OutfitCard.module.scss';

const OutfitCard = ({ outfitCardData }) => {
  return (
    <div className={styles.outfit}>
      <img
        className={styles.outfitImg}
        src={outfitCardData.imgLink}
        alt={outfitCardData.mainTitle}
      />
      <div className={styles.outfitInfo}>
        <div className={styles.outfitInfoTitle}>
          <h5>{outfitCardData.mainTitle}</h5>
          <h6>{outfitCardData.subTitle}</h6>
        </div>
        <span className={styles.outfitInfoPrice}>{outfitCardData.price}</span>
      </div>
    </div>
  );
};

export default OutfitCard;
