<template>
	<view class="avatar mt-1">
		<view class="left d-flex a-center w-100">
			<image src="" class="head" mode=""></image>
			<view class="">
				<view class="font34 font-weight">
					阳兰广
				</view>
				<view class="mt-1 d-flex a-center">
					<image src="" class="tags" mode=""></image>
					<view class="text">球场新秀</view>
				</view>
			</view>
		</view>
		<view class="right flex-shrink">
			<view class="d-flex a-center rigbtn text-white font" v-if="type==0">
				<image src="" class="diamond" mode=""></image>
				加入会员
			</view>
			<view class="text-center"  v-if="type==1">
				<view class="popupTip text-nowrap">
					会员码
				</view>
				<image src="" class="code" mode="" @tap="showPop"></image>
			</view>
		</view>
		<uni-popup ref="popup" type="center" :is-mask-click="false">
			<view class="text-center">
				<view class="popupContent text-center">
					<view class="green-color mb-5 pb-1 font34">
						亲子会员
					</view>
					<!-- <w-qrcode :options="options"></w-qrcode> -->
					<uv-qrcode ref="qrcode" size="350rpx" value="qweqweqweqwe" v-if="qrHide"></uv-qrcode>
					<view class="mt-3 gray-color">
						二维码每60秒自动更新
					</view>
				</view>
				<uni-icons type="closeempty" size="30" color="#FFF" class="mt-2" @tap="qrHide=false;popup.close()"></uni-icons>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref } from 'vue';
	const props = defineProps(["type"])
	const qrHide=ref(false);
	const popup=ref()
	function showPop(){
		qrHide.value=true;
		popup.value.open()
	}
</script>

<style lang="scss" scoped>
	.popupContent{
		background-color: #FFFFFF;
		padding: 70rpx 150rpx;
		
	}
	.avatar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10rpx;
		.left {
			.head {
				width: 114rpx;
				height: 114rpx;
				background: #E52119;
				border-radius: 50%;
				box-shadow: 0rpx 0rpx 12rpx 0rpx rgba(0, 0, 0, .5);
				margin-right: 26rpx;
			}

			.tags {
				width: 38rpx;
				height: 42rpx;
				background: #E52119;
			}

			.text {
				text-align: center;
				width: 120rpx;
				line-height: 30rpx;
				background: #E52119;
				font-size: 20rpx;
				border-radius: 0 15rpx 15rpx 0;
				color: white;
			}
		}

		.right {
			.rigbtn {
				background: #E52119;
				border-radius: 4rpx;
				padding: 6rpx 12rpx;

				.diamond {
					width: 36rpx;
					height: 32rpx;
					background: #FFFFFF;
					margin-right: 16rpx;
				}
			}
			.popupTip{
				font-size: 16rpx;
				color: #A56E33;
				line-height: 32rpx;
				background: #FED9A4;
				padding: 2rpx 14rpx;
				border-radius: 30rpx;
				position: relative;
				&:after{
					content: "";
					width: 10rpx;
					height: 10rpx;
					position: absolute;
					bottom: -5rpx;
					left: calc(50% - 5rpx);
					background: #FED9A4;
					transform: rotate(45deg);
				}
			}
			.code {
				margin-top: 18rpx;
				width: 39rpx;
				height: 39rpx;
				background: #58525C;
			}
		}
	}
</style>