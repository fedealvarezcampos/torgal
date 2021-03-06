import { useEffect, useState } from 'react';

const useCheckMobile = () => {
    if (typeof window !== 'undefined') {
        const [width, setWidth] = useState(window.innerWidth);
        const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
        };

        useEffect(() => {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            };
        }, []);

        return width <= 800;
    }
};

export default useCheckMobile;
