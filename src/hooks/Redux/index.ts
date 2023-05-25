/** @format */

import { useDispatch as useDispatchRedux, useSelector as useSelectorRedux } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import type { RootState, AppDispatch } from "@/redux/store"

export const useDispatch: () => AppDispatch = useDispatchRedux
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux
