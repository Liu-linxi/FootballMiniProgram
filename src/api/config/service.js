import Request from './luch-request/index.js'
// 配置地址识别
function getAccountInfoSync() {
	let BASE_URL = ''
	// #ifdef MP
	const { miniProgram } = uni.getAccountInfoSync()
	switch (miniProgram.envVersion) {
		// 开发版
		case 'develop':
			BASE_URL = 'http://192.168.3.36:8081'
			break
			// 正式版
		case 'release':
			BASE_URL = 'https://testhfys.ydmbkj.cn'
			break
			//体验版
		default:
			BASE_URL = 'https://testhfys.ydmbkj.cn'
			break
	}
	return BASE_URL
	// #endif
	// #ifndef MP
	BASE_URL = 'https://testhfys.ydmbkj.cn'
	return BASE_URL
	// #endif
}
const getTokenStorage = () => {
	let token = ''
	try {
		token = ""
	} catch (e) {}
	return token
}

const http = new Request()

http.setConfig((config) => {
	/* 设置全局配置 */
	config.baseURL = getAccountInfoSync()
	config.header = {
		...config.header,
		// a: 1, // 演示
		// b: 2 // 演示
	}
	return config
})


http.interceptors.request.use((config) => {
	/* 请求之前拦截器。可以使用async await 做异步操作 */
	config.header = {
		...config.header,
		appToken: getTokenStorage()
	}
	/*
 if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
   return Promise.reject(config)
 }
 */
	return config
}, (config) => {
	return Promise.reject(config)
})


http.interceptors.response.use(async (response, a) => {
	/* 请求之后拦截器。可以使用async await 做异步操作  */
	return response.data
}, (response) => { // 请求错误做点什么。可以使用async await 做异步操作
	return Promise.reject(response)
})

export default http

export function addInterceptor() {
  const addNetWorkInterceptor = () => {
    uni.addInterceptor('request', {
      invoke(options) {
				showLoading('正在加载中...')
        console.log(options);
      },
      success() {
        uni.hideLoading()
      },
      fail() {
        uni.hideLoading()
      },
      complete() {
        // !showLoadingCount && uni.hideLoading()
      }
    })
  }
  const removeNetWorkInterceptor = () => {
    uni.removeInterceptor('request')
  }

  return {
    addNetWorkInterceptor,
    removeNetWorkInterceptor
  }
}