/** @format */

import { createSlice } from "@reduxjs/toolkit"

export interface ModalState {
	id: string[]
}

const initialState: ModalState = {
	id: [],
}

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		openModal: (state, action) => {
			state.id.push(action.payload.id)
		},
		closeModal: (state, action) => {
			state.id = state.id.filter((v) => v != action.payload.id)
		},
	},
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
