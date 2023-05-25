/** @format */

import { cookies } from "next/headers"
import cryptoUtil from "@/utils/Crypto"
import axios from "axios"
import moment from "moment"
import signatureUtil from "@/utils/Signature"
import tc from "@/utils/TryCatch"

type Props = {
	params: {
		path: string[]
	}
}

export async function GET(request: Request, { params }: Props) {
	const { url, headers, method } = request

	const cookieStore = cookies()
	const searchParams = Object.fromEntries(new URL(url).searchParams)

	const accessToken = cookieStore.getAll().find(({ name }) => cryptoUtil.AESdecrypt(decodeURI(name)) === "access_token")

	const path = "/api/" + params.path.join("/")
	const timestamp = headers.get("x-api-timestamp")

	if (!timestamp || !moment(headers.get("x-api-timestamp")).isSameOrAfter(moment().subtract(1, "minutes"))) {
		return new Response(JSON.stringify({ success: false, message: "Timestamp has expired." }), {
			status: 401,
			headers: { "Content-Type": "application/json" },
		})
	} else {
		const signature = signatureUtil.generate(path, method, timestamp)

		if (signature !== headers.get("x-api-signature")) {
			return new Response(JSON.stringify({ success: false, message: "Signatures don't match." }), {
				status: 401,
				headers: { "Content-Type": "application/json" },
			})
		}
	}

	try {
		const res = await axios({
			url: process.env.API_BASE_URL + "/api/" + params.path.join("/"),
			method: "GET",
			params: searchParams,
			headers: {
				"x-api-key": process.env.API_KEY,
				Accept: "application/json",
				Authorization: accessToken && "Bearer " + cryptoUtil.AESdecrypt(decodeURI(accessToken.value)),
			},
		})

		return new Response(JSON.stringify(res.data), {
			status: res.status,
			headers: { "Content-Type": "application/json" },
		})
	} catch (err: any) {
		return new Response(JSON.stringify(err.response.data), {
			status: err.response.status,
			headers: { "Content-Type": "application/json" },
		})
	}
}

export async function POST(request: Request, { params }: Props) {
	const { url, headers, method, formData } = request

	const cookieStore = cookies()
	const searchParams = Object.fromEntries(new URL(url).searchParams)
	const data = await tc(formData)

	const accessToken = cookieStore.getAll().find(({ name }) => cryptoUtil.AESdecrypt(decodeURI(name)) === "access_token")

	const path = "/api/" + params.path.join("/")
	const timestamp = headers.get("x-api-timestamp")

	if (!timestamp || !moment(headers.get("x-api-timestamp")).isSameOrAfter(moment().subtract(1, "minutes"))) {
		return new Response(JSON.stringify({ success: false, message: "Timestamp has expired." }), {
			status: 401,
			headers: { "Content-Type": "application/json" },
		})
	} else {
		const signature = signatureUtil.generate(path, method, timestamp)

		if (signature !== headers.get("x-api-signature")) {
			return new Response(JSON.stringify({ success: false, message: "Signatures don't match." }), {
				status: 401,
				headers: { "Content-Type": "application/json" },
			})
		}
	}

	try {
		const res = await axios({
			url: process.env.API_BASE_URL + "/api/" + params.path.join("/"),
			method: "POST",
			params: searchParams,
			headers: {
				"x-api-key": process.env.API_KEY,
				Accept: "application/json",
				"Content-Type": "multipart/form-data",
				Authorization: accessToken && "Bearer " + cryptoUtil.AESdecrypt(decodeURI(accessToken.value)),
			},
			data,
		})

		return new Response(JSON.stringify(res.data), {
			status: res.status,
			headers: { "Content-Type": "application/json" },
		})
	} catch (err: any) {
		return new Response(JSON.stringify(err.response.data), {
			status: err.response.status,
			headers: { "Content-Type": "application/json" },
		})
	}
}

export async function DELETE(request: Request, { params }: Props) {
	const { url, headers, method } = request

	const cookieStore = cookies()
	const searchParams = Object.fromEntries(new URL(url).searchParams)

	const accessToken = cookieStore.getAll().find(({ name }) => cryptoUtil.AESdecrypt(decodeURI(name)) === "access_token")

	const path = "/api/" + params.path.join("/")
	const timestamp = headers.get("x-api-timestamp")

	if (!timestamp || !moment(headers.get("x-api-timestamp")).isSameOrAfter(moment().subtract(1, "minutes"))) {
		return new Response(JSON.stringify({ success: false, message: "Timestamp has expired." }), {
			status: 401,
			headers: { "Content-Type": "application/json" },
		})
	} else {
		const signature = signatureUtil.generate(path, method, timestamp)

		if (signature !== headers.get("x-api-signature")) {
			return new Response(JSON.stringify({ success: false, message: "Signatures don't match." }), {
				status: 401,
				headers: { "Content-Type": "application/json" },
			})
		}
	}

	try {
		const res = await axios({
			url: process.env.API_BASE_URL + "/api/" + params.path.join("/"),
			method: "DELETE",
			params: searchParams,
			headers: {
				"x-api-key": process.env.API_KEY,
				Accept: "application/json",
				Authorization: accessToken && "Bearer " + cryptoUtil.AESdecrypt(decodeURI(accessToken.value)),
			},
		})

		return new Response(JSON.stringify(res.data), {
			status: res.status,
			headers: { "Content-Type": "application/json" },
		})
	} catch (err: any) {
		return new Response(JSON.stringify(err.response.data), {
			status: err.response.status,
			headers: { "Content-Type": "application/json" },
		})
	}
}
