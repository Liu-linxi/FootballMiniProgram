<template>
	<view class="panelRow">
		<image src="" style="height: 700rpx;" class="main-bg-color" mode=""></image>
		<view class="name border_btm">
			<view class="main-color">
				￥ <text class="font-lg font-weight">49</text>
			</view>
			<view class="font32">
				嵩山龙门战队马克杯
			</view>
			<view class="d-flex a-center j-sb mt-2">
				<view class="d-flex a-center text-nowrap">
					<view v-for="(item,index) in 3" class="item mr-2 text-nowrap" :key="index">
						满200减10元活动
					</view>
				</view>
				<uni-icons type="right" size="18" color="#969798"></uni-icons>
			</view>


		</view>
		<view class="row gray padd border_btm">
			<view class=" span-10">
				运费 <text style="color: #323233;" class="ml-2">免运费</text>
			</view>
			<view class=" span-10 text-right">
				已售 150 | 剩余 200
			</view>
		</view>
		<view class="gray padd border_btm">
			服务 <text style="color: #323233;" class="ml-2">快递发货 · 快递发货 · 快递发货</text>
		</view>
		<view class="row gray padd border_btm" @click="showPop">
			<view class="span-10">
				选择 <text style="color: #323233;" class="ml-2">尺寸</text>
			</view>
			<view class="span-10 text-right">
				<!-- <text>{{sku}}</text> -->
				<uni-icons type="right" size="16" color="#7F7F7F"></uni-icons>
			</view>
		</view>
		<view class="padd border_btm" style="padding-bottom: 0;">
			<view class="row">
				<view class="span-10">
					商品评价 (18)
				</view>
				<view class="span-10 text-right">
					<text class="font gray-color" style="vertical-align: middle">好评率 ：100%</text>
					<uni-icons type="right" size="16" color="#7F7F7F" style="vertical-align: middle"></uni-icons>
				</view>
			</view>
			<view class="tags mt-2">
				<text v-for="li in tags" class="tag" :key="li">{{li}}</text>
			</view>
			<view class=" mt-2 py-3 border-bottom" v-for="li in 2" :key="li">
				<view class="d-flex a-center j-sb">
					<view class="gray-color row a-center">
						<image src="" style="width: 60rpx;height: 60rpx;" class="rounded-circle main-bg-color mr-2" mode=""></image>
						萨**撒
					</view>
					<view class="text-right">
						<uni-rate :value="5" :size="14" style="vertical-align: middle" />
					</view>
				</view>
				<text class="mt-1">透气性好，色泽纯正，体感舒适</text>
			</view>
		</view>
		<view class="bg-white py-3">
			<uv-divider text="商品说明" textColor="#242424"></uv-divider>
			<view class="mx-3 rounded-md mt-2 p-2" style="background-color: #F7F8FA;">
				<view class="gray-color">
					<text class="text-dark">划线价格: </text> 是商品的专柜价、吊牌价、正品零售价、指导价曾经展示过的销售价等，并非原价，仅供参考。
				</view>
				<view class="gray-color">
					<text class="text-dark">未划线价格: </text> 是商品的实时价格，不会因具体表述形式的差异改变性质。具体成交价格会因商品参加促销活动，优惠券、积分抵扣等情形发生变化，最终以订单结算页面展示的价格为准。
				</view>
			</view>
		</view>
		<specifications ref="specifRef" v-model:sku="sku" />
	</view>
</template>

<script setup>
	import specifications from './specifications.vue';
	const props = defineProps([""])
	const tags = ref(["透气性好", "色泽纯正", "体感舒适", "简约百搭"])
	const sku = ref("")

	const specifRef = ref()

	function showPop() {
		specifRef.value.showPopup()
	}
	defineExpose({})
</script>

<style lang="scss" scoped>
	.panelRow {
		.border_btm {
			border-bottom: 16rpx solid rgba(247, 248, 251, 1);

			.item {
				border-radius: 4rpx;
				border: 1rpx solid #FF6F2D;
				font-size: 24rpx;
				color: #FF6F2D;
				line-height: 32rpx;
				padding: 4rpx 6rpx;
				text-wrap: nowrap !important;
			}
		}

		// background-color: rgba(247, 248, 251, 1);
		.name {
			padding: 30rpx 42rpx 30rpx;
		}

		.gray {
			color: #7F7F7F;
		}

		.padd {
			padding: 24rpx 28rpx;
		}

		.tag {
			background-color: #F2F3F5;
			border-radius: 30rpx;
			padding: 10rpx 20rpx;
			margin-right: 20rpx;
		}

		.text-dark {
			color: #000;
		}
	}
</style>