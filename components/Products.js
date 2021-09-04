import { useEffect, useState } from 'react';
import useCheckMobile from '../helpers/useCheckMobile';
import styles from '../styles/Products.module.css';

function Products({ products, showMenu, setShowMenu }) {
    const [type, setType] = useState('cocktail');

    return (
        <>
            {showMenu && (
                <div className="modalContainer">
                    <div className="modalBG" onClick={() => setShowMenu(false)} />
                    <div className={styles.contentContainer}>
                        <nav>
                            <button className="button" onClick={() => setType('cocktail')}>
                                COCKTAILS
                            </button>
                            <button className="button" onClick={() => setType('cerveza')}>
                                CERVEZAS
                            </button>
                            <button className="button" onClick={() => setType('copa')}>
                                COPAS
                            </button>
                            <button className="button" onClick={() => setType('café')}>
                                CAFÉ
                            </button>
                            <button className="button" onClick={() => setType('especial')}>
                                ESPECIAL
                            </button>
                        </nav>
                        <div className={styles.listContainer}>
                            <ul className={`${styles.productList} fade-in`}>
                                {products.map(
                                    product =>
                                        product.type === type && (
                                            <li className={styles.productItem} key={product.id}>
                                                <div className={styles.productInfo}>
                                                    <p>{product.product}</p>
                                                    <p>{product.description}</p>
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
                                                </div>
                                                <img src={`/images/products/${product.id}.jpg`} alt="" />
                                            </li>
                                        )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Products;
