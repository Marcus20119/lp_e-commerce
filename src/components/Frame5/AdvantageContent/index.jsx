import styles from './AdvantageContent.module.scss'
import { Fragment } from 'react'

const achievements = [
    {   
        logo:'Experience1.png',
        icon:'Frame5_icon1.png',
        name: 'Years Experience',
        description:'Fashion yourself as a Parfast application user'
    },
    {
        logo:'Experience2.png',
        icon:'Frame5_icon2.png',
        name: 'Achievement',
        description:'Create a new Fashion for you to use anytime and anywhere'
    },
    {
        logo:'Experience3.png',
        icon:'Frame5_icon3.png',
        name: 'Positif Review',
        description:'You can use T-shirt in peace and all its facilities'
    }
]

function AdvantageContent(){
    return (
        <Fragment>
            <div className={styles.advantageContainer}>
                {achievements.map((achievement,index) =>{
                    return(
                        <div key={index} className={styles.contentContainer}>
                            <div className={styles.advantageCard}>
                                <div className={styles.advantageLogo}>
                                    <img src={ achievement.logo } alt="logo" />
                                    <img className={styles.icon} src={ achievement.icon } alt="logo" />
                                </div>
                                <h1 className={ styles.advantageName }>{achievement.name}</h1>
                                <p className={styles.advantageDescription}>{achievement.description}</p>
                                <p style={{ textAlign:"center",fontSize :"12px",color:"var(--primary-color)" }}>Read more</p>
                                <button className={styles.button}>See More</button>
                            </div>
                            <svg className={styles.more} width="38" height="8" viewBox="0 0 38 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#23254B"/>
                                <circle cx="14" cy="4" r="4" fill="#484B86"/>
                                <circle cx="24" cy="4" r="4" fill="#9193AE"/>
                                <circle cx="34" cy="4" r="4" fill="#DDDEED"/>
                            </svg>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}
export default AdvantageContent;