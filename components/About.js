import styles from '../styles/About.module.css';

function About() {
    return (
        <>
            <div id="bar" className={styles.container}>
                <div
                    className={styles.innerContainer}
                    style={{ backgroundImage: `url(./images/about.jpg)` }}
                ></div>
                <div className={styles.aboutText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui veritatis
                    corporis? Natus qui ipsum, modi reprehenderit amet asperiores hic.
                </div>
            </div>
        </>
    );
}

export default About;
