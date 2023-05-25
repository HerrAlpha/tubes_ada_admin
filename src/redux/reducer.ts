/** @format */

import { combineReducers } from "@reduxjs/toolkit"

import modalReducer from "@/redux/reducers/modalSlice"
import sidebarReducer from "@/redux/reducers/sidebarSlice"
import { service } from "@/redux/service"

export const reducer = combineReducers({
	modal: modalReducer,
	sidebar: sidebarReducer,
	[service.reducerPath]: service.reducer,
})
