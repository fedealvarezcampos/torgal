import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import utilStyles from '../styles/utils.module.css';
import { Link } from 'react-scroll';

function Header() {
    return (
        <>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.navLinks}>
                        <li>
                            <Link activeClass="active" to="home" offset={-80} spy={true} smooth={true}>
                                INICIO
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="bar" offset={-80} spy={true} smooth={true}>
                                BAR
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="conciertos" offset={-80} spy={true} smooth={true}>
                                CONCIERTOS
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="about" spy={true} smooth={true}>
                                TIENDA
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
