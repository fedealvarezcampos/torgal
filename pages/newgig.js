import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import AddGigForm from '../components/AddGigForm';
import AdminGigList from '../components/AdminGigList';
import styles from '../styles/AddGigForm.module.css';

function NewGig() {
	const router = useRouter();
	const user = supabase?.auth.user();

	useEffect(() => {
		!user && router?.push('/');
	}, []);

	return (
		<>
			{user && (
				<>
					<div className={styles.outerContainer}>
						<AdminGigList />
						<AddGigForm />
					</div>
				</>
			)}
		</>
	);
}

export default NewGig;
