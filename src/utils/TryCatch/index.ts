/** @format */

const tc = async (tryFunc: any) => {
	let value

	try {
		value = await tryFunc()
	} catch (e) {
		value = null
	}

	return value
}

export default tc
