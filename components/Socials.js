import styles from '../styles/Socials.module.css';

function Socials() {
    return (
        <>
            <div className={styles.outerContainer}>
                <div id="bar" className={styles.container}>
                    <div className={styles.socialBG}>
                        <img src="/images/twitter.svg" alt="" />
                    </div>
                    <div className={styles.socialBG}>
                        <img src="/images/instagram.svg" alt="" />
                    </div>
                    <div className={styles.socialBG}>
                        <img src="/images/youtube.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Socials;
