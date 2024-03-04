<template>
	<view class="content">
		<view class="d-flex a-center tab">
			<view class="mr-3" :class="{checked:current===index}" v-for=" (li,index) in dataList" :key="index" @tap="changeClick(index)">
				{{li.name}}
			</view>
		</view>
	</view>
</template>

<script setup>
	const current = ref(0);
	const dataList = ref([
		{ name: "最新活动" },
		{ name: "我参与的" }
	])

	function changeClick(index) {
		current.value = index
	}
</script>

<style lang="scss" scoped>
	.content {
		margin-bottom: 40rpx;
		.tab {
			font-size: 32rpx;
			color: #454545;
			.checked{
				font-size: 36rpx;
				font-weight: bold;
				position: relative;
				&:after{
					content:"";
					position: absolute;
					width: 105rpx;
					height: 15rpx;
					background-image: url("~@/static/activity/icon1.png");
					background-repeat: no-repeat;
					background-size: 100%;
					left: 18rpx;
					bottom: -10rpx;
				}
			}
		}
	}
</style>