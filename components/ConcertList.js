import { useEffect, useState } from 'react';
import { useClosingKey } from '../helpers/useClosingKey';
import { AnimatePresence } from 'framer-motion';
import DateConverter from './date';
import ArtistInfo from './ArtistInfo';
import styles from '../styles/Concerts.module.css';

function ConcertList({ gigs }) {
	const [modal, setModal] = useState(false);
	const [modalData, setModalData] = useState([]);

	const dateNow = new Date().toISOString();

	const handleModal = data => {
		setModal(true);
		setModalData(data);
	};

	useClosingKey('Escape', modal, setModal);

	useEffect(() => {
		modal && document.body.setAttribute('style', `overflow: hidden; margin-right: 15px;`);
		!modal && document.body.removeAttribute('style', `overflow: hidden; margin-right: 15px;`);
	}, [modal]);

	return (
		<>
			<AnimatePresence exitBeforeEnter>
				{modal && <ArtistInfo gigs={modalData} key={modal} setModal={setModal} />}
			</AnimatePresence>
			<div
				id="conciertos"
				className={styles.container}
				style={{ backgroundImage: `url(./images/wallpaperFeather.webp)` }}
			>
				<ul className={styles.gigList}>
					{gigs.map(
						gigs =>
							gigs?.gigDate > dateNow && (
								<li className={styles.gigItem} key={gigs.id}>
									<DateConverter dateString={gigs.gigDate} />
									<span className={styles.gigArtist}>{gigs.artist}</span>
									{gigs.bio && (
										<button className="button" onClick={() => handleModal(gigs)}>
											+ INFO
										</button>
									)}
									<span className={styles.gigPrice}>{gigs.gigPrice}€</span>
									{gigs.gigLink !== 'soldout' ? (
										<a href={gigs.gigLink} target="_blank" rel="noreferrer">
											<button
												className={
													gigs.gigLink === 'soldout'
														? `button ${styles.gigSoldOut}`
														: 'button'
												}
											>
												{gigs.gigLink === 'soldout' ? (
													<span>SOLD OUT</span>
												) : (
													'ENTRADAS'
												)}
											</button>
										</a>
									) : (
										<button className={styles.gigSoldOut}>
											<span>SOLD OUT</span>
										</button>
									)}
								</li>
							)
					)}
				</ul>
			</div>
		</>
	);
}

export default ConcertList;
