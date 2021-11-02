import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import torgal01 from '../public/images/torgal01.webp';
import torgal02 from '../public/images/torgal02.webp';
import torgal03 from '../public/images/torgal03.webp';
import torgal04 from '../public/images/torgal04.webp';
import { BiFoodMenu, BiDrink } from 'react-icons/bi';
import useCheckMobile from '../helpers/useCheckMobile';
import styles from '../styles/Marquees.module.css';

function Marquees({ setShowMenu }) {
    const mobile = useCheckMobile();

    return (
        <>
            <Marquee
                className={styles.marquee}
                pauseOnHover={mobile ? false : true}
                gradient={false}
                speed={mobile ? 20 : 40}
            >
                <div className={styles.imageContainer}>
                    <Image
                        src={torgal02}
                        placeholder="blur"
                        objectFit="contain"
                        quality={95}
                        alt="torgal image"
                    />
                    <Image
                        src={torgal04}
                        placeholder="blur"
                        objectFit="contain"
                        quality={95}
                        alt="torgal image"
                    />
                    <Image
                        src={torgal03}
                        placeholder="blur"
                        objectFit="contain"
                        quality={95}
                        alt="torgal image"
                    />
                    <Image
                        src={torgal01}
                        placeholder="blur"
                        objectFit="contain"
                        quality={95}
                        alt="torgal image"
                    />
                </div>
            </Marquee>
            <div className={styles.drinkMenu}>
                <Marquee gradient={false} direction="right">
                    <div className={styles.drinkMenuContent} onClick={() => setShowMenu(true)}>
                        <span>
                            &nbsp;NUESTRA CARTA
                            <BiFoodMenu />
                            NUESTRA CARTA
                            <BiDrink />
                            NUESTRA CARTA
                            <BiFoodMenu />
                            NUESTRA CARTA
                            <BiDrink />
                            NUESTRA CARTA
                            <BiFoodMenu />
                            NUESTRA CARTA
                            <BiDrink />
                        </span>
                    </div>
                </Marquee>
            </div>
        </>
    );
}

export default Marquees;
