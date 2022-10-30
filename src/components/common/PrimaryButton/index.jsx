import { Fragment } from 'react';
import styles from './PrimaryButton.module.scss';

const PrimaryButton = ({
  widthType,
  children,
  type = 'button',
  size = 'large',
  color = 'primary',
  style = {},
}) => {
  console.log('style', style);
  return (
    <Fragment>
      {size === 'large' && (
        <button
          type={type}
          className={styles.primaryButtonLarge}
          style={{
            display: widthType === 'full' ? 'flex' : 'inline-flex',
            width: widthType === 'full' ? '100%' : '',
            paddingLeft: widthType === 'fit' ? '40px' : '',
            paddingRight: widthType === 'fit' ? '40px' : '',
            backgroundColor:
              color === 'primary' ? 'var(--primary-color)' : color,
            ...style,
          }}>
          {children}
        </button>
      )}
      {size === 'small' && (
        <button
          type={type}
          className={styles.primaryButtonSmall}
          style={{
            display: widthType === 'full' ? 'flex' : 'inline-flex',
            width: widthType === 'full' ? '100%' : '',
            paddingLeft: widthType === 'fit' ? '22px' : '',
            paddingRight: widthType === 'fit' ? '22px' : '',
            backgroundColor:
              color === 'primary' ? 'var(--primary-color)' : color,
            ...style,
          }}>
          {children}
        </button>
      )}
    </Fragment>
  );
};

export default PrimaryButton;
