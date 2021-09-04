import { useEffect, useState } from 'react';
import useCheckMobile from '../helpers/useCheckMobile';
import styles from '../styles/Products.module.css';

function Products({ products, showMenu, setShowMenu }) {
    const [type, setType] = useState('cocktail');

    // useEffect(() => {
    //     setType('cocktail');
    // }, [setType]);

    console.log(type);

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
                                                <div>
                                                    <p>{product.product}</p>
                                                    <p>{product.description}</p>
                                                    <p>{product.price}€</p>
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
