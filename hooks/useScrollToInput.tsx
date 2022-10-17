import {useRef} from "react";

export const UseScrollToInput = () => {
    const ref = useRef<HTMLInputElement | null>(null);
    const executeScroll = () => {
        ref.current?.scrollIntoView();
    };

    return {
        ref,
        executeScroll,
    }
}