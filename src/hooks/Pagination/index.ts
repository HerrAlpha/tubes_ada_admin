/** @format */

import { useState } from "react"

export const usePagination = () => {
	const [pageCount, setPageCount] = useState(0)
	const [initialPage, setInitialPage] = useState(0)
	const [perPage, setPerPage] = useState(10)

	return {
		pageCount,
		setPageCount,
		initialPage,
		setInitialPage,
		perPage,
		setPerPage,
	}
}
