<template>
	<view class="qrcode">
		<view class="font-weight">
			活动核销码
		</view>
		<view class="pt-5 qrcodeCenter">
			<uv-qrcode ref="qrcode" size="147rpx" value="qweqweqweqwe"></uv-qrcode>
		</view>
		<view class="green-color text-right">
			未使用
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.qrcode{
		margin-top: 24rpx;
		padding: 20rpx 28rpx;
		border-radius: 10rpx;
		background-color: #FFFFFF;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		.qrcodeCenter{
			filter: blur(8rpx);
		}
	}
</style>