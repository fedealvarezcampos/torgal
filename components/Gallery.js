import Slider from 'react-slick';
import Image from 'next/image';
import styles from '../styles/Gallery.module.css';

const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '160px',
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
    ],
};

function Gallery() {
    return (
        <>
            <div className={styles.galleryContainer}>
                <Slider {...settings}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/images/slide01.jpg" // Route of the image file
                            placeholder="blur"
                            layout="responsive"
                            quality={80}
                            height={200} // Desired size with correct aspect ratio
                            width={300} // Desired size with correct aspect ratio
                            alt="nuria graham"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/images/slide02.jpg" // Route of the image file
                            layout="responsive"
                            quality={80}
                            height={200} // Desired size with correct aspect ratio
                            width={300} // Desired size with correct aspect ratio
                            alt="cupido"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/images/slide03.jpg" // Route of the image file
                            layout="responsive"
                            quality={80}
                            height={200} // Desired size with correct aspect ratio
                            width={300} // Desired size with correct aspect ratio
                            alt="omar apollo"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/images/slide04.jpg" // Route of the image file
                            placeholder="blur"
                            layout="responsive"
                            quality={80}
                            height={200} // Desired size with correct aspect ratio
                            width={300} // Desired size with correct aspect ratio
                            alt="y la bamba"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/images/slide05.jpg" // Route of the image file
                            layout="responsive"
                            quality={80}
                            height={200} // Desired size with correct aspect ratio
                            width={300} // Desired size with correct aspect ratio
                            alt="niño de elche"
                        />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/images/slide06.jpg" // Route of the image file
                            layout="responsive"
                            quality={80}
                            height={200} // Desired size with correct aspect ratio
                            width={300} // Desired size with correct aspect ratio
                            alt="juan wauters"
                        />
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default Gallery;
