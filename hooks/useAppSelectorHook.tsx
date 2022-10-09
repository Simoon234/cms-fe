import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'

export const UseAppSelectorHook: TypedUseSelectorHook<RootState> = useSelector