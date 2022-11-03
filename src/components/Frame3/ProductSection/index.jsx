import styles from './ProductSection.module.scss'
import { Fragment } from "react";
import PrimaryButton from '~/components/common/PrimaryButton';

function ProductSection(){
    return(
        <Fragment>
            <div className={styles.sectionHeader}>
                <h1>Our best seller product</h1>
                <PrimaryButton
                    widthType="fit"
                    style={{
                        fontFamily: "'Roboto', sans-serif",
                        paddingRight: '30px',
                        paddingLeft: '30px',
                    }}
                >
                    <span>See all Product</span>
                    <svg 
                        width="27" 
                        height="14" 
                        viewBox="0 0 27 14" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7H26M26 7L20.2308 1M26 7L20.2308 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </PrimaryButton>
            </div>
        </Fragment>
    )

}
export default ProductSection;