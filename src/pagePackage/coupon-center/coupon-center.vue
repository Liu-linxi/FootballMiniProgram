<template>
	<view class="copCenter">
		<view class="d-flex a-center top">
			<view v-for="(li,index) in list" :key="index" @tap="click(index)" class="item" :class="{active:index==actIndex}">
				{{li}}
			</view>
		</view>
		<view class="" style="height: 98rpx;"></view>
		<view class="py-1">
			<coupon-item />
		</view>
	</view>
</template>

<script setup>
	const list = ref(["满减券", "折扣券", "运费券"]);
	const actIndex = ref(0)

	function click(index) {
		actIndex.value = index;
	}
</script>

<style lang="scss" scoped>
	.copCenter {
		.top {
			height: 98rpx;
			background: #FFFFFF;
			padding: 0 100rpx;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			z-index: 3;
			
			.item {
				color: #777777;
				margin-right: 74rpx;
			}

			.active {
				color: #333333;
				position: relative;
				font-weight: bold;

				&::after {
					content: '';
					display: block;
					position: absolute;
					bottom: -10rpx;
					left: 50%;
					transform: translate(-50%, 0);
					width: 66rpx;
					height: 4rpx;
					background: #ED1B2E;
					border-radius: 2rpx;
				}
			}
		}
	}
</style>

<style>
	page {
		background-color: #F5F5F5;
	}
</style>