import React, { useEffect, useState } from 'react';
import '../App.css';

const ScrollProgressBar = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setScrollWidth(scrollPercent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="top" style={{ width: `${scrollWidth}%` }}></div>
    );
};

export default ScrollProgressBar;
