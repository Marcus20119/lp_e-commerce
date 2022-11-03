import styles from './Information.module.scss'
import { Fragment } from 'react'
const packages = [
    {
        entity:"Personal",
        price:"$12",
        icon:"",
        preferential:[
            "Unlock Special Future",
            "Coud service",
            "Unlimited Saved",
            "All Type of File",
            "Update Support",
            "For 2 Device"
        ]
    },
    {
        entity:"Team",
        price:"$50",
        icon:"",
        preferential:[
            "Unlock Special Future",
            "Coud service",
            "Unlimited Saved",
            "All Type of File",
            "Update Support",
            "For 2 Device"
        ]
    }
]
function Information(){
    return (
        <Fragment>
        <div className={styles.container}>
            {packages.map((item,index)=>{
                return(
                    <div key={index} className={styles.packageCard}>
                        <h3>{item.entity}</h3>
                        <div className={styles.price}><h1>{item.price}</h1><p>/month</p></div>
                        <div className={styles.preferentialContainer}>
                            {item.preferential.map((item,index) =>{
                                return(
                                    <div key={index} className={styles.preferential}>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="12" cy="12.5" rx="12" ry="12.5" fill="#FE9E66"/>
                                            <path d="M8 12L11.4615 16L17 10" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <p>{item}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <button className={styles.tryButton}>GET STARTED</button>
                    </div>
                )
            })}   
        </div>
        <img className={styles.ab1} src="abstract.png" alt="abstract" />
        <img className={styles.ab2} src="abstract.png" alt="abstract" /> 
        <div className={styles.blur}></div>
        </Fragment>
    )
};
export default Information;