import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

function Header() {
    return (
        <>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.navLinks}>
                        <li>
                            <a href="default.asp">INICIO</a>
                        </li>
                        <li>
                            <a href="news.asp">BAR</a>
                        </li>
                        <li>
                            <a href="contact.asp">CONCIERTOS</a>
                        </li>
                        <li>
                            <a href="about.asp">TIENDA</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
