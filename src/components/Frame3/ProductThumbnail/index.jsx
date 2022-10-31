import styles from './ProductThumnail.module.scss'
import { Fragment } from 'react'
import PrimaryButton from '~/components/common/PrimaryButton'

function ProductThumnail(){
    const products =[
        {
            productImg:'T-sirt.png',
            productName: 'T-sirt',
            productPrice:'40',
            discount: '100$',
        },
        {
            productImg:'Coat.png',
            productName: 'Coat',
            productPrice:'200',
            discount: '50$',
        },
        {
            productImg:'Sweater.png',
            productName: 'Sweater',
            productPrice:'300',
            discount: '100$',
        },
        {
            productImg:'Vest.png',
            productName: 'Vest',
            productPrice:'500',
            discount: '200$',
        },
    ]
    return(
        <div>
            <div className={styles.thumbnailContainer}>
                {products.map((product,index) => {
                    return(
                        <div key={index} className={styles.productCard}>
                            <img src={product.productImg} alt={product.productName} />
                            <div className={styles.productInfo}>
                                <h3>{product.productName}</h3>
                                <h3>{product.productPrice}<span>$</span></h3>
                                <p>{product.discount}</p>
                                <button className={styles.buttonBuy}>Buy</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ProductThumnail