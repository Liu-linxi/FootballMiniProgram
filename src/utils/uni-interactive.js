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

export function getLogin(provider) {
	return new Promise((success) => {
		uni.login({
			provider,
			success,
			fail() {
				showToast('获取code失败')
			}
		})
	})
}

export function requestPayment(data, msg, provider = "wxpay", noBack = true) {
	return new Promise((success) => {
		uni.requestPayment({
			provider,
			orderInfo: 'orderInfo',
			...data,
			success,
			fail() {
				showToast(msg)
				if (noBack){
					setTimeout(() => {
						uni.navigateBack()
					}, 1500)
				}else{
					 uni.$emit("abandonPopup")
				}
			}
		})
	})
}

/**
 * @description 自定义路由拦截
 */

// 白名单
const whiteList = [
	'/', // 注意入口页必须直接写 '/'
	{ pattern: /^\/pages\/registeredMember.*/ }, // 支持正则表达式
	'/pagesNavigation/index/index',
	'/pages/login/login',
	'/pages/login/login',
	{ pattern: /^\/pages\/home\/newsList\/*/ },
	{ pattern: /^\/pages\/home\/newsDetail\/*/ }
]

export async function routerAddIntercept() {
	const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab']
	const useUserInfo = useUserInfoStore()
	const { userInfo } = storeToRefs(useUserInfo);
	// 用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
	list.forEach(item => {
		uni.addInterceptor(item, {
			invoke(e) {
				// 获取要跳转的页面路径（url去掉"?"和"?"后的参数）
				const url = e.url.split('?')[0]
				console.log('url', url)

				// 判断当前窗口是白名单，如果是则不重定向路由
				let pass
				if (whiteList) {
					pass = whiteList.some((item) => {
						if (typeof(item) === 'object' && item.pattern) {
							return item.pattern.test(url)
						}
						return url === item
					})
				}
				// 不是白名单并且没有注册
				// if (!pass && userInfo.value.registerType=="false") {
				// 	uni.$emit("showRegisterPopup");
				// 	return false
				// }
				return e
			},
			fail(err) { // 失败回调拦截
				console.log(err)
			}
		})
	})
}