import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store/store'

export const UseDispatchHook = (): any => useDispatch<AppDispatch>()