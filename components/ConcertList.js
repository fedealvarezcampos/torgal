import { useEffect, useState } from 'react';
import { useClosingKey } from '../helpers/useClosingKey';
import styles from '../styles/Concerts.module.css';
import Modal from '../components/Modal';
import Date from '../components/date';

function ConcertList({ gigs }) {
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState([]);

    const handleModal = data => {
        setModal(true);
        setModalData(data);
    };

    useClosingKey('Escape', modal, setModal);

    useEffect(() => {
        modal && document.body.setAttribute('style', `overflow: hidden; margin-right: 15px;`);
        !modal && document.body.removeAttribute('style', `overflow: hidden; margin-right: 15px;`);
    }, [modal]);

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
                            <span className={styles.gigArtist}>{gigs.artist}</span>
                            <button className={styles.button} onClick={() => handleModal(gigs)}>
                                + INFO
                            </button>
                            <span className={styles.gigPrice}>{gigs.gigPrice}€</span>
                            <a
                                href={gigs.gigLink !== 'soldout' ? gigs.gigLink : null}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button
                                    className={
                                        gigs.gigLink === 'soldout'
                                            ? `${styles.button} ${styles.gigSoldOut}`
                                            : styles.button
                                    }
                                >
                                    {gigs.gigLink === 'soldout' ? <span>SOLD OUT</span> : 'ENTRADAS'}
                                </button>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ConcertList;
