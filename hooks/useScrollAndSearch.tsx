import {UseDispatchHook} from "./useDispatchHook";
import {getText} from "../redux/searchSlice";
import {ChangeEvent, FormEvent, useState} from "react";
import {UseHomeRouter} from "./useHomeRouter";

export const UseScrollAndSearch = () => {
    const [text, setText] = useState<string>('');
    const dispatch = UseDispatchHook();
    const {push, pathname} = UseHomeRouter();

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleSearch = async (e: FormEvent) => {
        e.preventDefault();
        dispatch(getText(text));
        setText('');
        if (pathname === '/') {
            await push(`#articles`, undefined, {
                scroll: false
            })
        }
    }

    const executeScroll = async () => {
        if (pathname === '/') {
            window.scrollTo(0, 0)
            dispatch(getText(''));
        } else {
            await push(`/${pathname}`)
        }

    };
    return {
        executeScroll,
        handleSearch,
        handleOnChange,
        text
    }
}