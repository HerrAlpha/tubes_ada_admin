/** @format */

const currencyUtil = {
	rupiah: (data: number = 0) => "Rp " + data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "."),
}

export default currencyUtil
