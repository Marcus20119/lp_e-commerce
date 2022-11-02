import styles from './StatisticContent.module.scss'

function StatisticContent(){
    return(
        <div className={styles.container}>
            <div className={styles.StatisticCol}>
                <h1>36+</h1>
                <p>UserTrust</p>
            </div>
            <div className={styles.break}></div>
            <div className={styles.StatisticCol}>
                <h1>42k+</h1>
                <p>Brand Vision </p>
            </div>
            <div className={styles.break}></div>
            <div className={styles.StatisticCol}>
                <h1>42k+</h1>
                <p>Achievement</p>
            </div>
        </div>
    )
}
export default StatisticContent;