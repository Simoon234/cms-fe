import {useEffect, useState} from "react";

export const UseWidthHook = () => {
    const getWindowDimensions = () => {
        if (typeof window !== 'undefined') {
            const {innerWidth: width} = window;
            return {
                width
            }
        }

    }
    const [width, setWidth] = useState(getWindowDimensions())

    useEffect(() => {
        const resize = () => {
            setWidth(getWindowDimensions())
        }
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, [])


    return {
        width
    }
}