import Head from 'next/head';
import styles from '../styles/Home.module.css';

function Home() {
    return (
        <>
            <div className={styles.container} style={{ backgroundImage: `url(./images/back01.jpg)` }} />
        </>
    );
}

export default Home;
