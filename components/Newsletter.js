import { useState, useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
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
        console.log(status);
        console.log(message);
    };

    console.log(email);

    return (
        <>
            {status === 'sending' && <div className={styles.sending}>sending...</div>}
            {status === 'error' && (
                <div className={styles.error} dangerouslySetInnerHTML={{ __html: message }} />
            )}
            {status === 'success' && (
                <div className={styles.success} dangerouslySetInnerHTML={{ __html: message }} />
            )}
            <form onSubmit={handleSubmit}>
                <p>
                    {status !== 'success' ? 'Suscríbete a nuestra newsletter' : '¡Gracias por suscribirte!'}
                </p>
                <input
                    placeholder="email@email.com"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <button className="button register">ENVIAR</button>
            </form>
        </>
    );
};

const NewsletterForm = () => {
    const mailchimpUser = process.env.NEXT_PUBLIC_MAILCHIMPUSER;
    const mailchimpId = process.env.NEXT_PUBLIC_MAILCHIMPID;

    console.log(mailchimpUser);
    console.log(mailchimpId);

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
