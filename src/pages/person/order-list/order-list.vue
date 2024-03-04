<template>
	<view class="order">
		<view class="item" v-for="li in 10" @tap="toDetail">
			<linxi-tag :status="li" />
			<view class="">
				订单类型：<text class="green-color">远征观战</text>
			</view>
			<view class="d-flex a-center mt-1">
				<image src="" class="main-bg-color mr-4" style="width: 200rpx;height: 200rpx;" mode=""></image>
				<view class="">
					<view>11月4日I山东泰山VS河南队远征报名</view>
					<view>
						<text class="gray-color font">活动开始时间：</text>
						<text class="green-color font">2023-11-04-15:30 </text>
					</view>
					<view>
						<text class="gray-color font">活动结束时间：</text>
						<text class="green-color font">2023-11-04-15:30 </text>
					</view>
				</view>
			</view>
			<view class="d-flex a-center j-end mt-1">
				<view class="cacel">
					取消订单
				</view>
				<view class="redBtn">
					继续付款
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import linxiTag from './components/linxi-tag.vue';
	let changeType = 1;
	onLoad(({ type = 1 }) => {
		changeType = type;
		if (type == 2) {
			nextTick(() => {
				uni.setNavigationBarTitle({
					title: '已完成订单'
				});
			})
		}
	})

	function toDetail() {
		uni.navigateTo({
			url: "/pages/person/order-detail/order-detail?type=" + changeType
		})
	}
</script>

<style>
	page {
		background-color: #F2F2F2;
	}
</style>
<style lang="scss" scoped>
	.order {
		padding: 36rpx 28rpx;

		.item {
			background-color: #FFF;
			padding: 24rpx;
			box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(210, 210, 210, 0.3);
			border-radius: 4rpx;
			position: relative;
			margin-bottom: 40rpx;

			:deep(.uni-countdown__number) {
				width: 28rpx !important;
				font-size: 20rpx !important;
			}

			.cacel {
				text-align: center;
				width: 148rpx;
				line-height: 58rpx;
				border-radius: 30rpx;
				border: 1rpx solid #979797;
				margin-right: 20rpx;
			}

			.redBtn {
				text-align: center;
				color: #fff;
				width: 148rpx;
				line-height: 58rpx;
				background: #E52119;
				border-radius: 30rpx;
			}
		}
	}
</style>