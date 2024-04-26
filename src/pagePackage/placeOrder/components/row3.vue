<template>
	<view class="row3">
		<view class="">
			<view class="d-flex a-center j-sb py-1">
				<view class="font32">
					配送费
				</view>
				<view class="">
					￥5
				</view>
			</view>
			<view class="d-flex a-center j-sb py-1">
				<view class="font32">
					备注
				</view>
				<view class="gray-color d-flex a-center" @tap="showPop">
					{{remarks||"无接触配送"}}<uni-icons type="right" color="#AEAEAE" size="18" class="flex-shrink ml-1"></uni-icons>
				</view>
			</view>
			<view class="d-flex a-center j-sb py-1">
				<view class="font32">
					优惠券
				</view>
				<view class="gray-color d-flex a-center" @tap="showCoupon(1)">
					<view class="btn mr-1">
						{{preferential||"未选择优惠券"}}
					</view>
					<uni-icons type="right" color="#AEAEAE" size="18" class="flex-shrink"></uni-icons>
				</view>
			</view>
			<view class="d-flex a-center j-sb py-1">
				<view class="font32">
					运费券
				</view>
				<view class="gray-color d-flex a-center" @tap="showCoupon(2)">
					{{freight||"暂无可用"}}
					<uni-icons type="right" color="#AEAEAE" size="18" class="flex-shrink ml-1"></uni-icons>
				</view>
			</view>
		</view>

		<uni-popup ref="inputDialog" type="dialog">
			<uni-popup-dialog ref="inputClose" mode="input" title="输入备注" v-model="remarks" placeholder="请输入内容" @confirm="dialogInputConfirm"></uni-popup-dialog>
		</uni-popup>


		<coupon ref="coupons" v-model:preferential="preferential" v-model:freight="freight" :type="type" />
	</view>
</template>

<script setup>
	const props = defineProps([""])

	const remarks = ref("")
	const type = ref(1)
	const preferential = ref("");
	const freight = ref("")


	const coupons = ref()

	function showCoupon(num) {
		type.value = num
		coupons.value.showPop();
	}
	const inputDialog = ref()

	function showPop() {
		inputDialog.value.open()
	}

	function dialogInputConfirm(value) {
		remarks.value = value
		console.log(value)
	}
	defineExpose({})
</script>

<style lang="scss" scoped>
	.row3 {
		background-color: #FFF;
		margin: 28rpx;
		padding: 5rpx 24rpx;

		.btn {
			background: #ED1B2E;
			border-radius: 30rpx;
			color: #FFFFFF;
			line-height: 58rpx;
			text-align: center;
			line-height: 1;
			padding: 8rpx 20rpx;
		}
	}
</style>