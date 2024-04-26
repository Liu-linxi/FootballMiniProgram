<template>
	<view class="status">
		<view class="d-flex a-center j-sb font-weight">
			<view class="font-big">
				<text v-if="status==0">待支付</text>
				<text v-if="status==4" style="color: #F23B30;">订单已取消</text>
				<text v-if="status==3" class="gray-color">订单已完成</text>
				<text v-if="status==2">订单配送中</text>
			</view>
			<view class="main-color">
				￥<text class="font-big">123</text>
			</view>
		</view>
		<view class="">
			<view class="d-flex a-center" v-if="status==0">
				剩余时间 <uni-countdown :show-day="false" color="#D81828" splitorColor="#D81828" :second="213" @timeup="queryDetails"></uni-countdown>逾期未支付订单将自动关闭
			</view>
			<view class="gray-color" v-if="status==4">
				本次订单已经取消，如有需要请点击重新报名
			</view>
			<view class="gray-color" v-if="status==3">
				本次订单已完成，如有需要请点击再次购买
			</view>
			<view class="gray-color" v-if="status==2">
				请耐心等待，配送员正在快马加鞭配送中
			</view>
		</view>
	</view>
</template>

<script setup>
	const status = ref(0)

	function queryDetails() {


	}
</script>

<style lang="scss" scoped>
	.status {
		padding: 24rpx 30rpx 8rpx;
	}
</style>