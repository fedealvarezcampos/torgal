import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

function Header() {
    return (
        <>
            <header className={styles.header}></header>;
        </>
    );
}

export default Header;
