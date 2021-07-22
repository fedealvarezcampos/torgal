import styles from '../styles/Concerts.module.css';
import Modal from '../components/Modal';
import Date from '../components/date';
import { useState } from 'react';

// export async function getStaticProps() {
//     const allPostsData = getSortedGigsData();
//     return {
//         props: {
//             allGigsData,
//         },
//     };
// }

function ConcertList({ gigs }) {
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState([]);

    const handleModal = data => {
        setModal(true);
        setModalData(data);
    };

    return (
        <>
            {modal && <Modal gigs={modalData} setModal={setModal} />}
            <div
                id="conciertos"
                className={styles.container}
                style={{ backgroundImage: `url(./images/wallpaperFeather.png)` }}
            >
                <ul className={styles.gigList}>
                    {gigs.map(gigs => (
                        <li className={styles.gigItem} key={gigs.id}>
                            <Date dateString={gigs.gigDate} />
                            <span className={styles.gigArtist} onClick={() => handleModal(gigs)}>
                                {gigs.artist}
                            </span>
                            <span className={styles.gigPrice}>{gigs.gigPrice}€</span>
                            <button
                                className={
                                    gigs.gigLink === 'soldout'
                                        ? `${styles.button} ${styles.gigSoldOut}`
                                        : styles.button
                                }
                            >
                                {gigs.gigLink === 'soldout' ? (
                                    <span>SOLD OUT</span>
                                ) : (
                                    <a href={gigs.gigLink} target="_blank">
                                        ENTRADAS
                                    </a>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ConcertList;
