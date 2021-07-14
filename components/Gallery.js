import Slider from 'react-slick';
import Image from 'next/image';

import styles from '../styles/Gallery.module.css';

const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '20px',
    slidesToShow: 3,
    speed: 500,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

function Gallery() {
    return (
        <>
            <div className={styles.galleryContainer}>
                <Slider {...settings}>
                    <Image
                        src="/images/slide01.jpg" // Route of the image file
                        layout="responsive"
                        height={200} // Desired size with correct aspect ratio
                        width={300} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    <Image
                        src="/images/slide02.jpg" // Route of the image file
                        layout="responsive"
                        height={200} // Desired size with correct aspect ratio
                        width={300} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    <Image
                        src="/images/slide03.jpg" // Route of the image file
                        layout="responsive"
                        height={200} // Desired size with correct aspect ratio
                        width={300} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    <Image
                        src="/images/slide04.jpg" // Route of the image file
                        layout="responsive"
                        height={200} // Desired size with correct aspect ratio
                        width={300} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    <Image
                        src="/images/slide05.jpg" // Route of the image file
                        layout="responsive"
                        height={200} // Desired size with correct aspect ratio
                        width={300} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    <Image
                        src="/images/slide06.jpg" // Route of the image file
                        layout="responsive"
                        height={200} // Desired size with correct aspect ratio
                        width={300} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                </Slider>
            </div>
        </>
    );
}

export default Gallery;
