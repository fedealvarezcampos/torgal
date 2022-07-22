import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion as m } from 'framer-motion';
import { framer, framerRight } from '../../../styles/framer';
import useCheckMobile from '../../../helpers/useCheckMobile';
import styles from '../../../styles/Products.module.css';

function Products({ products, showMenu, setShowMenu }) {
	const mobile = useCheckMobile();

	const [type, setType] = useState('cocktail');

	const swipeConfig = {
		delta: 20,
		preventDefaultTouchmoveEvent: true,
	};

	const swipingTypes = ['cocktail', 'cerveza', 'copa', 'café', 'especial'];

	const randomId = new Date().getMilliseconds();

	const mobileSwipes = useSwipeable({
		onSwipedLeft: () => {
			const index = swipingTypes.indexOf(type);
			if (index >= 0 && index < swipingTypes.length - 1) setType(swipingTypes[index + 1]);
		},
		...swipeConfig,
		onSwipedRight: () => {
			const index = swipingTypes.indexOf(type);
			if (index > 0 && index <= swipingTypes.length) setType(swipingTypes[index - 1]);
		},
		...swipeConfig,
	});

	return (
		<>
			{mobile && <span className="exitButton" onClick={() => setShowMenu(false)} />}
			<m.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				{...mobileSwipes}
				className={styles.contentContainer}
			>
				<nav>
					<button
						className={`button ${type === 'cocktail' && 'current'}`}
						onClick={() => setType('cocktail')}
					>
						COCKTAILS
					</button>
					<button
						className={`button ${type === 'cerveza' && 'current'}`}
						onClick={() => setType('cerveza')}
					>
						CERVEZAS
					</button>
					<button
						className={`button ${type === 'copa' && 'current'}`}
						onClick={() => setType('copa')}
					>
						COPAS
					</button>
					<button
						className={`button ${type === 'café' && 'current'}`}
						onClick={() => setType('café')}
					>
						CAFÉ
					</button>
					<button
						className={`button ${type === 'especial' && 'current'}`}
						onClick={() => setType('especial')}
					>
						ESPECIAL
					</button>
				</nav>
				<div className={styles.listContainer}>
					<ul className={`${styles.productList} fade-in`} key={randomId}>
						{products.map(
							product =>
								product.type === type && (
									<li className={styles.productItem} key={product.id}>
										<m.div
											initial="initial"
											animate="animate"
											variants={framerRight}
											className={styles.productInfo}
										>
											<p>{product.product}</p>
											<p className={styles.productDescription}>{product.description}</p>
											<div className={styles.prices}>
												{product.price && <span>{product.price}€</span>}
												{product.priceCaña && (
													<div>
														<p>Caña</p>
														<p>{product.priceCaña}€</p>
													</div>
												)}
												{product.priceBotella && (
													<div>
														<p>Botella</p>
														<p>{product.priceBotella}€</p>
													</div>
												)}
												{product.priceBock && (
													<div>
														<p>Bock</p>
														<p>{product.priceBock}€</p>
													</div>
												)}
												{product.priceShot && (
													<div>
														<p>Chupito</p>
														<p>{product.priceShot}€</p>
													</div>
												)}
												{product.priceCopa && (
													<div>
														<p>Copa</p>
														<p>{product.priceCopa}€</p>
													</div>
												)}
											</div>
										</m.div>
										<m.img
											initial="initial"
											animate="animate"
											variants={framer}
											src={`/images/products/${product.id}.jpg`}
											alt="imagen producto"
										/>
									</li>
								)
						)}
					</ul>
				</div>
			</m.div>
		</>
	);
}

export default Products;
