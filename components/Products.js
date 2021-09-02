import useCheckMobile from '../helpers/useCheckMobile';
import styles from '../styles/Products.module.css';

function Products({ gigs, setModal }) {
    const mobile = useCheckMobile();

    return (
        <>
            <div>
                <div>Mojito Jäger</div>
                <div>Jäger, soda, hierbabuena y lima</div>
                <div>5,00€</div>
            </div>
        </>
    );
}

export default Modal;
