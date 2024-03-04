<template>
	<view class="suborder">
		<view class="address">
			<view class="d-flex a-center j-sb">
				<view class="name">
					远征观战
				</view>
				<view class="status green-color font">
					进行中
				</view>
			</view>
			<view class="d-flex a-center j-sb">
				<view class="left">
					<view class="d-flex a-center mt-1">
						<image src="@/static/activity/location.png" style="width: 32rpx;height: 32rpx;" class=" mr-1" mode=""></image>
						地址：
						<text class="green-color">济南奥体中心体育场</text>
					</view>
					<view class="d-flex a-center line-h-md font mt-4">
						活动开始时间:：
						<text class="green-color">2023-11-04-15:30 </text>
					</view>
					<view class="d-flex a-center font">
						活动结束时间：
						<text class="green-color">2023-11-04-15:30 </text>
					</view>
				</view>
				<view class="right">
					<image src="" class="main-bg-color rounded-md" style="width: 75rpx;height: 75rpx;" mode=""></image>
					<view class="">
						查看地图
					</view>
				</view>
			</view>
		</view>
		<view class="active">
			<view class="">
				所选活动
			</view>
			<view class="mt-2 d-flex a-center">
				<image src="" style="width: 200rpx;height: 100rpx;" class="bg-danger flex-shrink" mode=""></image>
				<text class="ml-3">
					11月4日I山东泰山VS河南队远征报名
				</text>
			</view>
		</view>
		<view class="ml-5">
			购买须知：
		</view>
		<view class="detail mt-2">
			24小时前随时退、需预约
		</view>
		<view class="detail mt-2">
			为保护未成年人健康成长，未成年用户请得到监护人知悉同意后再进行购买和体验，请勿购买不适合自身年龄段段产品。
		</view>
		
		<view class="bottom">
			<view class="d-flex a-center j-sb row">
				<view>合计：<text class="font32 main-color font-weight">￥50</text></view>
				<view class="button">
					<linxi-button class="button" fontSize="28rpx" lineHeight="58rpx" >确定报名</linxi-button>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.suborder{
		padding: 40rpx 0 100rpx;
		.address{
			margin:0 28rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 0rpx 8rpx 0rpx rgba(101,101,101,0.3);
			border-radius: 16rpx;
			padding: 20rpx 30rpx;
			.name{
				font-weight: 500;
				font-size: 32rpx;
				color: #183D73;
			}
			.left{
				color: #656565;
			}
			.right{
				text-align: center;
				border-left: 4rpx solid #F3F3F3;
				padding:0 10rpx 0 46rpx;
			}
		}
		.active{
			margin:20rpx 28rpx;
			border-radius: 16rpx;
			padding: 28rpx 24rpx;
			box-shadow: 0rpx 0rpx 8rpx 0rpx rgba(101,101,101,0.3);
		}
		.detail{
			font-size: 24rpx;
			color: rgba(144, 144, 144, 1);
			line-height: 36rpx;
			position: relative;
			margin-left: 80rpx;
			&:before {
				content: '';
				display: block;
				position: absolute;
				left: -20rpx;
				top: 15rpx;
				width: 12rpx;
				height: 12rpx;
				border-radius: 50%;
				background-color: rgba(144, 144, 144, 1)
			}
		}
		.bottom{
			box-shadow: 0rpx -2rpx 8rpx 0rpx rgba(167,167,167,0.5);
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			height: 146rpx;
			.row{
				line-height: 108rpx;
				padding: 0 28rpx;
				.button{
					width: 160rpx;
					height: 60rpx;
					border-radius: 30rpx;
					overflow: hidden;
				}
			}
		}
	}
</style>