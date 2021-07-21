import styles from '../styles/Modal.module.css';
import { getData } from '../../lib/posts';

function Modal() {
    return (
        <>
            <div
                id="home"
                className={styles.container}
                style={{ backgroundImage: `url(./images/back01.jpg)` }}
            >
                <div className={styles.titleContainer}>
                    <img src="./images/LOGO.svg" alt="Torgal logo" />
                </div>
            </div>
        </>
    );
}

export default Modal;
