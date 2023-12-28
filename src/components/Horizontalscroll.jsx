import React, { useRef, useEffect } from 'react';

export default function Horizontalscroll(props) {

    const { children, sensitivity } = props;
    const containerRef = useRef(null);

    // const sensitivity = sensitivity;

    useEffect(() => {
        const container = containerRef.current;

        const handleWheel = (event) => {
            const delta = event.deltaY || event.detail || (-event.wheelDelta);
            container.scrollLeft += delta * sensitivity;
            event.preventDefault();
        };

        container.addEventListener('wheel', handleWheel);

        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, [sensitivity]);

    return (
        <div className='scroll-d-none pe-5' ref={containerRef} style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
            {children}
        </div>
    );
}