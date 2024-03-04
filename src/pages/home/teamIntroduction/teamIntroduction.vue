<template>
	<view class="content">
		<view class="d-flex a-center mb-3">
			<view class="gray-color ml-5" :class="{choose:cateIndex===index}" v-for="(item,index) in cateArr" :key="item" @tap="cateIndex=index">
				{{item}}
			</view>
		</view>
		<view class="" v-for="(item,index) in 3" :key="index">
			<view class="title">
				{{item}}
			</view>
			<linxi-divider />
			<view class="grid">
				<view class="grid-item" v-for="(items,ind) in item" :key="ind">
					<image src="" class="img main-pink-color" mode=""></image>
					<view class="bottomshow">
						保罗 迪巴拉
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const cateArr = ref(["现役球员", "女性球员", "青训球员"])
	const cateIndex = ref(0);
</script>

<style lang="scss" scoped>
	.content {
		padding: 20rpx;

		.choose {
			color: #333333;
			position: relative;
			&:after{
				position: absolute;
				bottom: 0;
				left: 28rpx;
				content: '';
				width: 66rpx;
				height: 4rpx;
				background: #E52119;
				border-radius: 2rpx;
			}
			
		}

		.grid {
			margin: 24rpx 0;
			display: grid;
			grid-template-columns: 334rpx 334rpx;
			grid-gap: 24rpx;

			.grid-item {
				width: 334rpx;
				height: 340rpx;
				position: relative;
				border-radius: 8rpx;
				overflow: hidden;

				.img {
					width: 334rpx;
					height: 340rpx;
				}

				.bottomshow {
					width: 334rpx;
					height: 62rpx;
					background: #E52119;
					border-radius: 0rpx 4rpx 0rpx 0rpx;
					position: absolute;
					bottom: 0;
					text-align: center;
					line-height: 62rpx;
					color: #FFFFFF;
				}
			}
		}
	}
</style>