import Head from 'next/head';
import styles from '../styles/layout.module.css';

export const siteTitle = 'Café & Pop Torgal';

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Bar y sala de conciertos SON Estrella Galicia en Ourense, Galicia"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://torgal.vercel.app/images/ogimage.jpg" />
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			{children}
		</div>
	);
}
