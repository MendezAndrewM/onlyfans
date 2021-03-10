import { useState, useEffect } from 'react';

function getWindowDeminsions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}

export default function useViewport() {
    const [useDimensions, setWindowDimensions] = useState(getWindowDeminsions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDeminsions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return useDimensions;
}