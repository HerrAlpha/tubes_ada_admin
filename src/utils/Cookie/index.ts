/** @format */

import cookie from "js-cookie"
import cryptoUtil from "@/utils/Crypto"

const cookieUtil = {
	getAll: () => Object.fromEntries(Object.entries(cookie.get()).map(([name, value]) => [cryptoUtil.AESdecrypt(name), cryptoUtil.AESdecrypt(value)])),
	set: (key: string, value: string, options?: cookie.CookieAttributes) => cookie.set(cryptoUtil.AESencrypt(key), cryptoUtil.AESencrypt(value), options),
	get: (key: string) => cryptoUtil.AESdecrypt(Object.values(Object.fromEntries(Object.entries(cookie.get()).filter(([name]) => cryptoUtil.AESdecrypt(name) === key)))[0]),
	remove: (key: string, options?: cookie.CookieAttributes) =>
		cookie.remove(Object.keys(Object.fromEntries(Object.entries(cookie.get()).filter(([name]) => cryptoUtil.AESdecrypt(name) === key)))[0], options),
}

export default cookieUtil
