import { useState, useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Spinner from './spinner';
import styles from '../styles/Newsletter.module.css';

const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        email &&
            email.indexOf('@') > -1 &&
            onValidated({
                EMAIL: email,
            });
    };

    // status = 'error';
    // message =
    //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ex dolorem illo fugiat consectetur animi aliquid fugit soluta placeat aspernatur!';

    useEffect(() => {
        status === 'success' && setEmail('');
    }, [status]);

    return (
        <>
            {status === 'error' && (
                <div
                    className={`${styles.errorModal} bounceAnim`}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <p
                        className={`${
                            status === 'success' ? styles.successMsg + ' fade-in' : styles.normalMsg
                        }`}
                    >
                        {status !== 'success'
                            ? 'Suscríbete a nuestra newsletter'
                            : '¡Gracias por suscribirte!'}
                    </p>
                    <div className={styles.inputContainer}>
                        {status === 'sending' ? (
                            <Spinner />
                        ) : (
                            <input
                                placeholder="email@email.com"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        )}
                    </div>
                    <button className="button register">ENVIAR</button>
                </form>
            </div>
        </>
    );
};

const NewsletterForm = () => {
    const mailchimpUser = process.env.NEXT_PUBLIC_MAILCHIMPUSER;
    const mailchimpId = process.env.NEXT_PUBLIC_MAILCHIMPID;

    const action = `https://tumblr.us12.list-manage.com/subscribe/post?u=${mailchimpUser}&id=${mailchimpId}`;

    return (
        <div className={styles.container}>
            <MailchimpSubscribe
                url={action}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default NewsletterForm;
