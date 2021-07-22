import Image from 'next/image';
import styles from '../styles/Modal.module.css';

function Modal({ gigs, setModal }) {
    console.log(gigs.id);
    return (
        <>
            <div className={styles.modalContainer}>
                <div className={styles.modalBG} onClick={() => setModal(false)} />
                <div id="home" className={styles.contentContainer}>
                    <p>{gigs.artist}</p>

                    <div
                        className={styles.imageContainer}
                        style={{ backgroundImage: `url(images/artists/${gigs.id}.jpg)` }}
                    />
                </div>
            </div>
        </>
    );
}

export default Modal;
