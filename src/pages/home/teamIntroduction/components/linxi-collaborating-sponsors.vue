<template>
	<view class="content main-pink-color d-flex a-center">
		<view class="left main-bg-color">
			<view class="title pr-1">
				合作
			</view>
			<view class="title">
				赞助商
			</view>
		</view>
		<view class="right pt-1">
			<scroll-view :scroll-x="true" class="text-nowrap w-100">
				<image v-for="li in 15" :key="li" src="" class="img main-bg-color" mode="widthFix"></image>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.content {
		margin-top: 20px;

		.left {
			width: 160rpx;
			height: 138rpx;
			flex-shrink: 0;
			-webkit-clip-path: polygon(0 0, 80% 1%, 100% 100%, 0% 100%);
			clip-path: polygon(0 0, 80% 1%, 100% 100%, 0% 100%);
			text-align: center;

			.title {
				line-height: 69rpx;
				letter-spacing: 4rpx;
				font-size: 36rpx;
				font-weight: bold;
				color: #FFFFFF;
			}

		}

		.right {
			width: 550rpx;
			.img {
				width: 112rpx;
				height: 112rpx;
				display: inline-block;
				margin-left: 14rpx;
				border-radius: 2rpx;
				// flex-shrink: 0;
			}

		}
	}
</style>