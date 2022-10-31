import { Fragment } from "react";
import styles from'./MainContent.module.scss'

function MainContent(){
    

    return (
        <Fragment>
            <div className={styles.mainSologan}>
                <div className={styles.sologanQuote}>
                    <h2>Our experience to always update the lates stayles"</h2>
                </div>
                <img className={styles.comma} src="comma.png" alt="comama" />
            </div>
            <div className={styles.imgVideoFrame}>
                <img className={styles.imgFrame} src="Rectangle 14.png" alt="Rectangle 14"/>
                <div className={styles.videoCard}>
                    <img src="man.png" className="videoImg"  alt="man" />
                    <div className={styles.btnPlay}>
                        <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="30.3592" cy="30" rx="29.9744" ry="30" fill="#030303" fillOpacity="0.77"/>
                            <path d="M40.7585 30.371L25.4527 38.9926L25.6454 21.4152L40.7585 30.371Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
            <img className={styles.vectorImg} src="Vector.png" alt="Vector" />
            <img className={styles.abstract} src="abstract.png" alt="abstract-1" />
        </Fragment>
    )
}
export default MainContent