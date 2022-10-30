import styles from './PrimaryButton.module.scss';

const PrimaryButton = ({ type = 'button', widthType, message, style = {} }) => {
  return (
    <button
      type={type}
      className={styles.primaryButton}
      style={{
        ...style,
        width: widthType === 'full' ? '100%' : '',
        paddingLeft: widthType === 'fit' ? '40px' : '',
        paddingRight: widthType === 'fit' ? '40px' : '',
      }}>
      {message}
    </button>
  );
};

export default PrimaryButton;
