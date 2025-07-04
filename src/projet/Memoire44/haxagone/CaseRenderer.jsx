import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
export default function CaseRenderer({ instance, className = "" }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            if (instance?.mount) {
                instance.mount(containerRef.current);
            } else {
                ReactDOM.unmountComponentAtNode(containerRef.current);
            }
        }
    }, [instance]);

    return <div className={`absolute w-full h-full ${className}`} ref={containerRef} />
}