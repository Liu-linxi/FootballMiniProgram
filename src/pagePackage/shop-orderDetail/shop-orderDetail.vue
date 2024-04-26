<template>
	<view class="orderDetails">
		<row1 />
		<row2 />
		<row3 />
		<row4 />
		<view class="text-center gray-color">
			到底了～
		</view>
		<uv-safe-bottom></uv-safe-bottom>



		<view class="bottom">
			<view class="d-flex a-center j-end pt-3 pr-4">
				
				<view class="mr-2">
					应付 <text class="main-color font32">￥85.8</text>
				</view>
				<view class="cacel" @tap="cancelOrder">
					取消订单
				</view>
				<view class="cacel" @tap="toEvaluate">
					去评价
				</view>
				<view class="redBtn"  @tap="continuePayment">
					继续付款
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import row1 from "./components/row1";
	import row2 from "./components/row2";
	import row3 from "./components/row3";
	import row4 from "./components/row4";

	const status = ref(0)
	
	function toEvaluate(num) {
		uni.navigateTo({
			url:"/pagePackage/evaluate/evaluate"
		})
	}
</script>

<style lang="scss" scoped>
	.orderDetails {
		padding-bottom: 106rpx;
		.bottom {
			background-color: #FFFFFF;
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			height: 146rpx;

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
				background: #D81828;
				border-radius: 30rpx;
			}
		}
	}
</style>
<style>
	page {
		background-color: #F2F2F2;
	}
</style>