/** @format */

import axios from "axios"
import cookieUtil from "@/utils/Cookie"
import { Toast, ToastLoading } from "@/utils/SweetAlert"
import buildFormData from "@/utils/FormData"
import signatureUtil from "@/utils/Signature"
import moment from "moment"

type Props = {
	url: string
	method: "GET" | "POST" | "DELETE"
	data?: any
	params?: any
	headers?: any
}

export const axiosBaseQuery =
	({ baseUrl }: { baseUrl?: string } = { baseUrl: undefined }) =>
	async ({ url, method, data, params, headers }: Props) => {
		try {
			const isVisible = Toast.isVisible()

			if (!isVisible) {
				ToastLoading.fire({
					title: "Loading...",
					didOpen: () => {
						ToastLoading.showLoading()
					},
				})
			}

			const timestamp = moment().format()
			const signature = signatureUtil.generate(url, method, timestamp)

			const res = await axios({
				url: baseUrl ? baseUrl + url : url,
				method,
				data: data && buildFormData(data),
				params,
				headers: {
					...headers,
					"x-api-timestamp": timestamp,
					"x-api-signature": signature,
				},
			})

			if (!isVisible) {
				ToastLoading.close()
			}

			return { data: res.data }
		} catch (err: any) {
			if (err?.response?.status === 401) {
				Toast.fire({
					icon: "error",
					title: "Token expired. Silahkan login kembali.",
				}).then((res) => {
					if (res.isConfirmed) {
						cookieUtil.remove("access_token")
						cookieUtil.remove("user")

						window.location.href = "login"
					}
				})
			} else if (err?.response?.status === 403) {
				Toast.fire({
					icon: "error",
					title: "Forbidden",
				}).then((res) => {
					if (res.isConfirmed) {
						window.location.href = "dashboard"
					}
				})
			} else if (err?.response?.status === 500) {
				Toast.fire({
					icon: "error",
					title: "Internal Server Error!",
				})
			} else if (err?.response?.status === 422) {
				Toast.fire({
					icon: "error",
					title: err?.response.data.message,
				})
			}

			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			}
		}
	}
