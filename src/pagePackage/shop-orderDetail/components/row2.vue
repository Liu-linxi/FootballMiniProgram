<template>
	<view class="row2">
		<view class="d-flex a-center j-sb border-bottom py-2 px-3">
			<view class="font32">
				配送信息
			</view>
			<view class="d-flex a-center">
				<text class="blue mr-1">详细信息</text>
				<uni-icons type="right" size="16" color="#595959"></uni-icons>
			</view>
		</view>
		<view class="px-3">
			<view class="d-flex a-center j-sb py-1">
				<view class="gray-color">
					配送方式
				</view>
				<view class="">
					快递配送
				</view>
			</view>
			<view class="d-flex a-center j-sb py-1">
				<view class="gray-color">
					配送地址
				</view>
				<view class="">
					新城区城乡一体化示范区长安大道6号
				</view>
			</view>
			<view class="d-flex a-center j-sb py-1">
				<view class="gray-color">
					收件人
				</view>
				<view class="">
					王** 150****5678
				</view>
			</view>
			
		</view>
	</view>
</template>

<script setup>
	const props = defineProps([""])

	defineExpose({})
</script>

<style lang="scss" scoped>
	.row2 {
		margin: 20rpx 28rpx;
		background-color: #fff;
		border-radius: 10rpx;
		
		.blue {
			color: #427CFC; 
		}
	}
</style>