export function showModal(config) {
	return new Promise((success, fail) => {
		uni.showModal({ ...config, success, fail })
	})
}

export function showToast(title, config) {
	uni.showToast({
		icon: 'none',
		mask: true,
		title,
		...config
	})
}

export function showActionSheet(itemList, config) {
	return new Promise((success, fail) => {
		uni.showActionSheet({
			itemList,
			...config,
			success,
			fail
		})
	})
}

export function showLoading(title, mask = true, config) {
	return new Promise((success, fail) => {
		uni.showLoading({ ...config, title, mask })
	})
}