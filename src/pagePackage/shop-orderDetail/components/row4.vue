<template>
	<view class="row4">
		<view class="font-weight">
			订单信息
		</view>
		<view class="d-flex a-center j-sb py-1">
			<view class="gray-color">订单编号</view>
			<view>26562652623266</view>
		</view>
		<view class="d-flex a-center j-sb py-1">
			<view class="gray-color">下单时间</view>
			<view>26562652623266</view>
		</view>
		<view class="d-flex a-center j-sb py-1">
			<view class="gray-color d-flex a-center">
				配送费
				<uni-icons type="help" size="18" color="#8A8A8A" class="ml-1"></uni-icons>
			</view>
			<view>￥5</view>
		</view>
		<view class="d-flex a-center j-sb py-1">
			<view class="gray-color">
				备注
			</view>
			<view class=" d-flex a-center" @tap="showPop">
				{{remarks||"无接触配送"}}
				<uni-icons type="right" size="18" color="#8A8A8A" class="ml-1"></uni-icons>
			</view>
		</view>
		<view class="d-flex a-center j-sb py-1">
			<view class="gray-color">
				优惠券
			</view>
			<view class=" d-flex a-center">
				暂无可用
				<uni-icons type="right" size="18" color="#8A8A8A" class="ml-1"></uni-icons>
			</view>
		</view>
		<view class="d-flex a-center j-sb py-1">
			<view class="gray-color">
				运费券
			</view>
			<view class=" d-flex a-center">
				暂无可用
				<uni-icons type="right" size="18" color="#8A8A8A" class="ml-1"></uni-icons>
			</view>
		</view>
		
		<uni-popup ref="inputDialog" type="dialog">
			<uni-popup-dialog ref="inputClose" mode="input" title="输入备注" v-model="remarks" placeholder="请输入内容" @confirm="dialogInputConfirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script setup>
	const props = defineProps([""])

	const remarks = ref("")

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
	.row4 {
		margin: 20rpx 28rpx;
		background-color: #fff;
		border-radius: 10rpx;
		padding: 32rpx 30rpx 20rpx;
	}
</style>