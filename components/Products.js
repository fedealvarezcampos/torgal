import { useState } from 'react';
import useCheckMobile from '../helpers/useCheckMobile';
import styles from '../styles/Products.module.css';

function Products({ products }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className="modalContainer">
                <div className="modalBG" onClick={() => setShowMenu(false)} />
                <div className={styles.contentContainer}>
                    <h2>Cocktails</h2>
                    <ul className={styles.productList}>
                        {products.map(
                            product =>
                                product.type === 'cocktail' && (
                                    <li className={styles.productItem} key={product.id}>
                                        <div>{product.product}</div>
                                        <div>{product.description}</div>
                                        <img src={`/images/products/${product.id}.jpg`} alt="" />
                                    </li>
                                )
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Products;
