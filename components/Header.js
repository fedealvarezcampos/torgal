import styles from '../styles/Header.module.css';
import { Link } from 'react-scroll';

function Header() {
    return (
        <>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.navLinks}>
                        <li>
                            <Link activeClass="active" to="home" offset={-100} spy={true} smooth={true}>
                                INICIO
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="bar" offset={-60} spy={true} smooth={true}>
                                BAR
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="conciertos" offset={-80} spy={true} smooth={true}>
                                CONCIERTOS
                            </Link>
                        </li>
                    </ul>
                </nav>
                <script type="text/javascript"> </script>
            </header>
        </>
    );
}

export default Header;
