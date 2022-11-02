import clsx from 'clsx';
import { useLayoutEffect, useRef, useState } from 'react';
import styles from './HeaderSection.module.scss';

const navList = ['All', 'Accessories', 'Catagories', 'T-shirt'];

const HeaderSection = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [mainCoords, setMainCoords] = useState();
  const [tabCoords, setTabCoords] = useState();
  console.log('tabCoords', tabCoords);
  const mainRef = useRef();

  useLayoutEffect(() => {
    if (mainRef.current) {
      const firstChild = mainRef.current.firstChild;
      setMainCoords(mainRef.current.getBoundingClientRect());
      setTabCoords(firstChild.getBoundingClientRect());
      setMainCoords({ left: 415.88751220703125, width: 694.6124877929688 });
      setTabCoords({ left: 415.88751220703125, width: 84.5 });
    }
  }, [mainRef]);
  return (
    <div className={styles.headerWrap}>
      <h2 className={styles.headerTitle}>Looking for favorite T-shirt ?</h2>
      <div className={styles.headerNavbar}>
        <div ref={mainRef} className={styles.headerNavbarTabs}>
          {navList.map((navItem, index) => (
            <span
              key={`frame4NavbarTab${navItem}`}
              className={clsx(styles.headerNavbarTab, {
                [styles.headerNavbarTabActive]: currentTabIndex === index,
              })}
              onClick={e => {
                setCurrentTabIndex(index);
                setTabCoords(e.target.getBoundingClientRect());
              }}>
              {navItem}
            </span>
          ))}
        </div>
        {mainCoords && (
          <div
            className={styles.headerNavbarGrayLine}
            style={{
              left: mainCoords.left - 31,
              width: mainCoords.width,
            }}></div>
        )}
        {tabCoords && (
          <div
            className={styles.headerNavbarOrangeLine}
            style={{
              left: tabCoords.left - 31,
              width: tabCoords.width,
            }}></div>
        )}
      </div>
    </div>
  );
};

export default HeaderSection;
