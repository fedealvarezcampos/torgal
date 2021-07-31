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
                    {/* <div className={styles.imageContainer}>
                        <Image
                            src={aboutImage}
                            placeholder="blur"
                            layout="responsive"
                            quality={90}
                            alt="about torgal"
                        />
                    </div> */}
                    <div
                        className={styles.imageContainer}
                        style={{ backgroundImage: `url(./images/bar.jpg)` }}
                    ></div>
                    {/* <img className={styles.imgContainer} src="/images/about.jpg" alt="torgal foto" /> */}
                    <div className={styles.aboutText2}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui veritatis
                        corporis? Natus qui ipsum, modi reprehenderit amet asperiores hic.
                    </div>
                </div>
                <Map />
            </div>
        </>
    );
}

export default About;
