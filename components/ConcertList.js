import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useClosingKey } from '../helpers/useClosingKey';
import { motion, AnimatePresence } from 'framer-motion';
import DateConverter from './date';
import ArtistInfo from './ArtistInfo';
import styles from '../styles/Concerts.module.css';

function ConcertList() {
	const [loading, setLoading] = useState(false);
	const [modal, setModal] = useState(false);
	const [modalData, setModalData] = useState([]);
	const [gigs, setGigs] = useState([]);

	const dateNow = new Date().toISOString();

	const getGigs = async () => {
		try {
			setLoading(true);

			let { data: allGigsData, error } = await supabase.from('gigs').select('*');
			if (error) throw error;

			setGigs(allGigsData);
		} catch (error) {
			console.log(error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getGigs();
	}, []);

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
					{loading && <span className={styles.loadingMsg}>CARGANDO...</span>}
					{gigs.map(
						gigs =>
							gigs?.gigDate > dateNow && (
								<motion.li
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className={styles.gigItem}
									key={gigs.id}
								>
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
													gigs.soldout ? `button ${styles.gigSoldOut}` : 'button'
												}
											>
												{gigs.soldout ? <span>SOLD OUT</span> : 'ENTRADAS'}
											</button>
										</a>
									) : (
										<button className={styles.gigSoldOut}>
											<span>SOLD OUT</span>
										</button>
									)}
								</motion.li>
							)
					)}
				</ul>
			</div>
		</>
	);
}

export default ConcertList;
