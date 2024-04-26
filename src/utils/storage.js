/**
 * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
 */
export function setStorage(obj) {
	return uni.setStorage(obj)
}
export function setStorageSync (key, data) {
	let newData = null
	if (data instanceof Object) {
		newData = JSON.stringify(data)
	}
	newData = data
	uni.setStorageSync(key, newData)
}
/**
 * 从本地缓存中异步获取指定 key 对应的内容。
 */
export function getStorage (key) {
	return new Promise((success, fail) => {
		uni.getStorage({ key, success, fail })
	})
}

export function getStorageSync (key) {
	const value = uni.getStorageSync(key)
	if (value) return value
}
/**
 * 从本地缓存中异步移除指定 key。
 */
export function removeStorage(key) {
	return new Promise((success, fail) => {
		return uni.removeStorage({ key, success, fail })
	})
}
/**
 *
 * @param key 从本地缓存中同步移除指定 key。
 */
export function removeStorageSync(key) {
	uni.removeStorageSync(key)
}
/**
 * 清理本地数据缓存。
 */
export function clearStorage() {
	uni.clearStorage()
}
/**
 * 同步清理本地数据缓存。
 */
export function clearStorageSync() {
	uni.clearStorageSync()
}