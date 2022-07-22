import { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import DateConverter from '../../basic/date';
import ArtistInfo from './ArtistInfo';
import s from '../../../styles/Concerts.module.css';
import { Modal } from '../../basic/modal/modal';

function ConcertList({ gigs }) {
	const [modal, setModal] = useState(false);
	const [modalData, setModalData] = useState([]);

	const closeModal = () => setModal(false);

	const handleModal = data => {
		setModal(true);
		setModalData(data);
	};

	const dateNow = new Date().toISOString();

	return (
		<>
			<AnimatePresence exitBeforeEnter>
				{modal && (
					<Modal isOpen={modal} close={closeModal}>
						<ArtistInfo gigs={modalData} key={modal} setModal={setModal} />
					</Modal>
				)}
			</AnimatePresence>
			<div
				id="conciertos"
				className={s.container}
				style={{ backgroundImage: `url(./images/wallpaperFeather.webp)` }}
			>
				<ul className={s.gigList}>
					{gigs.map(gigs => (
						<m.li
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className={`${s.gigItem} ${gigs.gigDate < dateNow && s.hidden}`}
							key={gigs.id}
						>
							<DateConverter dateString={gigs.gigDate} />
							<span className={s.gigArtist}>{gigs.artist}</span>
							{gigs.bio && (
								<button className="button" onClick={() => handleModal(gigs)}>
									+ INFO
								</button>
							)}
							<span className={s.gigPrice}>{gigs.gigPrice}€</span>
							<div className={s.gigButtonCol}>
								{gigs.gigLink !== 'soldout' ? (
									<a href={gigs.gigLink} target="_blank" rel="noreferrer">
										<button
											className={gigs.soldout ? `button ${s.gigSoldOut}` : 'button'}
										>
											{gigs.soldout ? <span>SOLD OUT</span> : 'ENTRADAS'}
										</button>
									</a>
								) : (
									<button className={s.gigSoldOut}>
										<span>SOLD OUT</span>
									</button>
								)}
							</div>
						</m.li>
					))}
					{gigs.length < 1 && (
						<m.li
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className={`${s.gigItem} ${s.noGigs}`}
						>
							¡Sin fechas de momento!
						</m.li>
					)}
				</ul>
			</div>
		</>
	);
}

export default ConcertList;
