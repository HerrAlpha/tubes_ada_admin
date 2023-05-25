/** @format */

import AES from "crypto-js/aes"
import { enc } from "crypto-js"
import hmacSHA256 from "crypto-js/hmac-sha256"
import Base64 from "crypto-js/enc-base64"

const salt = process.env.NEXT_PUBLIC_APP_SALT || ""

const cryptoUtil = {
	HmacSHA256: (value: string) => Base64.stringify(hmacSHA256(value, salt)),
	AESencrypt: (value: string) => encodeURIComponent(AES.encrypt(value, salt).toString()),
	AESdecrypt: (value: string) => AES.decrypt(decodeURIComponent(value), salt).toString(enc.Utf8),
}

export default cryptoUtil
