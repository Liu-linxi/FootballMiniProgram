<template>
	<view class="name">
		<view v-if="isStudent">
			当前用户是学生
		</view>
		<view v-else>
			<button @tap="onShowStudentVerifyDialog">授权学生身份</button>
		</view>
		<view>
			<view v-if="showStudentVerifyDialog">
				<!-- #ifdef MP-WEIXIN -->
				<student-verify @auth="onStudentVerifyAuth" @reject="onStudentVerifyReject" @close="onStudentVerifyClose" :show="showStudentVerifyDialog" isQuick></student-verify>
				<!-- #endif -->
			</view>
		</view>
		<button @tap="locationsChange">获取位置</button>
		<view class="">
			当前获取经纬度：{{dataSLon.nowAddred?.longitude}}-{{dataSLon.nowAddred?.latitude}}
		</view>
		<view class="">
			计算结果：{{dataSLon.nowAddress}}
		</view>
	</view>
</template>

<script setup>
	const dataSLon = ref({})
	async function locationsChange() {
		let getSet = await uni.getSetting();
		console.log( getSet);
		console.log("scope.userLocat值",getSet.authSetting['scope.userLocation']);
		if(!getSet.authSetting['scope.userLocation']){
			let res2 = await uni.openSetting();
				console.log(res2);
			// let res = await uni.authorize({ scope: 'scope.userLocation' })
			// console.log("获取授权后",res);
			// if (res.errMsg!= "authorize:ok"){
			// 	console.log(23);
			// 	let res2 = await uni.openSetting()
			// 	console.log( res2);
			// }
		}
		
		const { longitude, latitude } = await uni.getLocation({ type: 'wgs84' })
		// let longitude=113.1669926311645,latitude=33.771882018966885;
		console.log(longitude, latitude);
		dataSLon.value.nowAddred = { longitude, latitude };
		const { formatted_addresses } = await reverseGeocoder({ latitude, longitude })
		dataSLon.value.nowAddress = jsonStr(formatted_addresses)
	}























	const CODE_STORAGE_KEY = 'CODE_STORAGE_KEY'
	const studentcheckCode = ref("");
	const showStudentVerifyDialog = ref(false);
	const isStudent = ref(false)

	function onShowStudentVerifyDialog() {
		showStudentVerifyDialog.value = true;
	}

	function onStudentVerifyClose() {
		if (!studentcheckCode.value) return
		// 验证学生身份
		checkStudentIdentity()
	}

	function onStudentVerifyReject(err) {
		console.log(err);
	}

	function onStudentVerifyAuth(e) {
		const code = e.detail.wx_studentcheck_code
		if (code) {
			studentcheckCode.value = code;
			// 2小时有效，缓存到本地
			setStorageSync(CODE_STORAGE_KEY, code)
			// 验证学生身份
			checkStudentIdentity()
		}
	}
	const useUserInfo = useUserInfoStore()

	// const code = getStorageSync(CODE_STORAGE_KEY) || ''
	// if (code) {
	// 	studentcheckCode.value = code
	// 	checkStudentIdentity()
	// }
	async function checkStudentIdentity(opt = {}) {
		if (!studentcheckCode.value) return
		const { errcode, bind_status, is_student } = await useUserInfo.pinia_userInfo_isStudent({ wxStudentCheckCode: studentcheckCode.value })
		if (errcode === 0) {
			isStudent.value = bind_status === 3 && is_student
		} else if (res.data.errcode !== -1) {
			// wx_studentcheck_code过期或无效, 清除掉这个字段
			studentcheckCode.value = ""
			setStorageSync(CODE_STORAGE_KEY, '')
		} else {
			checkStudentIdentity()
		}
	}
</script>

// <script>
	// 	const CODE_STORAGE_KEY = 'CODE_STORAGE_KEY'
	// 	export default {
	// 		data() {
	// 			return {
	// 				showStudentVerifyDialog: false,
	// 				isStudent: false, // 是否是学生
	// 				studentcheckCode: '', // 获取学生身份的code
	// 			}
	// 		},
	// 		mounted() {
	// 			const code = getStorageSync(CODE_STORAGE_KEY) || ''
	// 			if (code) {
	// 				this.studentcheckCode = code;
	// 				console.log(code);
	// 				this.checkStudentIdentity()
	// 			}
	// 		},
	// 		methods: {
	// 			onShowStudentVerifyDialog() {
	// 				this.showStudentVerifyDialog = true
	// 			},
	// 			onStudentVerifyClose() {
	// 				if (!this.studentcheckCode) return
	// 				// 验证学生身份
	// 				this.checkStudentIdentity()
	// 			},
	// 			onStudentVerifyReject(err) {
	// 				console.log(err);
	// 			},
	// 			onStudentVerifyAuth(e) {
	// 				console.log(e);
	// 				const code = e.detail.wx_studentcheck_code
	// 				if (code) {
	// 					console.log(code);
	// 					this.studentcheckCode = code;
	// 					// 2小时有效，缓存到本地
	// 					setStorageSync(CODE_STORAGE_KEY, code)
	// 					// 验证学生身份
	// 					this.checkStudentIdentity()
	// 				}
	// 			},
	// 			checkStudentIdentity() {
	// 				uni.showToast({
	// 					title: '21323'
	// 				});
	// 			}
	// 		},
	// 	}

	import { ref } from 'vue';
	import { jsonObj, jsonStr } from '@/utils/util';
import { showToast } from '@/utils/uni-interactive';

	// 
</script>

<style lang="scss" scoped>
	.name {}
</style>