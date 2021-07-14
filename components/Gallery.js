import Slider from 'react-slick';
import Image from 'next/image';

import styles from '../styles/Gallery.module.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
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
                    <div>
                        <Image
                            src="/images/slide01.jpg" // Route of the image file
                            layout="responsive"
                            height={200} // Desired size with correct aspect ratio
                            width={300} // Desired size with correct aspect ratio
                            alt="Your Name"
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/slide02.jpg" // Route of the image file
                            layout="responsive"
                            height={200} // Desired size with correct aspect ratio
                            width={300} // Desired size with correct aspect ratio
                            alt="Your Name"
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/slide03.jpg" // Route of the image file
                            layout="responsive"
                            height={200} // Desired size with correct aspect ratio
                            width={300} // Desired size with correct aspect ratio
                            alt="Your Name"
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/slide04.jpg" // Route of the image file
                            layout="responsive"
                            height={200} // Desired size with correct aspect ratio
                            width={300} // Desired size with correct aspect ratio
                            alt="Your Name"
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/slide05.jpg" // Route of the image file
                            layout="responsive"
                            height={200} // Desired size with correct aspect ratio
                            width={300} // Desired size with correct aspect ratio
                            alt="Your Name"
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/slide06.jpg" // Route of the image file
                            layout="responsive"
                            height={200} // Desired size with correct aspect ratio
                            width={300} // Desired size with correct aspect ratio
                            alt="Your Name"
                        />
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default Gallery;
