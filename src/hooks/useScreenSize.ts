import { useCallback, useEffect, useRef, useState } from "react";

export type TOnSizeChange = (prevSize: number, nextSize: number) => void; 

export function useScreenSize(onWidthChange?: TOnSizeChange, onHeightChange?: TOnSizeChange) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const onWidthChangeRef = useRef(onWidthChange);
    const onHeightChangeRef = useRef(onHeightChange);

    const onResizeCallback = useCallback(() => {
        setWindowWidth(prevWidth => {
            onWidthChangeRef.current?.(prevWidth, window.innerWidth);

            return window.innerWidth;
        });

        setWindowHeight(prevHeight => {
            onHeightChangeRef.current?.(prevHeight, window.innerHeight);

            return window.innerHeight;
        });
    }, [setWindowWidth, setWindowHeight]);
    
    useEffect(() => {
        window.addEventListener('resize', onResizeCallback);

        return () => window.removeEventListener('resize', onResizeCallback);
    }, [onResizeCallback])

    return [windowWidth, windowHeight];
}
