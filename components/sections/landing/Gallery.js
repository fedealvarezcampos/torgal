import Image from 'next/image';
import Slider from 'react-slick';
import styles from '../../../styles/Gallery.module.css';
import nuria from '../../../public/images/gallery/slide01.jpg';
import cupido from '../../../public/images/gallery/slide02.jpg';
import apollo from '../../../public/images/gallery/slide03.jpg';
import bamba from '../../../public/images/gallery/slide04.jpg';
import wauters from '../../../public/images/gallery/slide06.jpg';
import lamb from '../../../public/images/gallery/slide07.jpg';
import andreu from '../../../public/images/gallery/slide09.jpg';
import bandalos from '../../../public/images/gallery/slide10.jpg';
import montefusco from '../../../public/images/gallery/slide11.jpg';

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

const images = [
	{
		src: montefusco,
		alt: 'enric montefusco',
	},
	{
		src: cupido,
		alt: 'cupido',
	},
	{
		src: bamba,
		alt: 'y la bamba',
	},
	{
		src: nuria,
		alt: 'nuria graham',
	},
	{
		src: apollo,
		alt: 'omar apollo',
	},
	{
		src: wauters,
		alt: 'juan wauters',
	},
	{
		src: lamb,
		alt: 'lady lamb',
	},
	{
		src: andreu,
		alt: 'anna andreu',
	},
	{
		src: bandalos,
		alt: 'bandalos chinos',
	},
];

function Gallery() {
	return (
		<>
			<div className={styles.galleryContainer}>
				<Slider {...settings}>
					{images.map((image, i) => (
						<div key={i} className={styles.imageContainer}>
							<Image
								src={image.src}
								placeholder="blur"
								layout="responsive"
								quality={95}
								alt={image.alt}
							/>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
}

export default Gallery;
