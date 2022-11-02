import PrimaryButton from '../common/PrimaryButton';
import styles from './Frame7.module.scss';
import OutfitCard from './OutfitCard';

const outfitCardsData = [
  {
    imgLink: '/frame7-pic1.png',
    mainTitle: 'New Lookbook Summer',
    subTitle: 'Collection 2021',
    price: '$173',
  },
  {
    imgLink: '/frame7-pic2.png',
    mainTitle: 'New Lookbook',
    subTitle: 'Collection 2021',
    price: '$210',
  },
  {
    imgLink: '/frame7-pic3.png',
    mainTitle: 'New Lookbook Winter',
    subTitle: 'Collection 2021',
    price: '$344',
  },
];

const Frame7 = () => {
  return (
    <div className={styles.frame7}>
      <div className={styles.blurShape}></div>
      <div className={styles.Content}>
        <div className={styles.ContentHeader}>
          <h2>Trending Outfit Of The Day.</h2>
          <p>
            The e-commerce site has an eye catching design and is perfect for
            people who want to buy different items, but don't have time for
            shopping.
          </p>
          <PrimaryButton
            size="small"
            widthType="fit"
            style={{ padding: '12px 32px', marginTop: '20px' }}>
            Explore
          </PrimaryButton>
        </div>
        <div className={styles.ContentBody}>
          {outfitCardsData.map((outfitCardData, index) => (
            <OutfitCard
              key={`frame7OutfitCard${index}`}
              outfitCardData={outfitCardData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frame7;
