<template>
	<view class="coupon">
		<view v-for="(li,index) in listArr" :key="index" class="mx-2 mb-1" :class="[colors]">
			<view class="cardcou d-flex a-center pt-1">
				<view class="w-100 left pr-4 pl-2 position-relative">
					<view class="d-flex mt-2  a-start">
						<view class="flex-shrink tags" >
							满减券
						</view>
						<text class="font-weight truncate2 line-h-sm">
							部分商品可使用（优惠券名称）
						</text>
					</view>
					<view class="font-sm mt-1" style="color: #484848;">
						有效期： 2023.06.30-2024.06.30
					</view>
					<view class="d-flex font-sm a-center mt-1 j-sb" style="color: #484848;">
						详细信息
						<image @tap.stop="li.showDeatil=!li.showDeatil" :src="`/static/mall/${li.showDeatil?'up_icon':'down_icon'}.png`" style="width: 30rpx;height: 30rpx;" mode=""></image>
					</view>
					<image v-if="colors=='gray'" src="/static/mall/ling_out.png" class="right_out" mode=""></image>
				</view>
				<view class="right text-center d-flex flex-column j-center position-relative">
					<view class="line-h-sm">
						￥<text style="font-size: 46rpx;" class="font-weight">20</text>
					</view>
					<view class="font-sm">
						满100元可用
					</view>
					<view class="routeTags" v-if="colors=='red'||colors=='gray'">
						无门槛
					</view>
					<view class="d-flex a-center j-sa row_btn">
						<image v-if="false" src="/static/mall/ling.png" style="width: 72rpx;height: 62rpx;" class="position-absolute left-0 top-0" mode=""></image>
						<view class="btn1" v-if="false">
							立即领取
						</view>
						<view class="btn2 ml-1"  v-if="false">
							继续领
						</view>
						<view class="btn3 mr-1" v-if="false">
							使用
						</view>
						<view class="btn4" @tap="toShopBuy">
							立即使用
						</view>
					</view>
				</view>
			</view>
			<view class="font-sm details" v-if="li.showDeatil" style="color: #C0C0C0;">
				<view class=" mt-2">
					限商品： 周边产品 球队上衣
				</view>
				<view class="">
					适用用户: 大学生会员 亲子会员
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps([""])

	const colors = ref("green")

	const listArr = ref([{
			name: "优惠券1",
			showDeatil: false,
		},
		{
			name: "优惠2",
			showDeatil: false,
		}
	])



	function toShopBuy(){
		uni.navigateTo({
			url:"/pagePackage/coupon-shop/coupon-shop"
		})
	}
	
	const emit = defineEmits([""])
	
	defineExpose({})
</script>

<style lang="scss" scoped>
	.coupon {
		.cardcou {
			height: 202rpx;
			border-radius: 10rpx;
			overflow: hidden;

			&.active {
				filter: drop-shadow(0 0 6rpx #2D73FF);
			}

			.left {
				height: 202rpx;
				background: radial-gradient(circle at right top, transparent 12rpx, #ffffff 0) top left / 100% 51% no-repeat,
					radial-gradient(circle at right bottom, transparent 12rpx, #ffffff 0) bottom left / 100% 51% no-repeat;
				border-radius: 10rpx;
				.tags {
					line-height: 1;
					border-radius: 18rpx;
					color: #fff;
					padding: 4rpx 16rpx;
					margin-right: 10rpx;
					font-size: 20rpx;
				}
				.right_out{
					width: 120rpx;
					height: 102rpx;
					position: absolute;
					top: 50rpx;
					right:-20rpx;
					z-index: 2;
				}
			}

			.right {
				width: 200rpx;
				height: 202rpx;
				flex-shrink: 0;

				overflow: hidden;
				color: #fff;
				border-radius: 10rpx;

				.routeTags {
					font-size: 20rpx;
					color: #FFFFFF;
					position: absolute;
					right: -28rpx;
					top: 15rpx;
					background-color: #F78C17;
					width: 120rpx;
					text-align: center;
					transform: rotate(45deg);
				}
				.row_btn{
					font-size: 20rpx;
					line-height: 1;
					margin-top: 10rpx;
					.btn1,.btn2,.btn4{
							padding: 8rpx 16rpx;
							color: #FFFFFF;
							background-color: #ED1B2E;
							border-radius: 20rpx;
					}
					.btn3{
						padding: 8rpx 12rpx;
						background: #FDC9B4;
						color: #ED1B2E;
						border-radius: 20rpx;
					}
				}
				
			}
		}

		.details {
			// box-shadow: inset 0 10px 10px rgba(189, 189, 189, 1.0);
			background-color: #fff;
			border-radius: 0 0 10rpx 10rpx;
			padding: 20rpx;
			margin-top: -20rpx;
			position: relative;
			z-index: -1;

			&::after {
				content: '';
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				height: 23rpx;
				background: linear-gradient(to bottom, rgba(189, 189, 189, 1.0), rgba(189, 189, 189, 0.5));
				box-shadow: 0px 2px 10px 3px rgba(189, 189, 189, 0.5);
				z-index: -2;
			}
		}

		.blue {
			.tags {
				background: #2D73FF;
			}

			.right {
				background: radial-gradient(circle at left top, transparent 12rpx, #2D73FF 0) top left / 100% 51% no-repeat,
					radial-gradient(circle at left bottom, transparent 12rpx, #2D73FF 0) bottom left / 100% 51% no-repeat;
					.btn4{
						color: #2D73FF !important;
						background-color: #fff !important;
					}
			}
		}

		.gray {
			.tags {
				background: #C3C3C3;
			}

			.right {
				background: radial-gradient(circle at left top, transparent 12rpx, #C2C2C2 0) top left / 100% 51% no-repeat,
					radial-gradient(circle at left bottom, transparent 12rpx, #C2C2C2 0) bottom left / 100% 51% no-repeat;
					.routeTags{
						background-color: #818181;
					}
			}
			
		}

		.red {
			.tags {
				background: #ED1B2E;
			}

			.right {
				color: #ED1B2E;
				background: radial-gradient(circle at left top, transparent 12rpx, #FFF4E8 0) top left / 100% 51% no-repeat,
					radial-gradient(circle at left bottom, transparent 12rpx, #FFF4E8 0) bottom left / 100% 51% no-repeat;
				&::after{
					content: '';
					display: block;
					position: absolute;
					left: 0;
					top: 12rpx;
					bottom: 12rpx;
					border: 1rpx dashed #FEB97E
				}
			}
		}
		.redMy {
			.tags {
				background: #ED1B2E;
			}
		
			.right {
				background: radial-gradient(circle at left top, transparent 12rpx, #ED1B2E 0) top left / 100% 51% no-repeat,
					radial-gradient(circle at left bottom, transparent 12rpx, #ED1B2E 0) bottom left / 100% 51% no-repeat;
					.btn4{
						color: #ED1B2E !important;
						background-color: #fff !important;
					}
			}
			
		}
		.green {
			.tags {
				background: #009057;
			}
		
			.right {
				background: radial-gradient(circle at left top, transparent 12rpx, #009057 0) top left / 100% 51% no-repeat,
					radial-gradient(circle at left bottom, transparent 12rpx, #009057 0) bottom left / 100% 51% no-repeat;
					.btn4{
						color: #009057 !important;
						background-color: #fff !important;
					}
			}
			
		}
	}
</style>