import styles from '../styles/Socials.module.css';
import { motion as m } from 'framer-motion';

function Socials() {
	return (
		<>
			<div id="bar" className={styles.container}>
				<m.a
					whileHover={{ scale: 1.05 }}
					href="https://twitter.com/PopTorgal"
					target="_blank"
					rel="noreferrer"
					className={styles.socialBG}
					alt="torgal twitter"
				>
					<img src="/images/social/twitter.svg" alt="torgal twitter icon" />
				</m.a>
				<m.a
					whileHover={{ scale: 1.05 }}
					href="https://www.instagram.com/cafepoptorgal/"
					target="_blank"
					rel="noreferrer"
					className={styles.socialBG}
					alt="torgal instagram"
				>
					<img src="/images/social/instagram.svg" alt="torgal instagram icon" />
				</m.a>
				<m.a
					whileHover={{ scale: 1.05 }}
					href="https://www.youtube.com/channel/UCCTFJXW-mOGoV2RWRvI6CvQ"
					target="_blank"
					rel="noreferrer"
					className={styles.socialBG}
					alt="torgal youtube"
				>
					<img src="/images/social/youtube.svg" alt="torgal youtube icon" />
				</m.a>
			</div>
		</>
	);
}

export default Socials;
