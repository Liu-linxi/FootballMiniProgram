<template>
	<view class="status">
		<view class="d-flex a-center j-sb font-weight">
			<view class="font-big">
				<text v-if="statu==0">待支付</text>
				<text v-if="statu==1" style="color: #F23B30;">订单已取消</text>
				<text v-if="statu==2" class="gray-color">订单已完成</text>
				<text v-if="statu==3">进行中</text>
			</view>
			<view class="main-color">
				￥<text class="font-big">50.00</text>
			</view>
		</view>
		<view class="">
			<view class="d-flex a-center" v-if="statu==0">
				剩余时间  <uni-countdown :show-day="false" color="#E52119" splitorColor="#E52119" :second="4000"></uni-countdown>逾期未支付订单将自动关闭
			</view>
			<view class="gray-color" v-if="statu==1">
				本次订单已经取消，如有需要请点击重新报名
			</view>
			<view class="gray-color" v-if="statu==2">
				本次活动已结束，注意之后活动时间。
			</view>
			<view class="gray-color" v-if="statu==3">
				请合理安排时间，及时参加活动。
			</view>
		</view>
	</view>
</template>

<script setup>
	const props=defineProps(["statu"])
</script>

<style lang="scss" scoped>
	.status{
		
	}
</style>