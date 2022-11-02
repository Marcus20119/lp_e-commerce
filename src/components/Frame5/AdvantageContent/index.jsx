import styles from './AdvantageContent.module.scss'
import { Fragment } from 'react'

const achievements = [
    {
        icon:'',
        name: 'Years Experience',
        describe:'Fashion yourself as a Parfast application user'
    },
    {
        icon:'',
        name: 'Achievement',
        describe:'Create a new Fashion for you to use anytime and anywhere'
    },
    {
        icon:'',
        name: 'Positif Review',
        describe:'You can use T-shirt in peace and all its facilities'
    }
]

function AdvantageContent(){
    return (
        <Fragment>
            <div className={styles.advantageContainer}>
                {achievements.map(achievement =>{
                    return(
                        <div className={styles.advantageCard}>
                            <h1>abc</h1>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}
export default AdvantageContent;