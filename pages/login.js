import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { supabase } from '../lib/supabaseClient';
import AdminLoginForm from '../components/AdminLoginForm';
import styles from '../styles/login.module.css';

function Login() {
	const router = useRouter();
	const user = supabase?.auth.user();

	useEffect(() => {
		user && router?.push('/newgig');
	}, []);

	return <div className={styles.pageContainer}>{!user ? <AdminLoginForm /> : <div>Loading...</div>}</div>;
}

export default Login;
