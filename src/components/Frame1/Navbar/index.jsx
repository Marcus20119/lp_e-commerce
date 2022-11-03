import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.scss';

const navTabs = ['Home', 'Shop', 'Features', 'Pricing'];

const Navbar = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [coords, setCoords] = useState({});
  const tablistRef = useRef();
  useEffect(() => {
    if (tablistRef.current) {
      const firstTab = tablistRef.current.firstChild;
      setCoords(firstTab.getBoundingClientRect());
      // Fix lỗi lấy sai coords trong lần render đầu tiên, không hiểu vì sao lại chạy sai
      const initCoords = {
        bottom: 75.5,
        height: 21,
        left: 573.4125366210938,
        right: 627.4000358581543,
        top: 54.5,
        width: 53.98749923706055,
        x: 573.4125366210938,
        y: 54.5,
      };
      setCoords(initCoords);
    }
  }, [tablistRef]);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <svg
          width="102"
          height="25"
          viewBox="0 0 102 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3333 0C16.76 0 14.6667 2.17544 14.6667 4.8497V6.92814H9.33333V4.8497C9.33333 2.17544 7.24 0 4.66667 0C2.09333 0 0 2.17544 0 4.8497C0 7.52396 2.09333 9.6994 4.66667 9.6994H6.66667V15.2419H4.66667C2.09333 15.2419 0 17.4174 0 20.0916C0 22.7659 2.09333 24.9413 4.66667 24.9413C7.24 24.9413 9.33333 22.7659 9.33333 20.0916V18.0132H14.6667V20.0916C14.6667 22.7659 16.76 24.9413 19.3333 24.9413C21.9067 24.9413 24 22.7659 24 20.0916C24 17.4174 21.9067 15.2419 19.3333 15.2419H17.3333V9.6994H19.3333C21.9067 9.6994 24 7.52396 24 4.8497C24 2.17544 21.9067 0 19.3333 0ZM17.3333 6.92814V4.8497C17.3333 3.69963 18.2267 2.77126 19.3333 2.77126C20.44 2.77126 21.3333 3.69963 21.3333 4.8497C21.3333 5.99977 20.44 6.92814 19.3333 6.92814H17.3333ZM4.66667 6.92814C3.56 6.92814 2.66667 5.99977 2.66667 4.8497C2.66667 3.69963 3.56 2.77126 4.66667 2.77126C5.77333 2.77126 6.66667 3.69963 6.66667 4.8497V6.92814H4.66667ZM9.33333 15.2419V9.6994H14.6667V15.2419H9.33333ZM19.3333 22.1701C18.2267 22.1701 17.3333 21.2417 17.3333 20.0916V18.0132H19.3333C20.44 18.0132 21.3333 18.9415 21.3333 20.0916C21.3333 21.2417 20.44 22.1701 19.3333 22.1701ZM4.66667 22.1701C3.56 22.1701 2.66667 21.2417 2.66667 20.0916C2.66667 18.9415 3.56 18.0132 4.66667 18.0132H6.66667V20.0916C6.66667 21.2417 5.77333 22.1701 4.66667 22.1701Z"
            fill="black"
          />
          <path
            d="M43.1992 13.9507V18.9604H40.2695V4.7417H45.8164C46.8841 4.7417 47.8216 4.93701 48.6289 5.32764C49.4427 5.71826 50.0677 6.2749 50.5039 6.99756C50.9401 7.7137 51.1582 8.53076 51.1582 9.44873C51.1582 10.842 50.6797 11.9422 49.7227 12.7495C48.7721 13.5503 47.4538 13.9507 45.7676 13.9507H43.1992ZM43.1992 11.5776H45.8164C46.5911 11.5776 47.1803 11.3953 47.584 11.0308C47.9941 10.6662 48.1992 10.1453 48.1992 9.46826C48.1992 8.77165 47.9941 8.2085 47.584 7.77881C47.1738 7.34912 46.6074 7.12777 45.8848 7.11475H43.1992V11.5776Z"
            fill="black"
          />
          <path
            d="M58.9316 11.0405C58.5475 10.9884 58.209 10.9624 57.916 10.9624C56.8483 10.9624 56.1484 11.3237 55.8164 12.0464V18.9604H52.9941V8.39404H55.6602L55.7383 9.65381C56.3047 8.68376 57.0892 8.19873 58.0918 8.19873C58.4043 8.19873 58.6973 8.24105 58.9707 8.32568L58.9316 11.0405Z"
            fill="black"
          />
          <path
            d="M66.1289 18.9604C65.9987 18.7065 65.9043 18.3908 65.8457 18.0132C65.1621 18.7749 64.2734 19.1558 63.1797 19.1558C62.1445 19.1558 61.2852 18.8563 60.6016 18.2573C59.9245 17.6584 59.5859 16.9032 59.5859 15.9917C59.5859 14.8719 59.9993 14.0125 60.8262 13.4136C61.6595 12.8146 62.8607 12.5119 64.4297 12.5054H65.7285V11.8999C65.7285 11.4116 65.6016 11.021 65.3477 10.728C65.1003 10.4351 64.7064 10.2886 64.166 10.2886C63.6908 10.2886 63.3164 10.4025 63.043 10.6304C62.776 10.8582 62.6426 11.1707 62.6426 11.5679H59.8203C59.8203 10.9559 60.0091 10.3895 60.3867 9.86865C60.7643 9.34782 61.2982 8.94092 61.9883 8.64795C62.6784 8.34847 63.4531 8.19873 64.3125 8.19873C65.6146 8.19873 66.6465 8.52751 67.4082 9.18506C68.1764 9.8361 68.5605 10.7541 68.5605 11.939V16.519C68.5671 17.5216 68.707 18.2801 68.9805 18.7944V18.9604H66.1289ZM63.7949 16.9976C64.2116 16.9976 64.5957 16.9064 64.9473 16.7241C65.2988 16.5353 65.5592 16.2847 65.7285 15.9722V14.1558H64.6738C63.2611 14.1558 62.5091 14.644 62.418 15.6206L62.4082 15.7866C62.4082 16.1382 62.5319 16.4279 62.7793 16.6558C63.0267 16.8836 63.3652 16.9976 63.7949 16.9976Z"
            fill="black"
          />
          <path
            d="M70 14.456C70 13.4212 70.2017 12.499 70.6051 11.6892C71.0084 10.8795 71.5875 10.2529 72.3422 9.80942C73.1034 9.36598 73.985 9.14425 74.9869 9.14425C76.4117 9.14425 77.573 9.57485 78.4709 10.436C79.3752 11.2972 79.8794 12.4669 79.9835 13.945L80.003 14.6584C80.003 16.2586 79.5509 17.544 78.6465 18.5144C77.7422 19.4784 76.5288 19.9604 75.0064 19.9604C73.484 19.9604 72.2674 19.4784 71.3565 18.5144C70.4522 17.5504 70 16.2394 70 14.5813V14.456ZM72.8204 14.6584C72.8204 15.6481 73.009 16.4065 73.3864 16.9335C73.7637 17.454 74.3038 17.7143 75.0064 17.7143C75.6895 17.7143 76.223 17.4572 76.6069 16.9431C76.9907 16.4225 77.1827 15.5935 77.1827 14.456C77.1827 13.4855 76.9907 12.7336 76.6069 12.2002C76.223 11.6667 75.683 11.4 74.9869 11.4C74.2972 11.4 73.7637 11.6667 73.3864 12.2002C73.009 12.7272 72.8204 13.5466 72.8204 14.6584Z"
            fill="#FE9E66"
          />
          <path
            d="M88.064 18.7072C87.3679 19.5427 86.405 19.9604 85.1754 19.9604C84.0433 19.9604 83.178 19.6391 82.5794 18.9964C81.9874 18.3538 81.6849 17.4122 81.6719 16.1719V9.33706H84.4922V16.0755C84.4922 17.1616 84.9932 17.7047 85.9951 17.7047C86.9515 17.7047 87.6086 17.3769 87.9665 16.7214V9.33706H90.7966V19.7676H88.1421L88.064 18.7072Z"
            fill="#FE9E66"
          />
          <path
            d="M92.4849 14.4752C92.4849 12.8493 92.8525 11.5543 93.5877 10.5903C94.3294 9.62626 95.3411 9.14425 96.6228 9.14425C97.6507 9.14425 98.4997 9.52343 99.1699 10.2818V4.96045H102V19.7676H99.4529L99.3163 18.659C98.6136 19.5266 97.7093 19.9604 96.6032 19.9604C95.3606 19.9604 94.3619 19.4784 93.6072 18.5144C92.859 17.544 92.4849 16.1976 92.4849 14.4752ZM95.3053 14.6777C95.3053 15.6545 95.4777 16.4033 95.8225 16.9238C96.1673 17.4444 96.6683 17.7047 97.3254 17.7047C98.1972 17.7047 98.812 17.3416 99.1699 16.6153V12.499C98.8185 11.7728 98.2102 11.4097 97.3449 11.4097C95.9852 11.4097 95.3053 12.499 95.3053 14.6777Z"
            fill="#FE9E66"
          />
        </svg>
      </div>
      <div className={styles.navbarMenu}>
        <div ref={tablistRef} className={styles.navbarMenuItemsSection}>
          {navTabs.map((tab, index) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              key={`tabKey-${tab}`}
              className={clsx(styles.navbarMenuItem, {
                [styles.navbarMenuItemActive]: activeTabIndex === index,
              })}
              href="#"
              onClick={e => {
                e.preventDefault();
                setActiveTabIndex(index);
                setCoords(e.target.getBoundingClientRect());
              }}
            >
              {tab}
            </a>
            
          ))}
        </div>
        {tablistRef.current && (
          <div
            className={styles.navbarMenuUnderline}
            style={{
              left: coords.left - 52 - 31,
              width: coords.width,
            }}
          ></div>
        )}
      </div>
      <div className={styles.navbarBtn}>Contact Us</div>
    </div>
  );
};

export default Navbar;
