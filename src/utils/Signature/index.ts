/** @format */
import sha256 from "crypto-js/sha256"
import cryptoUtil from "@/utils/Crypto"

const signatureUtil = {
	generate: (path: string, method: string, timestamp: string) => {
		const hashDigest = sha256(timestamp).toString()

		return cryptoUtil.HmacSHA256(`${path}:${method.toUpperCase()}:${hashDigest}`)
	},
}

export default signatureUtil
