<template>
	<view class="shop_pop">
		<uni-popup ref="popup" type="bottom" @change="popChange">
			<view class="content">
				<view class="font32 text-center">
					优惠明细
				</view>
				<view class="d-flex a-center j-sb mt-5">
					<view class="">
						商品总额
					</view>
					<view class=" font-weight">
						￥48.6
					</view>
				</view>
				<view class="d-flex a-center j-sb mt-5">
					<view class="">
						活动优惠
					</view>
					<view class=" font-weight main-color">
						-￥20.0
					</view>
				</view>
				<view class="d-flex a-center j-sb mt-5">
					<view class="">
						优惠券
					</view>
					<view class=" font-weight main-color">
						-￥20.0
					</view>
				</view>
				<view class="d-flex a-center j-sb mt-5">
					<view class="">
						配送费
					</view>
					<view class=" font-weight">
						￥5.0
					</view>
				</view>
				<view class="d-flex a-center j-sb mt-5">
					<view class="">
						合计
					</view>
					<view class=" font-weight main-color">
						￥23.33
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	const props = defineProps(["zIndexNum"])

	const popup = ref()

	function showPop() {
		popup.value.open()
	}
	
	
	
	const emit = defineEmits(["update:zIndexNum"])
	function popChange({ show }) {
		emit('update:zIndexNum', show);
	}
	defineExpose({ showPop })
</script>

<style lang="scss" scoped>
	.shop_pop {
		.content {
			background-color: #fff;
			padding: 50rpx 30rpx 300rpx;
			border-radius: 16rpx 16rpx 0rpx 0rpx;
		}
	}
</style>