<template>
	<view class="integral">
		<view class="top">
			<view class="sticty main-color" @tap="showDetail=!showDetail">
				积分明细
			</view>
			<view class="center">
				<view class="num">
					2899
				</view>
				<view class="">
					我的积分
				</view>
			</view>
		</view>
		<template v-if="showDetail">
			<view class="panel">
				<view class="font-weight">
					每日任务
				</view>
				<view class="d-flex a-center j-sb mt-3" v-for="li in listArr" :key="li.name">
					<view class="d-flex a-center">
						<image src="" style="width: 80rpx;height: 80rpx;" class="main-bg-color rounded-circle mr-2" mode=""></image>
						<view class="">
							{{li.name}}
							<view class="gray-color font d-flex a-center">
								<img src="" style="width: 24rpx;height: 24rpx;" class="main-bg-color mr-1" alt="" />
								{{li.num}}积分
							</view>
						</view>
					</view>
					<view class="btn" :class="{complete:!li.complete}">
						{{li.complete?'已完成':'去完成'}}
					</view>
				</view>
			</view>
			<view class="exchange">
				<view class="font-weight">
					积分兑换
				</view>
			</view>
		</template>
		<template v-else>
			<view class="panel">
				<view class="font32 font-weight text-center ">
					<text class="detail">积分明细</text>
				</view>
				<view class="d-flex a-center j-sb border-bottom py-3" v-for="li in 3">
					<view>
						<view class="">
							远征活动打卡
						</view>
						<view class="gray-color">
							2023.07.11 20:55:45
						</view>
					</view>
					<view class="text-warning font32">
						+100
					</view>
				</view>
				<view class="text-center gray-color mt-2 font">
					没有更多啦
				</view>
			</view>
		</template>
	</view>
</template>

<script setup>
	const listArr = ref([
		{ name: "活动打卡", icon: "", num: 100, complete: false },
		{ name: "会员注册", icon: "", num: 200, complete: false },
		{ name: "分享活动", icon: "", num: 100, complete: true }
	])
	const showDetail = ref(true)
</script>

<style lang="scss" scoped>
	.integral {
		.top {
			position: relative;
			background: linear-gradient(180deg, #E52119 0%, #E52119 77%, rgba(229, 33, 25, 0) 100%);
			height: 412rpx;

			.sticty {
				position: absolute;
				top: 52rpx;
				left: 0;
				border-radius: 0 32rpx 32rpx 0;
				text-align: center;
				width: 176rpx;
				line-height: 64rpx;
				background: #FFFFFF;
			}

			.center {
				padding-top: 38rpx;
				text-align: center;
				color: #FFFFFF;

				.num {
					font-size: 60rpx;
					line-height: 90rpx;
				}
			}
		}

		.panel {
			position: relative;
			margin: -200rpx 32rpx 0;
			padding: 32rpx 24rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;

			.btn {
				width: 136rpx;
				line-height: 52rpx;
				background-color: #F1F1F1;
				text-align: center;
				border-radius: 26rpx;
				color: #999999;

				&.complete {
					background: linear-gradient(317deg, #FFA132 0%, #FFC636 100%, #FFC021 100%);
					color: #FFFFFF;
				}
			}
			.detail{
				position: relative;
				&:after{
					position: absolute;
					content: '';
					width: 18rpx;
					height: 18rpx;
					background: linear-gradient( 299deg, #D9ECFF 0%, rgba(118,185,255,0) 100%);
					right:-30rpx;
					top:13rpx;
					border-radius: 50%;
				}
				&:before{
					position: absolute;
					content: '';
					width: 18rpx;
					height: 18rpx;
					background: linear-gradient( 299deg, #D9ECFF 0%, rgba(118,185,255,0) 100%);
					left:-30rpx;
					top:13rpx;
					border-radius: 50%;
				}
			}
		}

		.exchange {
			border-radius: 20rpx;
			padding: 32rpx 24rpx;
			margin: 32rpx;
			width: 638rpx;
			height: 406rpx;
			background: #F7F7F7;
		}
	}
</style>