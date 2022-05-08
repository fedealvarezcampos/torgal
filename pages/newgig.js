import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import AddGigForm from '../components/sections/admin/AddGigForm';
import AdminGigList from '../components/sections/admin/AdminGigList';
import styles from '../styles/AddGigForm.module.css';

function NewGig() {
	const router = useRouter();
	const user = supabase?.auth.user();

	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		!user && router?.push('/');
		user && setLoggedIn(true);
	}, []);

	return (
		<div className={styles.outerContainer}>
			{loggedIn ? (
				<>
					<AdminGigList />
					<AddGigForm />{' '}
				</>
			) : (
				<div>No permission</div>
			)}
		</div>
	);
}

export default NewGig;
