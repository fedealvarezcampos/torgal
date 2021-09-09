import { useEffect, useState } from 'react';

const Expire = ({ delay, children, className }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, delay);
    }, [delay]);

    return visible ? <div className={className}>{children}</div> : <div />;
};

export default Expire;
