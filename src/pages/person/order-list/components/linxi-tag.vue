<template>
	<view class="tag">
		<view class="tags" v-if="status==0">
			<text class="shape">等待付款 </text>
			<uni-countdown :show-day="false" color="#E52119" splitorColor="#E52119" :second="4000"></uni-countdown>
		</view>
		<view class="tags gray " v-if="status==1">
			<view class="common"></view>
			进行中
		</view>
		<view class="tags gray " v-if="status==2">
			<view class="common tagGray"></view>
			已完成
		</view>
		<view class="tags gray " v-if="status==3">
			<view class="common red"></view>
			已取消
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		status: {
			type: [Number, Boolean],
			default: 3
		}
	})
</script>

<style lang="scss" scoped>
	.tag {
		.tags {
			position: absolute;
			display: flex;
			align-items: center;
			background-color: #FDE4E7;
			font-size: 20rpx;
			line-height: 1.8;
			padding-right: 6rpx;
			right: 5rpx;
			top: 5rpx;
			border-radius: 4rpx;
			overflow: hidden;

			.shape {
				-webkit-clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
				clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
				background-color: #E52119;
				padding: 0 29rpx 0 10rpx;
				border-radius: 4rpx;
				color: #fff;
			}
		}

		.common {
			background-color: #009A63;
			-webkit-clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
			clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
			padding: 0;
			height: 38rpx;
			width: 48rpx;
		}

		.gray {
			background-color: #eeeeee;
			color: #818181;
		}
		.tagGray{
			background-color: #9C9C9C;
		}
		.red{
			background-color: #E52119;
		}
	}
</style>