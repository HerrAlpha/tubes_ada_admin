/** @format */
import { service } from "@/redux/service"

export const dashboardApi = service.injectEndpoints({
	endpoints: (builder) => ({
		getDashboard: builder.query<any, void>({
			query: () => ({
				url: "/api/dashboard",
				method: "GET",
			}),
			providesTags: [{ type: "Dashboard", id: "LIST" }],
		}),
	}),
})

export const { useGetDashboardQuery } = dashboardApi
