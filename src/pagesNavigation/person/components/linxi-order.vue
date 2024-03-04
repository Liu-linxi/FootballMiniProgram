<template>
	<view class="order mt-2" style="background-image: url('/static/person/bgtag2.png');">
		<view class="d-flex a-center j-sb px-4 top">
			<view class="left">
				普通用户
			</view>
			<view class="right">
				<view class="detail" v-if="type==0">
					了解详情>
				</view>
				<view class="detail" v-if="type==1">
					2021-12-32 到期
					<text class="ml-3">续费></text>
				</view>
			</view>
		</view>
		<view class="d-flex a-center j-sb middle px-4">
			<view class="font34">
				我的订单
			</view>
			<view class="font gray-color">
				全部订单 >
			</view>
		</view>
		<view class="btm px-4 d-flex a-center j-sb">
			<view class="left w-50 d-flex a-center" @tap="toorder('/pages/person/order-list/order-list?type=1')">
				<image src="@/static/person/icon1.png" class="mr-2" style="width: 64rpx;height: 64rpx;" mode=""></image>
				未完成订单
			</view>
			<view class="right w-50 d-flex a-center border-left"  @tap="toorder('/pages/person/order-list/order-list?type=2')">
				<image src="@/static/person/icon2.png" class="mr-2 ml-5" style="width: 64rpx;height: 64rpx;" mode=""></image>
				已完成订单
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps(["type"])
	
	function toorder(url){
		uni.navigateTo({url})
	}
</script>

<style lang="scss" scoped>
	.order{
		box-shadow: 0rpx 0rpx 12rpx 3rpx rgba(226,226,226,1);
		border-radius: 10rpx;
		padding-bottom: 40rpx;
		// background-image: url("/static/person/bgtag2.png");
		background-repeat: no-repeat;
		background-size: 100%;
		.top{
			height: 100rpx;
			// background: #D7D7D7;
			.left{
				font-weight: 500;
				font-size: 38rpx;
				color: #6F6F6F;
				line-height: 58rpx;
			}
			.right{
				.detail{
					font-size: 24rpx;
					color: #6F6F6F;
					line-height: 36rpx;
				}
			}
		}
		.middle{
			margin-top: 40rpx;
		}
		.btm{
			margin-top: 40rpx;
			
		}
		
	}
</style>