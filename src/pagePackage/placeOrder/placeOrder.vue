<template>
	<view class="placeOrder">
		<row1 />
		<row2 />
		<row3 />



		<view class="fixedBtm" :style="{zIndex:zIndexNum?999:1}">
			<view class=" d-flex a-center j-end">
				<view class="d-flex a-center">
					<view class=" text-right" v-if="!edit">
						<view class="line-h-sm">
							<text class="gray-color font">不含运费</text>
							<text class="font32">合计:</text>
							<text class="main-color">￥
								<text class="font-md">234.23</text>
							</text>
						</view>
						<view class="font d-flex a-center line-h" @click="shopop">
							<text class="gray-color">共优惠：￥20.0</text>
							<view style="background: #F2F3F5;border-radius: 4rpx;padding: 4rpx 8rpx;margin-left: 8rpx;" class="rounded-md ">
								优惠明细
								<uni-icons type="up" size="16" color="#323233"></uni-icons>
							</view>
						</view>
					</view>
					<view class="btn ml-2" @tap="subOrder">
						提交订单
					</view>
				</view>
			</view>
			<uv-safe-bottom></uv-safe-bottom>
		</view>
		<uv-safe-bottom></uv-safe-bottom>
		<shop-pop ref="popBtm" :totalPrice="totalPrice" v-model:zIndexNum="zIndexNum" />
	</view>
</template>

<script setup>
	import row1 from './components/row1.vue';
	import row2 from './components/row2.vue';
	import row3 from './components/row3.vue';
	import shopPop from './components/shop-pop.vue';

	const zIndexNum = ref(false)

	function subOrder() {
		uni.navigateTo({
			url: "/pagePackage/shop-orderDetail/shop-orderDetail"
		})
	}


	const popBtm = ref()

	function shopop() {
		popBtm.value.showPop()
	}
</script>

<style>
	page {
		background-color: #F2F2F2;
	}
</style>

<style lang="scss" scoped>
	.placeOrder {
		padding-bottom: 120rpx;

		.fixedBtm {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: #fff;
			padding: 20rpx 30rpx;

			.btn {
				width: 148rpx;
				height: 58rpx;
				background: #ED1B2E;
				border-radius: 30rpx;
				color: #FFFFFF;
				line-height: 58rpx;
				text-align: center;
			}
		}
	}
</style>