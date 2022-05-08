import { useState, useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Spinner from '../../basic/spinner';
import styles from '../../../styles/Newsletter.module.css';

const CustomForm = ({ status, message, onValidated }) => {
	const [email, setEmail] = useState('');
	const [timer, setTimer] = useState();
	const [errorMsg, setErrorMsg] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		errorMsg && setErrorMsg(false);
		email &&
			email.indexOf('@') > -1 &&
			onValidated({
				EMAIL: email,
			});
	};

	useEffect(() => {
		status === 'error' && setErrorMsg(true);
		status === 'success' && setEmail('');
	}, [status]);

	useEffect(() => {
		errorMsg && clearTimeout(timer);
		errorMsg &&
			setTimer(
				setTimeout(() => {
					setErrorMsg(false);
				}, 3000)
			);
	}, [errorMsg]);

	message !== null && message.includes('already subscribed')
		? (message = '¡Parece que ya estabas suscrito! Este correo ya existe en nuestra base de datos.')
		: (message = 'No puedes usar esta dirección, prueba con otra.');

	return (
		<>
			{status === 'error' && errorMsg && (
				<div className={`${styles.errorModal} bounceAnim`}>{message}</div>
			)}
			<div className={styles.formContainer}>
				<form onSubmit={handleSubmit}>
					<p
						className={`${
							status === 'success' ? styles.successMsg + ' fade-in' : styles.normalMsg
						}`}
					>
						{status !== 'success'
							? 'Suscríbete a nuestra newsletter'
							: '¡Gracias por suscribirte!'}
					</p>
					<div className={styles.inputContainer}>
						{status === 'sending' ? (
							<Spinner />
						) : (
							<input
								placeholder="email@email.com"
								type="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						)}
					</div>
					<button className="button register">ENVIAR</button>
				</form>
			</div>
		</>
	);
};

const NewsletterForm = () => {
	const mailchimpUser = process.env.NEXT_PUBLIC_MAILCHIMPUSER;
	const mailchimpId = process.env.NEXT_PUBLIC_MAILCHIMPID;

	const action = `https://tumblr.us12.list-manage.com/subscribe/post?u=${mailchimpUser}&id=${mailchimpId}`;

	return (
		<div className={styles.container}>
			<MailchimpSubscribe
				url={action}
				render={({ subscribe, status, message }) => (
					<CustomForm
						status={status}
						message={message}
						onValidated={formData => subscribe(formData)}
					/>
				)}
			/>
		</div>
	);
};

export default NewsletterForm;
