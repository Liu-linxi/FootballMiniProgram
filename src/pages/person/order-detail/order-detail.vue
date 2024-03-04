<template>
	<view class="detail">
		<status statu="0" />
		<order-panel />
		<application-panel name="报名信息" :panelList="panelList1" />
		
		<qrcode-panel/>
		<application-panel name="订单信息" :panelList="panelList2" />
		<view class="bottom">
			<view class="d-flex a-center j-sb row">
				<view>合计：<text class="font32 main-color font-weight">￥50</text></view>
				<view class="button">
					<linxi-button class="button" fontSize="28rpx" lineHeight="58rpx">确定报名</linxi-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import status from './components/status.vue';
	import orderPanel from './components/order-panel.vue';
	import applicationPanel from './components/application-panel.vue';
	import qrcodePanel from "./components/qrcode-panel.vue";
	const panelList1 = ref([
		{ name: "姓名", value: "王凯旋" },
		{ name: "联系方式", value: "15093766726" },
		{ name: "活动地址", value: "济南奥体中心体育场" }
	])
	const panelList2 = ref([
		{ name: "订单编号", value: "26562652623266" },
		{ name: "下单时间", value: "26562652623266" },
		{ name: "备注", value: "" }
	])



	onLoad(({ type = 1 }) => {
		if (type == 2) {
			nextTick(() => {
				uni.setNavigationBarTitle({
					title: '已完成订单'
				});
			})
		}
	})
</script>

<style lang="scss" scoped>
	.detail {
		padding: 24rpx 30rpx 196rpx;

	}

	.bottom {
		background-color: #FFFFFF;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 146rpx;

		.row {
			line-height: 108rpx;
			padding: 0 28rpx;

			.button {
				width: 160rpx;
				height: 60rpx;
				border-radius: 30rpx;
				overflow: hidden;
			}
		}
	}
</style>
<style>
	page {
		background: #F2F2F2;
	}
</style>