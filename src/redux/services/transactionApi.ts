/** @format */
import { service } from "@/redux/service"

export type TransactionProps = {
	params: {
		page?: string | number
		per_page?: string | number
		sort?: string | "asc" | "desc"
		keyword?: string
	}
}

type TransactionByIdProps = {
	params: {
		id: string | number
	}
}

type TransactionUpdateProps = {
	params: {
		id: string | number
	}
	body: {
		status: string | number
	}
}

export const transactionApi = service.injectEndpoints({
	endpoints: (builder) => ({
		getTransaction: builder.query<any, TransactionProps>({
			query: (args) => ({
				url: "/api/transaction",
				method: "GET",
				params: args.params,
			}),
			providesTags: [{ type: "Transaction", id: "LIST" }],
		}),
		getTransactionById: builder.query<any, TransactionByIdProps>({
			query: (args) => ({
				url: "/api/transaction/" + args.params.id,
				method: "GET",
			}),
			providesTags: (_, __, args) => [{ type: "Transaction", id: args.params.id }],
		}),
		updateTransaction: builder.mutation<any, TransactionUpdateProps>({
			query: (args) => ({
				url: "/api/transaction/update/" + args.params.id,
				method: "POST",
				data: args.body,
			}),
			invalidatesTags: (_, __, args) => [
				{ type: "Transaction", id: "LIST" },
				{ type: "Transaction", id: args.params.id },
			],
		}),
	}),
})

export const { useGetTransactionByIdQuery, useGetTransactionQuery, useUpdateTransactionMutation } = transactionApi
