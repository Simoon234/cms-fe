import React, {ChangeEvent, useCallback, useState} from "react";
import {UseHomeRouter} from "./useHomeRouter";
import {ITEM_ON_PAGE} from "../api.config";

interface ScrollTo {
    text: string;
}

export const UseHandlePage = ({text}: ScrollTo) => {
    const [page, setPage] = useState<number>(1)
    const [itemsOnePage,] = useState<number>(ITEM_ON_PAGE)
    const {push} = UseHomeRouter();

    const handlePage = useCallback(async (e: ChangeEvent<unknown>, value: number) => {
        e.preventDefault();
        setPage(value);
        await push(`#${text}`, undefined, {
            scroll: false
        })

    }, [push, text]);

    return {
        page,
        handlePage,
        itemsOnePage
    }
}