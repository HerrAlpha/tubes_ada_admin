/** @format */

const buildFormData = (object: any) =>
	Object.keys(object).reduce((formData, key) => {
		if (object[key]) {
			if (Array.isArray(object[key])) {
				object[key].map((parent: any, i: number) => {
					Object.keys(parent).map((child) => {
						formData.append(`${key}[${i}][${child}]`, parent[child])
					})
				})
			} else {
				formData.append(key, object[key])
			}
		}
		return formData
	}, new FormData())

export default buildFormData
