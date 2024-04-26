<template>
	<view class="coupon">
		<uni-popup ref="popup" type="bottom" :safe-area="false">
			<view class="content">
				<view class="bg-white pb-4">
					<view class="font32 font-weight text-center py-5 ">
						优惠券
					</view>
					<view class="grid">
						<view class="item" :class="{actived:active}" @tap="changeHandle(true)">可用优惠券(2)</view>
						<view class="item" :class="{actived:!active}" @tap="changeHandle(false)">不可用优惠券(6)</view>
					</view>
				</view>
				<view class="pb-3 py-2">
					<scroll-view scroll-y="true" style="height: 70vh;">
						<view v-for="(li,index) in listArr" :key="index" class="mx-2 mb-2">
							<view class="cardcou d-flex a-center pt-1" :class="{active:index===listIndex&&active}" @tap="changListIndex(index)">
								<view class="w-100 left pr-4 pl-2">
									<view class="d-flex mt-2">
										<view class="flex-shrink">
											<text class="tags font-sm">
												满减券
											</text>
										</view>
										<text class="font-weight truncate2 line-h-sm">
											部分商品可使用（优惠券名称）
										</text>
									</view>
									<view class="" style="color: #484848;">
										有效期： 2023.06.30-2024.06.30
									</view>
									<view class="d-flex a-center j-sb" style="color: #484848;">
										详细信息
										<image @tap.stop="li.showDeatil=!li.showDeatil" :src="`/static/mall/${li.showDeatil?'up_icon':'down_icon'}.png`" style="width: 30rpx;height: 30rpx;" mode=""></image>
									</view>
								</view>
								<view class="right text-center d-flex flex-column j-center">
									<view class="line-h-sm">
										￥<text style="font-size: 46rpx;">20</text>
									</view>
									<view class="font-sm">
										满100元可用
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

					</scroll-view>
				</view>


				<uv-safe-bottom></uv-safe-bottom>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	const props = defineProps(["preferential", "freight", "type"])
	const active = ref(true);

	const listIndex = ref(-1);
	const listArr = ref([{
			name: "优惠券1",
			showDeatil: false,
		},
		{
			name: "优惠2",
			showDeatil: false,
		}
	])

	const emit = defineEmits(["update:preferential", "update:freight"])


	function changListIndex(index) {
		if (!active.value) return;
		listIndex.value = index;
		if (props.type == 1) emit("update:preferential", listArr.value[index].name)
		if (props.type == 2) emit("update:freight", listArr.value[index].name)
		popup.value.close()
	}


	function changeHandle(bool) {
		if (active.value != bool && listIndex.value != -1) listIndex.value = 0
		active.value = bool
	}
	const popup = ref()

	function showPop() {
		popup.value.open()
	}


	defineExpose({ showPop })
</script>

<style lang="scss" scoped>
	.coupon {

		.content {
			border-radius: 20rpx 20rpx 0 0;
			background-color: #F2F2F2;
			overflow: hidden;

			.grid {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-gap: 20rpx;

				.item {
					font-size: 28rpx;
					color: #323233;
					line-height: 32rpx;
					position: relative;
					text-align: center;

					&.actived {
						font-weight: bold;

						&::after {
							content: '';
							display: block;
							position: absolute;
							bottom: -10rpx;
							left: 50%;
							transform: translate(-50%, 0);
							width: 140rpx;
							height: 6rpx;
							background: #ED1B2E;
						}
					}
				}
			}

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
						background: #2D73FF;
						border-radius: 14rpx;
						color: #fff;
						padding: 4rpx 10rpx;
						margin-right: 10rpx;
					}
				}

				.right {
					width: 200rpx;
					height: 202rpx;
					flex-shrink: 0;
					background: radial-gradient(circle at left top, transparent 12rpx, #2D73FF 0) top left / 100% 51% no-repeat,
						radial-gradient(circle at left bottom, transparent 12rpx, #2D73FF 0) bottom left / 100% 51% no-repeat;
					overflow: hidden;
					color: #fff;
					border-radius: 10rpx;
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
				&::after{
					content: '';
					display: block;
					position: absolute;
					top:0;
					left: 0;
					right: 0;
					height: 23rpx;
					background: linear-gradient(to bottom, rgba(189, 189, 189, 1.0), rgba(189, 189, 189, 0.5));
					box-shadow: 0px 2px 10px 3px rgba(189, 189, 189, 0.5);
					z-index: -2;
				}
			}
		}
	}
</style>