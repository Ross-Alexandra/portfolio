import { useCallback, useEffect, useState } from "react";

export function useScrollHeight() {
    const [scrollHeight, setScrollHeight] = useState(window.scrollY);
    const onScrollCallback = useCallback(() => {
        setScrollHeight(window.scrollY);
    }, [setScrollHeight]);

    useEffect(() => {
        window.addEventListener('scroll', onScrollCallback);

        return () => window.removeEventListener('scroll', onScrollCallback);
    }, [onScrollCallback]);

    return scrollHeight;
}

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
