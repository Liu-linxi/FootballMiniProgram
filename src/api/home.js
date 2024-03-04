import http from "./config/service.js";


export const getGoodsList = (params) => {
	return http.get('/api/user/list', {
		params
	})
}


export const getGoodsInfo = (data, params) => {
	return http.middleware({
		method: 'POST', // 必须大写
		url: '/api/user/update',
		data: data,
		params: params,
		custom: {
			auth: true
		}
	})
}