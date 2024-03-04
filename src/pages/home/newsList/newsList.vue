<template>
	<view class="block">
		<view class="d-flex a-center main-pink-color" v-for="li in 3" :key="li" @tap="todetail">
			<image src="" style="width:240rpx;height: 200rpx;" class="main-bg-color"></image>
			<view class="right ml-4">
				<view class="title">
					少年球员招募公告
				</view>
				<view class="secTitle">
					豫盟启航|河南去求俱乐部青
				</view>
				<view class="smlTitle">
					<text style="width: 100rpx;">阅读：35</text> 01-30 12:21
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	function todetail(){
		uni.navigateTo({
			url:"/pages/home/newsDetail/newsDetail"
		})
	}
</script>

<style lang="scss" scoped>
	.block{
		padding:  20rpx;
		.d-flex{
			margin-top: 14rpx;
			.right{
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