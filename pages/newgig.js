import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import AddGigForm from '../components/sections/admin/AddGigForm';
import AdminGigList from '../components/sections/admin/AdminGigList';
import styles from '../styles/AddGigForm.module.css';

function NewGig() {
	const router = useRouter();
	const user = supabase?.auth.user();

	const [formCompleted, setFormCompleted] = useState(false);
	const [isUpdateMode, setIsUpdateMode] = useState(false);

	const [data, setData] = useState({
		id: '',
		image: [],
		artist: '',
		bio: '',
		videoIntro: '',
		artistSite: '',
		artistTW: '',
		artistIG: '',
		artistYT: '',
		artistSF: '',
		gigPrice: '',
		gigLink: '',
		gigDate: '',
		soldout: false,
	});

	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		!user && router?.push('/');
		user && setLoggedIn(true);
	}, []);

	return (
		<div className={styles.outerContainer}>
			{loggedIn ? (
				<>
					<AdminGigList
						setData={setData}
						setIsUpdateMode={setIsUpdateMode}
						formCompleted={formCompleted}
					/>
					<AddGigForm
						data={data}
						setData={setData}
						setIsUpdateMode={setIsUpdateMode}
						setFormCompleted={setFormCompleted}
						isUpdateMode={isUpdateMode}
					/>
				</>
			) : (
				<div>No permission</div>
			)}
		</div>
	);
}

export default NewGig;
