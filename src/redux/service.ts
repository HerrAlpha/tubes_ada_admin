/** @format */

import { axiosBaseQuery } from "@/utils/Axios"
import { createApi } from "@reduxjs/toolkit/query/react"

export const service = createApi({
	reducerPath: "service",
	baseQuery: axiosBaseQuery(),
	tagTypes: ["Transaction", "Dashboard"],
	endpoints: () => ({}),
})
