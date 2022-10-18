import {ChangeEvent, FormEvent, useState} from "react";
import {UseHomeRouter} from "./useHomeRouter";

export const useSearchHook = () => {
    const [term, setTerm] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setTerm(e.target.value);
    const {push, pathname} = UseHomeRouter()


    const handleSearchTitle = async (e: FormEvent) => {
        e.preventDefault()
        await push(`/${pathname}?title=${term}`)
        setTerm('');
    }

    return {
        handleSearchTitle,
        onChange
    }
}