import { useCallback, useEffect, useState } from "react";

export function useScreenSize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const onResizeCallback = useCallback(() => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    }, [setWindowWidth, setWindowHeight]);
    
    useEffect(() => {
        window.addEventListener('resize', onResizeCallback);

        return () => window.removeEventListener('resize', onResizeCallback);
    }, [onResizeCallback])

    return [windowWidth, windowHeight];
}
