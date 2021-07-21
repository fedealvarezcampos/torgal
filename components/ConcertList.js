import styles from '../styles/Concerts.module.css';
import Date from '../components/date';

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
                id="conciertos"
                className={styles.container}
                style={{ backgroundImage: `url(./images/wallpaperFeather.png)` }}
            >
                <ul className={styles.gigList}>
                    {gigs.map(({ id, gigDate, artist, gigPrice }) => (
                        <li className={styles.gigItem} key={id}>
                            <Date dateString={gigDate} />
                            <span className={styles.gigArtist}>{artist}</span>
                            <span className={styles.gigPrice}>{gigPrice}€</span>
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
