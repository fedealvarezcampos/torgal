import Head from 'next/head';
import styles from '../styles/Concerts.module.css';

function ConcertList() {
    return (
        <>
            <div
                className={styles.container}
                style={{ backgroundImage: `url(./images/wallpaperFeather.png)` }}
            >
                <div>Una cosa</div>
                <div>Una cosa</div>
                <div>Una cosa</div>
            </div>
        </>
    );
}

export default ConcertList;
