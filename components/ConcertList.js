import Head from 'next/head';
import styles from '../styles/Concerts.module.css';

// export async function getStaticProps() {
//     const allPostsData = getSortedGigsData();
//     return {
//         props: {
//             allGigsData,
//         },
//     };
// }

function ConcertList({ gigs }) {
    return (
        <>
            <div
                className={styles.container}
                style={{ backgroundImage: `url(./images/wallpaperFeather.png)` }}
            >
                <ul className={styles.gigList}>
                    {gigs.map(({ id, date, artist, price }) => (
                        <li className={styles.gigItem} key={id}>
                            <span>{date}</span>
                            <span className={styles.gigArtist}>{artist}</span>
                            <span className={styles.gigPrice}>{price}</span>
                            <button className={styles.button}>
                                <span>ENTRADAS</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ConcertList;
