import Slider from 'react-slick';
import Image from 'next/image';
import styles from '../styles/Gallery.module.css';
import slide01 from '../public/images/slide01.jpg';
import slide02 from '../public/images/slide02.jpg';
import slide03 from '../public/images/slide03.jpg';
import slide04 from '../public/images/slide04.jpg';
import slide05 from '../public/images/slide05.jpg';
import slide06 from '../public/images/slide06.jpg';
import slide07 from '../public/images/slide07.jpg';

const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '100px',
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
                centerPadding: '20px',
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
                            src={slide04} // Route of the image file
                            placeholder="blur"
                            layout="responsive"
                            quality={80}
                            alt="y la bamba"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={slide02} // Route of the image file
                            placeholder="blur"
                            layout="responsive"
                            quality={80}
                            alt="cupido"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={slide01} // Route of the image file
                            placeholder="blur"
                            layout="responsive"
                            quality={80}
                            alt="nuria graham"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={slide05} // Route of the image file
                            placeholder="blur"
                            layout="responsive"
                            quality={80}
                            alt="niño de elche"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={slide06} // Route of the image file
                            placeholder="blur"
                            layout="responsive"
                            quality={80}
                            alt="juan wauters"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={slide03} // Route of the image file
                            placeholder="blur"
                            layout="responsive"
                            quality={80}
                            alt="omar apollo"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={slide07} // Route of the image file
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
