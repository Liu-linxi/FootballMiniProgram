// 引入SDK核心类
import QQMapWX from './qqmap-wx-jssdk.js';
// 实例化API核心类
var qqmapsdk = new QQMapWX({
	key: 'ADXBZ-SLP6J-C6MFD-D3S47-BUXIH-AVBVQ' // 必填
});

export const tencentMapKey = 'ADXBZ-SLP6J-C6MFD-D3S47-BUXIH-AVBVQ'

export function reverseGeocoder(location) {
	return new Promise((resolve, reject) => {
		qqmapsdk.reverseGeocoder({
			location,
			success: ({ result }) => {
				resolve(result)
			},
			fail: (error) => {
				console.log(error);
				reject(error)
			}
		})
	})
}


//	角度转换成弧度
const rad = (d) => {
	return d * Math.PI / 180.00;
};
export function algorithmDistance(point1, point2) {
	let [x1, y1] = point1;
	let [x2, y2] = point2;
	let Lat1 = rad(x1); // 纬度
	let Lat2 = rad(x2);
	let a = Lat1 - Lat2; //	两点纬度之差
	let b = rad(y1) - rad(y2); //	经度之差
	let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
		Math.cos(Lat1) * Math.cos(Lat2) * Math.pow(Math.sin(b / 2), 2)));
	//	计算两点距离的公式
	s = s * 6378137.0; //	弧长等于弧度乘地球半径（半径为米）
	s = Math.round(s * 10000) / 10000; //	精确距离的数值
	return s;
}

// 获取全国城市列表数据。
export function getCityList() {
	return new Promise((resolve, reject) => {
		qqmapsdk.getCityList({
			success: function({ result }) { //成功后的回调
				resolve(result)
			},
			fail: function(error) {
				reject(error)
			},
			complete: function(res) {
				// console.log(res);
			}
		});
	})
}
export function getDistrictByCityId(id) {
	return new Promise((resolve, reject) => {
		qqmapsdk.getDistrictByCityId({
			// 传入对应省份ID获得城市数据，传入城市ID获得区县数据,依次类推
			id, //对应接口getCityList返回数据的Id，如：北京是'110000'
			success: function({result}) { //成功后的回调
				resolve(result)
			},
			fail: function(error) {
				reject(error)
			},
			complete: function(res) {
				// console.log(res);
			}
		});
	})
}