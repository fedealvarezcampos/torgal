import styles from '../styles/About.module.css';
import Map from './Map';

function About({ setShowMenu }) {
    return (
        <>
            <div className={styles.outerContainer}>
                <div id="bar" className={styles.container}>
                    <div
                        className={styles.innerContainer}
                        style={{ backgroundImage: `url(./images/about.jpg)` }}
                    ></div>
                    <div className={styles.aboutText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui veritatis
                        corporis? Natus qui ipsum, modi reprehenderit amet asperiores hic.
                    </div>
                </div>
                <div id="bar" className={styles.subContainer}>
                    <div
                        className={styles.imageContainer}
                        style={{ backgroundImage: `url(./images/bar.jpg)` }}
                    ></div>
                    <div className={styles.aboutText2}>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui
                            veritatis corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span>
                        <button className={`button ${styles.menuButton}`} onClick={() => setShowMenu(true)}>
                            VE NUESTRA CARTA
                        </button>
                    </div>
                </div>
                <Map />
            </div>
        </>
    );
}

export default About;
