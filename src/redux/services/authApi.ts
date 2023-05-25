/** @format */
import { service } from "@/redux/service"

type LoginProps = {
	body: {
		email: string
		password: string
	}
}

type RegisterProps = {
	body: {
		name: string
		email: string
		phone: string
		role: string | "RESTO" | "INVESTOR"
		password: string
		password_confirmation: string
	}
}

export const authApi = service.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<any, LoginProps>({
			query: (args) => ({
				url: "/api/auth/login",
				method: "POST",
				data: args.body,
			}),
		}),
		logout: builder.mutation<any, void>({
			query: () => ({
				url: "/api/auth/logout",
				method: "POST",
			}),
		}),
	}),
})

export const { useLoginMutation, useLogoutMutation } = authApi
