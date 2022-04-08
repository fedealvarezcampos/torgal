import { useState } from 'react';
import useCheckMobile from '../helpers/useCheckMobile';
import { supabaseHost } from '../lib/constants';
import { motion as m } from 'framer-motion';
import Spinner from './spinner';
import styles from '../styles/ArtistInfo.module.css';
import Image from 'next/image';

function ArtistInfo({ gigs, setModal }) {
	const mobile = useCheckMobile();

	const [loading, setLoading] = useState(true);
	const [isImageLoading, setImageLoading] = useState(true);

	return (
		<>
			<m.div
				exit={{ opacity: 0 }}
				transition={{ duration: 0.4 }}
				className="modalContainer"
				key={setModal}
			>
				{mobile && <span className="exitButton" onClick={() => setModal(false)} />}
				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="modalBG"
					onClick={() => setModal(false)}
				/>
				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					id="home"
					className={styles.contentContainer}
				>
					<p className={styles.artistName}>{gigs.artist}</p>
					{loading && (
						<div className={`${styles.youtube} ${styles.spinner}`}>
							<Spinner />
						</div>
					)}
					{gigs?.videoIntro && (
						<iframe
							className={styles.youtube}
							src={`https://www.youtube.com/embed/${gigs?.videoIntro}?&loop=1&rel=0&playlist=${gigs?.videoIntro}`}
							title="youtube player"
							width="100%"
							height="100%"
							frameBorder="0"
							onLoad={() => setLoading(false)}
							mute="0"
							allowFullScreen
						/>
					)}
					<div className={`${styles.image}`}>
						<Image
							objectFit="cover"
							layout="fill"
							className={isImageLoading ? styles.imageLoading : styles.imageLoaded}
							quality={80}
							src={supabaseHost + gigs?.image}
							alt="artist"
							onLoadingComplete={() => setImageLoading(false)}
						/>
					</div>
					<div className={styles.bio}>{gigs.bio}</div>
					<div className={styles.socials}>
						{gigs.artistTW && (
							<div className={styles.iconContainer}>
								<a href={gigs.artistTW} target="_blank" className={styles.socialBG}>
									<img src="/images/social/twitter.svg" alt="twitter" />
								</a>
							</div>
						)}
						{gigs.artistIG && (
							<div className={styles.iconContainer}>
								<a href={gigs.artistIG} target="_blank" className={styles.socialBG}>
									<img src="/images/social/instagram.svg" alt="instagram" />
								</a>
							</div>
						)}
						{gigs.artistSF && (
							<div className={styles.iconContainer}>
								<a href={gigs.artistSF} target="_blank" className={styles.socialBG}>
									<img src="/images/social/spotify.svg" alt="spotify" />
								</a>
							</div>
						)}
						{gigs.artistYT && (
							<div className={styles.iconContainer}>
								<a href={gigs.artistYT} target="_blank" className={styles.socialBG}>
									<img src="/images/social/youtube.svg" alt="youtube" />
								</a>
							</div>
						)}
					</div>
				</m.div>
			</m.div>
		</>
	);
}

export default ArtistInfo;
