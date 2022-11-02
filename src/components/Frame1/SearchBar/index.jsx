import { useState } from 'react';
import PrimaryButton from '~/components/common/PrimaryButton';
import styles from './SearchBar.module.scss';

const searchTabData = [
  {
    title: 'Location',
    subtitle: 'United Stated',
  },
  {
    title: 'Date',
    subtitle: '14-12-21',
  },
  {
    title: 'Year',
    subtitle: '793 AD',
  },
  {
    title: 'type',
    subtitle: 'Weapons',
  },
];

const SearchBar = () => {
  const [activeTabIndex, setActiveTabIndex] = useState();
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBarTabWrap}>
        {searchTabData.map((item, index) => (
          <div
            key={`searchTabItem${index}`}
            className={styles.searchBarTabItem}
            onClick={() => setActiveTabIndex(index)}
            style={{
              backgroundColor:
                index === activeTabIndex ? '#EDEDED' : 'transparent',
            }}>
            <h5>{item.title}</h5>
            <div className={styles.searchBarTabItemSubtitle}>
              <h6>{item.subtitle}</h6>
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L4.5 5L8 1"
                  stroke="#212121"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <PrimaryButton widthType="fit">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '20px', height: '20px', marginRight: '12px' }}>
          <path
            d="M9.40824 18.8155C11.4957 18.8151 13.5229 18.1163 15.1673 16.8304L20.3371 22L22 20.3372L16.8302 15.1676C18.1167 13.5232 18.816 11.4956 18.8165 9.40774C18.8165 4.22055 14.5957 0 9.40824 0C4.22077 0 0 4.22055 0 9.40774C0 14.5949 4.22077 18.8155 9.40824 18.8155ZM9.40824 2.35193C13.2997 2.35193 16.4644 5.51646 16.4644 9.40774C16.4644 13.299 13.2997 16.4635 9.40824 16.4635C5.51676 16.4635 2.35206 13.299 2.35206 9.40774C2.35206 5.51646 5.51676 2.35193 9.40824 2.35193Z"
            fill="#EEFCFF"
          />
        </svg>
        <span>Search</span>
      </PrimaryButton>
    </div>
  );
};

export default SearchBar;
