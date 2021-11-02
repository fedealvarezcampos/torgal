import Map from './Map';
import Marquees from './Marquees';
import styles from '../styles/About.module.css';

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
                        Aquí ibamos a poner algo sobre el bar pero nadie ha querido escribir nada. Aún así
                        queda mejor escribir esto aunque no sea más que por una cuestión estética.
                    </div>
                </div>
                <Marquees setShowMenu={setShowMenu} />
                <Map />
            </div>
        </>
    );
}

export default About;
