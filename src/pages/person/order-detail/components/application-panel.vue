<template>
	<view class="application">
		<view class="font-weight">
			{{name}}
		</view>
		<view class="d-flex a-center gray-color" v-for="li in panelList" :key="li.name">
			<view class="title flex-shrink text-nowrap mt-1">
				{{li.name}} ：
			</view>
			<view class="val">{{li.value}}</view>
		</view>
	</view>
</template>

<script setup>
	const props =defineProps(["name","panelList"])
</script>

<style lang="scss" scoped>
	.application{
		margin-top: 24rpx;
		padding: 24rpx 28rpx;
		border-radius: 10rpx;
		background-color: #FFFFFF;
		.title{
			width: 112rpx;
		}
		.val{
			margin-left: 70rpx;
			color: #3C3E40
		}
	}
</style>