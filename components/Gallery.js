import Image from 'next/image';
import Slider from 'react-slick';
import styles from '../styles/Gallery.module.css';
import slide01 from '../public/images/gallery/slide01.jpg';
import slide02 from '../public/images/gallery/slide02.jpg';
import slide03 from '../public/images/gallery/slide03.jpg';
import slide04 from '../public/images/gallery/slide04.jpg';
import slide05 from '../public/images/gallery/slide05.jpg';
import slide06 from '../public/images/gallery/slide06.jpg';
import slide07 from '../public/images/gallery/slide07.jpg';

const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '80px',
    slidesToShow: 2,
    speed: 500,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                centerPadding: '200px',
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 1000,
            settings: {
                centerPadding: '120px',
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 700,
            settings: {
                centerPadding: '80px',
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 500,
            settings: {
                centerPadding: '25px',
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
    ],
};

function Gallery() {
    return (
        <>
            <div className={styles.galleryContainer}>
                <Slider {...settings}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={slide04}
                            placeholder="blur"
                            layout="responsive"
                            quality={80}
                            alt="y la bamba"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={slide02}
                            placeholder="blur"
                            layout="responsive"
                            quality={80}
                            alt="cupido"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={slide01}
                            placeholder="blur"
                            layout="responsive"
                            quality={80}
                            alt="nuria graham"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={slide05}
                            placeholder="blur"
                            layout="responsive"
                            quality={80}
                            alt="niño de elche"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={slide06}
                            placeholder="blur"
                            layout="responsive"
                            quality={80}
                            alt="juan wauters"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={slide03}
                            placeholder="blur"
                            layout="responsive"
                            quality={80}
                            alt="omar apollo"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={slide07}
                            placeholder="blur"
                            layout="responsive"
                            quality={80}
                            alt="lady lamb"
                        />
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default Gallery;
