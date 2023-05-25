/** @format */

import cryptoUtil from "@/utils/Crypto"
import { type NextRequest } from "next/server"

export function isAuthenticate(req: NextRequest) {
	const decryptCookies = req.cookies.getAll().map(({ name, value }) => ({ name: cryptoUtil.AESdecrypt(decodeURI(name)), value: cryptoUtil.AESdecrypt(decodeURI(value)) }))
	const token = decryptCookies.find(({ name }) => name === "access_token")
	const user = decryptCookies.find(({ name }) => name === "user")

	return token?.value && user?.value
}
