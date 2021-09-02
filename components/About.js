import Image from 'next/image';
import styles from '../styles/About.module.css';
import aboutImage from '../public/images/bar.jpg';
import Map from './Map';

function About() {
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui veritatis
                        corporis? Natus qui ipsum, modi reprehenderit amet asperiores hic.
                    </div>
                </div>
                <button className={`button ${styles.menuButton}`}>VER CARTA</button>
                <Map />
            </div>
        </>
    );
}

export default About;
