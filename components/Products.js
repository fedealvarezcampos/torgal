import { useState } from 'react';
import useCheckMobile from '../helpers/useCheckMobile';
import styles from '../styles/Products.module.css';

function Products({ products }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <ul className={styles.productList}>
                {products.map(
                    product =>
                        product.type === 'cocktail' && (
                            <li className={styles.productItem} key={product.id}>
                                <div>{product.product}</div>
                            </li>
                        )
                )}
            </ul>
        </>
    );
}

export default Products;
