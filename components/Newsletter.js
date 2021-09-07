import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styles from '../styles/Newsletter.module.css';

const Newsletter = props => {
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe />
        </div>
    );
};

export default Newsletter;
