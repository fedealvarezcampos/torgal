import styles from '../styles/Home.module.css';
import background from '../public/images/back01.jpg';

function Home() {
    return (
        <>
            {background && (
                <div
                    id="home"
                    className={`${styles.container} fade-in`}
                    style={{ backgroundImage: `url(${background.src})` }}
                >
                    <div className={`${styles.titleContainer} fadeInLeft`}>
                        <img src="./images/LOGO.svg" alt="Torgal logo" />
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;
