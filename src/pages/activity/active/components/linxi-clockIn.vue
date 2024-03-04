<template>
	<view class="content">
		<uni-popup ref="popup" type="center" @change="change">
			<view class="">
				<view class="popupContent p-5">
					<view class="text-center font-md font-weight mb-4">
						远征观战
					</view>
					<view class="deatail">
						<view class="d-flex a-center">
							<image src="@/static/activity/location.png" class=" img" mode=""></image>
							<text class="gray-color ml-2">当前位置:</text>
							<text class="green-color ml-2">济南奥体中心体育场</text>
						</view>
						<view class="d-flex a-center mt-2">
							<image src="@/static/activity/clock.png" class=" img" mode=""></image>
							<text class="gray-color ml-2">当前时间:</text>
							<text class="green-color ml-2">2023-11-04-15:30 </text>
						</view>
					</view>
					<view class="btn">
						<linxi-button fontSize="25" line-height="92rpx" @tap="submit">活动打卡 </linxi-button>
					</view>
					<view class="d-flex j-sa mt-5">
						<view class="d-flex a-center">
							<view class="d-flex a-center j-sa rounded-circle mr-2" style="width: 30rpx;height: 30rpx;background-color: #009A63;">
								<uni-icons type="checkmarkempty" size="13" color="#fff"></uni-icons>
							</view>
							您已进入活动打卡范围
						</view>
					</view>
				</view>
				<view class="text-center mt-2">
					<uni-icons type="closeempty" size="26" color="#fff" @tap="canel"></uni-icons>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import { checkIdCard } from '@/utils/verify.js'
	import { nextTick } from 'vue';
	const popup = ref();

	function submit() {
		uni.showToast({
			icon:"none",
			title:"成功打卡"
		})
		canel()
	}

	function open() {
		uni.getLocation({
			type: 'wgs84',
			success: function (res) {
				console.log('当前位置的经度：' + res.longitude);
				console.log('当前位置的纬度：' + res.latitude);
			}
		});
		popup.value.open()
	}

	function canel() {
		popup.value.close()
	}
	const emit = defineEmits(["change"])

	function change(e) {
		emit("change", e)
	}
	defineExpose({
		open
	})
</script>

<style lang="scss" scoped>
	.content {
		.popupContent {
			width: 560rpx;
			height: 558rpx;
			background: #FFFFFF;
			border-radius: 20rpx;
			border: 2rpx solid #979797;

			.deatail {
				height: 100rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(211, 211, 211, 0.5);
				border-radius: 20rpx;
				padding: 40rpx;

				.img {
					width: 32rpx;
					height: 32rpx;
				}
			}

			.btn {
				width: 302rpx !important;
				border-radius: 46rpx !important;
				margin: 94rpx auto 0 !important;
				overflow: hidden !important;
			}
		}

	}
</style>