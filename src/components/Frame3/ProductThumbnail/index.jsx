import styles from './ProductThumnail.module.scss'
import { Fragment } from 'react'
import { useState } from 'react';

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
    const [activeBuy,setActiveBuy]= useState(0)
    return(
        <div>
            <div className={styles.thumbnailContainer}>
                {products.map((product,index) => {
                    return(
                        <div 
                            key={index} 
                            style={index === activeBuy ?{
                                boxShadow : "0px 4px 34px rgba(132, 132, 132, 0.5)"
                            }:{}} 
                            className={styles.productCard}
                        >
                            <img src={product.productImg} alt={product.productName} />
                            <div className={styles.productInfo}>
                                <h3>{product.productName}</h3>
                                <h3>{product.productPrice}<span>$</span></h3>
                                <p>{product.discount}</p>
                                <button 
                                    className={styles.buttonBuy}
                                    style={index === activeBuy ?{
                                        color:'#fff',
                                        backgroundColor:'var(--primary-color)'
                                    }:{}}
                                    onClick={()=>setActiveBuy(index)}
                                >
                                    Buy
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ProductThumnail