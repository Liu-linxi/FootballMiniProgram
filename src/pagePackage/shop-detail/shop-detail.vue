<template>
	<view class="shop_detail">
		<panel-row />
		<more-shop />

		
		<view class="fixed">
			<view class="d-flex a-center j-sb">
				<view class="text-center line-h" @tap="toCart">
					<uni-icons type="cart" size="28" class="line-h" color="#02873F"></uni-icons>
					<view class="">
						购物车
					</view>
				</view>
				<view class="text-white btn">
					<view class="w-50 text-center left">加入购物车</view>
					<view  class="w-50 text-center right">立即购买</view>
				</view>
			</view>
			<uv-safe-bottom></uv-safe-bottom>
		</view>
	</view>
</template>

<script setup>
	import panelRow from './Child/panel-row.vue';
	import moreShop from './Child/more-shop.vue';

	function toCart(){
		uni.navigateTo({
			url:"/pagePackage/shop-cart/shop-cart"
		})
	}

</script>

<style lang="scss" scoped>
	.shop_detail {
		.fixed {
			background-color: #ffffff;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			padding: 20rpx 30rpx 0;
			.btn{
				line-height: 80rpx;
				display: flex;
				align-items: center;
				text-align: center;
				text-wrap: nowrap;
				width: 452rpx;
				.left{
					line-height: 80rpx;
					background: #1C262D;
					border-radius: 40rpx 0rpx 0rpx 40rpx;
				}
				.right{
					line-height: 80rpx;
					background: #FF4444;
					border-radius:0rpx 40rpx 40rpx 0rpx;
				}
			}
		}
		
	}
</style>