import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
// import background from '../public/images/back1.jpg';

function Home() {
    const [BG, setBG] = useState();

    useEffect(() => {
        setBG(Math.floor(Math.random() * (4 - 1) + 1));
    }, [setBG]);

    return (
        <>
            {BG && (
                <div
                    id="home"
                    className={`${styles.container} fade-in`}
                    // style={{ backgroundImage: `url(${background.src})` }}
                    style={{ backgroundImage: `url('/images/back${BG}.jpg'` }}
                >
                    <div className={`${styles.titleContainer} fadeInLeft`}>
                        <img src="./images/stairs.png" alt="Torgal logo" />
                        <img src="./images/LOGO.svg" alt="Torgal logo" />
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;
