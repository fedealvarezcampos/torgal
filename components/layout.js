import Head from 'next/head';
import styles from '../styles/layout.module.css';
import ogimage from '../public/images/ogimage.jpg';

export const siteTitle = 'Café & Pop Torgal';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Café & Pop Torgal - Bar y sala de conciertos SON EG" />
                <meta property="og:image" content={ogimage} />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <main>{children}</main>
        </div>
    );
}
