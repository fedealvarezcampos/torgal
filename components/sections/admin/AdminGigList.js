import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import styles from '../../../styles/AddGigForm.module.css';

function AdminGigList({ data, setData, isUpdateMode, setIsUpdateMode, formCompleted }) {
	const router = useRouter();

	const [concerts, setConcerts] = useState([]);
	const [isGigDeleted, setIsGigDeleted] = useState(false);

	const getConcerts = async () => {
		try {
			setIsGigDeleted(false);

			const { data: allGigsData, error } = await supabase.from('gigs').select('*');

			if (error) throw error;

			setConcerts(allGigsData);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getConcerts();
	}, [isGigDeleted, formCompleted]);

	const deleteGig = async id => {
		try {
			const { error } = await supabase.from('gigs').delete().eq('id', id);

			if (error) throw error;

			setIsGigDeleted(true);

			alert('Concierto eliminado!');
		} catch (error) {
			alert(error.message);
		}
	};

	const updateMode = async id => {
		try {
			const { data: selectedGigData, error } = await supabase
				.from('gigs')
				.select('*')
				.match({ id: id });

			if (error) throw error;

			setData({
				id: selectedGigData[0].id,
				image: selectedGigData[0].image,
				artist: selectedGigData[0].artist,
				bio: selectedGigData[0].bio,
				videoIntro: selectedGigData[0].videoIntro,
				artistSite: selectedGigData[0].artistSite,
				artistTW: selectedGigData[0].artistTW,
				artistIG: selectedGigData[0].artistIG,
				artistYT: selectedGigData[0].artistYT,
				artistSF: selectedGigData[0].artistSF,
				gigPrice: selectedGigData[0].gigPrice,
				gigLink: selectedGigData[0].gigLink,
				gigDate: selectedGigData[0].gigDate,
				soldout: selectedGigData[0].soldout,
			});

			setIsUpdateMode(true);

			alert(
				'Concierto seleccionado, puede modificar y enviar los datos nuevamente para actualizarlos.'
			);
		} catch (error) {
			alert(error.message);
		}
	};

	const setAsSoldout = async id => {
		try {
			const { error } = await supabase.from('gigs').update({ soldout: true }).eq('id', id);

			if (error) throw error;

			alert('Concierto marcado como soldout!');
		} catch (error) {
			alert(error.message);
		}
	};

	const logOut = async () => {
		await supabase.auth.signOut();

		router.push('/login');
	};

	return (
		<>
			<button onClick={() => logOut()} className={styles.logOutButton}>
				LOG OUT
			</button>
			{concerts.length >= 1 && <span className={styles.concertsTitle}>Conciertos añadidos: </span>}
			<ul className={styles.concertListContainer}>
				{concerts.map(e => (
					<li
						key={e.id}
						className={`${styles.concertContainer} ${e.id === data.id ? styles.selected : ''}`}
					>
						<div>
							<span>{e.artist}</span>
							<span>{e.gigDate}</span>
						</div>
						{isUpdateMode && e.id === data.id ? (
							'MODIFICANDO EVENTO...'
						) : (
							<>
								<button onClick={() => setAsSoldout(e.id)}>Soldout</button>
								<button onClick={() => updateMode(e.id)}>Modificar</button>
								<button onClick={() => deleteGig(e.id)}>Eliminar</button>
							</>
						)}
					</li>
				))}
			</ul>
		</>
	);
}

export default AdminGigList;
