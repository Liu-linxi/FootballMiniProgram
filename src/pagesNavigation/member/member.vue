<template>
	<view>
		<view class="top main-bg-color">
			<view class="member text-center text-white" :style="{lineHeight:heightLine+'px',height:heightLine+'px',paddingTop:statusBarHeight+'px'}">
				会员
			</view>
			<swiper class="swiper" circular :autoplay="false" previous-margin="65rpx" next-margin="65rpx" :current="swiperIndex" @change="swiperChange">
				<swiper-item v-for="(item,index) in bannerList" :key="index">
					<view class="swiperItem bg-primary text-white" :style="{backgroundImage:`url(${item.imgSrc})`}">
						<view class="d-flex a-center ml-4 mt-4 row">
							<image src="../../static/icon/logo.png" class="pr-2" style="width: 70rpx;height: 70rpx;" mode="widthFix"></image>
							尊贵会员 权益特享
						</view>
						<view class="row2 d-flex a-center mt-4">
							<text style="font-size: 64rpx;">￥</text>158
						</view>
						<view class="row3">
							有效期：365天
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<linxi-equity :swiperIndex="swiperIndex" @swiperChange="swiperChange" />

	</view>
</template>

<script setup>
	import linxiEquity from './components/linxi-equity.vue';

	const info = uni.getSystemInfoSync()
	const statusBarHeight = info.statusBarHeight;
	// #ifdef MP
	let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
	const heightLine = menuButtonInfo.height + (menuButtonInfo.top - info.statusBarHeight) * 2;
	// #endif
	// #ifndef MP
	const heightLine = 80
	// #endif

	const bannerList = ref([
		{ "imgSrc": "https://cdn.pixabay.com/photo/2016/07/18/04/19/canton-1525284_1280.jpg" },
		{ "imgSrc": "https://cdn.pixabay.com/photo/2022/04/27/12/30/switzerland-7160290_1280.jpg" },
		{ "imgSrc": "https://cdn.pixabay.com/photo/2017/09/05/17/28/guangzhou-2718517_1280.jpg" }
	])
	const swiperIndex = ref(0);

	function swiperChange(e) {
		swiperIndex.value = e.detail.current
	}
</script>
<script>
	export default {
		options: {
			styleIsolation: 'shared', 
		},
	}
</script>
<style lang="scss" scoped>
	page {
		padding: 0;
	}

	.top {
		height: 600rpx;
		padding-bottom: 20rpx;
		margin-bottom: 120rpx;

		.member {
			height: 64rpx;
			line-height: 64rpx;
		}

		.swiper {
			margin-top: 158rpx;
			height: 356rpx;

			.swiperItem {

				width: 590rpx;
				height: 356rpx;
				margin: 0 15rpx;
				border-radius: 15rpx !important;
				overflow: hidden;
				background-repeat: no-repeat;
				background-size: 590rpx 356rpx;

				.row {
					font-size: 30rpx;
				}

				.row2 {
					font-size: 88rpx;
					color: #FFFFFF;
					line-height: 130rpx;
					text-align: left;
					padding-left: 40rpx;
					font-weight: bold;
				}

				.row3 {
					padding-top: 20rpx;
					font-size: 24rpx;
					color: RGBA(138, 134, 141, 1);
					line-height: 36rpx;
					text-align: right;
					padding-right: 20rpx;
				}
			}
		}

	}

	:deep(.uni-forms-item__label) {
		font-weight: bold;
		color: #101010;
		font-size: 32rpx;
	}

	:deep(.uni-select) {
		border: none;
	}

	:deep(.uni-select__input-placeholder) {
		color: #999;
	}

	:deep(uni-easyinput__content-input) {
		padding: 0 !important;
	}

	:deep(.uni-input-wrapper, .uni-input-form) {
		text-align: right;
	}

	:deep(.uni-easyinput__content-input) {
		text-align: right;
	}
</style>