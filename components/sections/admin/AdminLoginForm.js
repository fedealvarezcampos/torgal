import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import { useRouter } from 'next/dist/client/router';
import styles from '../../../styles/login.module.css';

function AdminLoginForm() {
	const router = useRouter();

	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleLogin = async e => {
		e.preventDefault();
		try {
			setLoading(true);
			const { error } = await supabase.auth.signIn({ email: email, password: password });

			if (error) throw error;

			router.push('/newgig');
		} catch (error) {
			setError(error.error_description || error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={e => handleLogin(e)}>
			<span>Log-in</span>
			{error && <span className={styles.error}>{error}</span>}
			<label>
				<span>Email</span>
				<input
					name="email"
					type="email"
					placeholder="Your email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
			</label>
			<label>
				<span>Password</span>
				<input
					name="password"
					type="password"
					placeholder="Your pass"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
			</label>
			<button>{loading ? 'Entrando...' : 'Entrar'}</button>
		</form>
	);
}

export default AdminLoginForm;
