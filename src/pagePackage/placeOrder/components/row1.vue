<template>
	<view class="row1">
		<view class="d-flex a-center j-sb px-3 pt-3 pb-1">
			<image src="/static/mall/location.png" style="width: 64rpx;height: 64rpx;" class="flex-shrink" mode=""></image>
			<view class="ml-2 w-100">
				<view class="font-md font-weight">
					杨先生  18314461317
				</view>
				<view class="truncate2">
					<text class="tages">
						默认
					</text>
					  云南省昆明市盘龙区白云路滨江俊园2栋一单元
				</view>
			</view>
			<uni-icons type="right" color="#AEAEAE" size="28" class="flex-shrink"></uni-icons>
		</view>
		<view class="line-h">
			<image src="/static/mall/border.png" class="w-100" style="height: 6rpx;" mode=""></image>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps([""])

	defineExpose({})
</script>

<style lang="scss" scoped>
	.row1 {
		background-color: #FFF;
		.tages{
			background-color: #D81828;
			color: #fff;
			padding: 8rpx 8rpx;
			line-height: 1;
			border-radius: 4rpx;
			text-align: center;
			font-size: 24rpx;
			display: inline-block;
		}
	}
</style>