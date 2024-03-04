<template>
	<view class="block">
		<view class="d-flex a-center main-pink-color" v-for="li in 3" :key="li" @tap="toActiveDetail">
			<image src="" style="width:240rpx;height: 200rpx;" class="main-bg-color flex-shrink"></image>
			<view class="right ml-4">
				<view class="title">
					远征报名
				</view>
				<view class="secTitle">
					11月4日，山东泰山V
				</view>
				<view class="smlTitle d-flex a-center j-sb">
					<view>报名20/50</view> 
					<view class="mr-2">
						<text class="gray-color" v-show="li==1">已截止</text>
						<text class="main-color" v-show="li==2">未开始</text>
						<text class="green-color" v-show="li==3">进行中</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const emit = defineEmits(['toActiveDetail'])
	function toActiveDetail(){
		emit("toActiveDetail")
	}
</script>

<style lang="scss" scoped>
	.block{
		margin: 24rpx 0 40rpx;
		.d-flex{
			margin-top: 14rpx;
			.right{
				width: 100%;
				.title{
					font-size: 32rpx;
					color: #171717;
					font-weight: 500;
				}
				.secTitle{
					font-weight: 400;
					color: #292929;
				}
				.smlTitle{
					font-size: 24rpx;
					font-weight: 400;
					color: #8A8A8A;
				}
			}
		}
	}
</style>