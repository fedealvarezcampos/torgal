import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import back01 from '../public/images/back1.webp';
import back02 from '../public/images/back2.webp';
import back03 from '../public/images/back3.webp';
import back04 from '../public/images/back4.webp';

function Home() {
	const bgArray = [back01, back02, back03, back04];
	const [random, setRandom] = useState();
	const randomBG = bgArray[random];

	useEffect(() => {
		setRandom(Math.floor(Math.random() * bgArray?.length));
	}, [setRandom]);

	return (
		<>
			<div id="home" className={`${styles.container}`}>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.backImage}>
					{randomBG && (
						<Image
							src={randomBG}
							alt="header image"
							quality="85"
							layout="responsive"
							priority
							placeholder="blur"
						/>
					)}
				</motion.div>
				<div className={`${styles.titleContainer} fadeInLeft`}>
					<img src="./images/stairs.png" width="455" height="456" alt="Torgal logo" />
					<img src="./images/LOGO.svg" width="807" height="296" alt="Torgal logo" />
				</div>
			</div>
		</>
	);
}

export default Home;
