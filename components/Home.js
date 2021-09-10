import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

function Home() {
    const [BG, setBG] = useState();

    useEffect(() => {
        setBG(Math.floor(Math.random() * (4 - 1) + 1));
    }, [setBG]);

    return (
        <>
            <div
                id="home"
                className={`${styles.container} fade-in`}
                // style={{ backgroundImage: `url(${background.src})` }}
                style={{ backgroundImage: BG && `url('/images/back${BG}.webp'` }}
            >
                <div className={`${styles.titleContainer} fadeInLeft`}>
                    <img src="./images/stairs.png" width="455" height="456" alt="Torgal logo" />
                    <img src="./images/LOGO.svg" width="807" height="296" alt="Torgal logo" />
                </div>
            </div>
        </>
    );
}

export default Home;
