import Head from 'next/head';
import styles from '../styles/Home.module.css';

function Home() {
    return (
        <>
            <div className={styles.container} style={{ backgroundImage: `url(./images/back01.jpg)` }}>
                <div className={styles.titleContainer}>
                    <div className={styles.sideTitle}>café & pop</div>
                    <div className={styles.mainTitle}>TORGAL</div>
                </div>
            </div>
        </>
    );
}

export default Home;
