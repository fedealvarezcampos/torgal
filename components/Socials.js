import styles from '../styles/Socials.module.css';

function Socials() {
    return (
        <>
            <div className={styles.outerContainer}>
                <div id="bar" className={styles.container}>
                    <a href="https://twitter.com/PopTorgal" target="_blank" className={styles.socialBG}>
                        <img src="/images/social/twitter.svg" alt="" />
                    </a>
                    <a
                        href="https://www.instagram.com/cafepoptorgal/"
                        target="_blank"
                        className={styles.socialBG}
                    >
                        <img src="/images/social/instagram.svg" alt="" />
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UCCTFJXW-mOGoV2RWRvI6CvQ"
                        target="_blank"
                        className={styles.socialBG}
                    >
                        <img src="/images/social/youtube.svg" alt="" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Socials;
