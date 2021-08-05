import styles from '../styles/Home.module.css';

function Home() {
    return (
        <>
            <div
                id="home"
                className={`${styles.container} fade-in`}
                style={{ backgroundImage: `url(./images/back01.jpg)` }}
            >
                <div className={`${styles.titleContainer} fadeInLeft`}>
                    <img src="./images/LOGO.svg" alt="Torgal logo" />
                </div>
            </div>
        </>
    );
}

export default Home;
