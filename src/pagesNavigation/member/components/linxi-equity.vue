<template>
	<view class="equity">
		<swiper class="" circular :autoplay="false" style="height: 1400rpx;" @change="swiperChange" :current="swiperIndex">
			<swiper-item v-for="(item,index) in 3" :key="index">
				<view class="d-flex j-sa name">
					<view class="d-flex a-center">
						<view class="left"></view>
						专属核心权益
						<view class="right"></view>
					</view>
				</view>
				<view class="grid">
					<view class="text-center" v-for="li in 10">
						<image src="" style="width: 72rpx;height: 72rpx;" class="main-bg-color" mode=""></image>
						<view class="font text-nowrap">
							商城8.5折
						</view>
					</view>
				</view>
				<view class="btminfo">
					<view class="row1">
						<view class="d-flex a-center ">
							<view class="tags font mr-2">
								特权1
							</view>
							优惠领不停
						</view>
						<view class="d-flex a-center px-2">
							<view class="d-flex a-center mr-1 mt-3 mb-1 mr-3" v-for="li in 2">
								<image src="" style="width: 90rpx;height: 90rpx;margin: 0 auto;" class="rounded-circle main-bg-color" mode=""></image>
								<view class="ml-1">
									<view class="ticname">
										洗车优惠券(1)
									</view>
									<view class="ticsubname">
										开通会员可得
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="row2">
						<view class="d-flex a-center mb-2">
							<view class="tags font mr-2">
								特权2
							</view>
							权益享不停
						</view>
						<view class="detail d-flex" v-for="li in 4">
							<view class="left">
								特殊权益：
							</view>
							<view class="right">
								度感恩礼包优先内购权，媒体采访，球迷出镜。
							</view>
						</view>
					</view>
				</view>
				<view class="btnbg">
					<view class="btn d-flex a-center" @tap="showpop">
						<view class="left">
							原价￥158
						</view>
						<view class="right font-weight text-white d-flex j-sa">
							<view class="d-flex a-center font-md">
								￥ <view class="font-big mx-1">128</view> 立即入会
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<linxi-popup-abandon ref="abandon"/>
		<linxi-popup-discount ref="discount"/>
		<linxi-popup-parenting ref="parenting"/>
	</view>
</template>

<script setup>
	import linxiPopupAbandon from './linxi-popup-abandon.vue';
	import linxiPopupDiscount from './linxi-popup-discount.vue';
	import linxiPopupParenting from './linxi-popup-parenting.vue';
	const props = defineProps(["swiperIndex"])
	const emit = defineEmits(["swiperChange"])
	const abandon = ref();
	const discount = ref();
	const parenting = ref();
	
	function showpop(){
		// abandon.value.showpop()
		// discount.value.showpop()
		parenting.value.showpop()
	}
	
	function swiperChange(e) {
		emit("swiperChange", e)
	}
</script>

<style lang="scss" scoped>

	.equity {
		.name {
			font-size: 32rpx;
			color: #333333;
			line-height: 40rpx;

			.left {
				width: 46rpx;
				height: 4rpx;
				background: linear-gradient(90deg, #FFFFFF 0%, #F9E5C2 100%);
				margin-right: 16rpx;
			}

			.right {
				width: 46rpx;
				height: 4rpx;
				background: linear-gradient(90deg, #F9E5C2 0%, #FFFFFF 100%);
				margin-left: 16rpx;
			}
		}

		.grid {
			margin-top: 48rpx;
			padding: 0 40rpx;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-gap: 40rpx;
		}

		.btminfo {
			margin-top: 40rpx;
			background: #F5F5F5;
			padding: 20rpx 30rpx;

			.tags {
				width: 68rpx;
				line-height: 36rpx;
				background: #1C1E2D;
				border-radius: 4rpx;
				color: #F9E5C1;
				text-align: center;
			}

			.row1 {
				padding: 16rpx 20rpx;
				background-color: #FFFFFF;
				border-radius: 6rpx;

				.ticname {
					color: #333333;
					font-size: 26rpx;
				}

				.ticsubname {
					color: #999999;
					line-height: 34rpx;
					font-size: 22rpx;
				}
			}

			.row2 {
				padding: 16rpx 20rpx;
				background-color: #FFFFFF;
				margin-top: 24rpx;
				border-radius: 6rpx;

				.detail {
					.left {
						font-size: 24rpx;
						color: #E52119;
						line-height: 36rpx;
						position: relative;
						margin-left: 30rpx;
						white-space: nowrap;

						&:before {
							content: '';
							display: block;
							position: absolute;
							left: -20rpx;
							top: 15rpx;
							width: 10rpx;
							height: 10rpx;
							border-radius: 50%;
							background-color: #E52119;
						}
					}

					.right {
						font-weight: 400;
						font-size: 24rpx;
						color: #999999;
						line-height: 36rpx;
					}
				}
			}
		}

		.btnbg {
			padding: 20rpx 0 40rpx;
			background: #F5F5F5;

			.btn {
				height: 100rpx;
				background: #FEDDA4;
				margin: 0 30rpx;
				border-radius: 50rpx;
				overflow: hidden;

				.left {
					flex-shrink: 0;
					text-decoration: line-through;
					color: #E0AA7B;
					padding: 0 68rpx;
				}

				.right {
					flex: auto;
					line-height: 100rpx;
					background-color: #E52119;
					-webkit-clip-path: polygon(5% 0%, 100% 0, 100% 100%, 0% 100%);
					clip-path: polygon(5% 0%, 100% 0, 100% 100%, 0% 100%);
					text-align: center;
				}
			}
		}
	}
	
</style>