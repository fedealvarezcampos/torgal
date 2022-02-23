import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from '../styles/AddGigForm.module.css';

function AdminGigList() {
	const router = useRouter();

	const [concerts, setConcerts] = useState([]);

	const revalidateSecret = process.env.NEXT_PUBLIC_REVALIDATESECRET;

	const getConcerts = async () => {
		try {
			let { data: allGigsData, error } = await supabase.from('gigs').select('*');
			if (error) throw error;

			setConcerts(allGigsData);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getConcerts();
	}, []);

	const deleteGig = async id => {
		try {
			const { error } = await supabase.from('gigs').delete().eq('id', id);

			if (error) throw error;

			fetch(`/api/revalidate?secret=${revalidateSecret}`);
			alert('Concierto eliminado!');
		} catch (error) {
			alert(error.message);
		}
	};

	const setAsSoldout = async id => {
		try {
			const { error } = await supabase.from('gigs').update({ soldout: true }).eq('id', id);

			if (error) throw error;

			fetch(`/api/revalidate?secret=${revalidateSecret}`);
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
			<span className={styles.concertsTitle}>Conciertos añadidos: </span>
			<ul className={styles.concertListContainer}>
				{concerts.map(e => (
					<li key={e.id} className={styles.concertContainer}>
						<span>{e.artist}</span>
						<span>{e.gigDate}</span>
						<button onClick={() => setAsSoldout(e.id)}>Marcar como soldout</button>
						<button onClick={() => deleteGig(e.id)}>Eliminar evento</button>
					</li>
				))}
			</ul>
		</>
	);
}

export default AdminGigList;
