<template>
	<view class="more-shop mt-2 p-2">
		<uv-divider text="更多精选商品" textColor="#242424"></uv-divider>
		<view class="shop">
			<view class="detail shadow-sm" v-for="li in 3" @tap="toDetail">
				<view class="text-center position-relative">
					<image src="" style="width: 316rpx;height: 336rpx;" class="bg-danger" mode=""></image>
					<view v-if="li==3" class="top-0 left-0 position-absolute right-0 border-0 d-flex a-center j-center" style="width: 316rpx;height: 336rpx;background-color: rgba(0, 0, 0, 0.2);">
						<image src="/static/mall/Chime.png" style="width: 160rpx;height: 136rpx;" class="" mode=""></image>
					</view>
				</view>
				<view class=" d-flex flex-column j-sa" style="min-height: 150rpx;">
					<view class="font mt-1">
						嵩山龙门战队马克杯
					</view>
					<view class="font" style="color: #FF6F2D;">
						领券无门槛减10
					</view>
					<view class="d-flex j-sb">
						<view class="">
							<text class="main-color font-md font-weight"> ￥ 49</text>
							<text class=" text-light-muted font ml-2" style="text-decoration: line-through;">￥90</text>
						</view>
						<!-- <text class=" gray-color font ml-2"> 已售16件</text> -->
						<uni-icons type="cart" size="28" class="line-h ml-4" color="#02873F"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps([""])
	function toDetail(){
		uni.redirectTo({
			url:"/pagePackage/shop-detail/shop-detail"
		})
	}
</script>

<style lang="scss" scoped>
	.more-shop {
		border-top: 16rpx solid rgba(247, 248, 251, 1);
		.shop {
			padding-bottom: 40rpx;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 18rpx;

			.detail {
				background-color: #FFFFFF;
				padding: 14rpx;

			}
		}
	}
</style>