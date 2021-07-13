import Head from 'next/head';
import styles from '../styles/About.module.css';

function About() {
    return (
        <>
            <div className={styles.container}>
                <div
                    className={styles.innerContainer}
                    style={{ backgroundImage: `url(./images/about.jpg)` }}
                />
            </div>
        </>
    );
}

export default About;
