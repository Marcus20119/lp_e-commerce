import { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './PrimaryButton.module.scss';

const PrimaryButton = ({
  widthType,
  children,
  type = 'button',
  size = 'large',
  color = 'primary',
  style = {},
}) => {
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
          }}
        >
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
          }}
        >
          {children}
        </button>
      )}
    </Fragment>
  );
};

PrimaryButton.propsTypes = {
  widthType: PropTypes.oneOf(['full', 'fit']).isRequired,
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
  color: PropTypes.string,
  style: PropTypes.object,
};

export default PrimaryButton;
