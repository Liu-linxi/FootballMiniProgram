<template>
	<view class="cart">
		<view class="bg-white d-flex a-center j-sb p-2 px-3">
			<view class="gray-color">
				<image src="" style="width: 25rpx;height: 25rpx;" class="main-bg-color" mode=""></image>
				共3件商品
			</view>
			<view class="" @tap="edit=!edit">
				{{edit?"完成":"编辑"}}
			</view>
		</view>
		<view class="m-3">
			<view v-for="(li,index) in cartArr" :key="li.id" class="bg-white shop">
				<view class="mr-1" @tap="selShop(li, index)">
					<radio :checked="li.checked" color="#D81828" style="transform:scale(0.9);" />
				</view>
				<view class="d-flex a-center w-100">
					<image src="" style="width: 200rpx;height: 200rpx;" class="flex-shrink main-bg-color rounded-md" mode=""></image>
					<view class="ml-2 d-flex flex-column j-sb w-100" style="height: 200rpx;">
						<view class="truncate2" style="font-size: 30rpx;">
							{{li.name}}
						</view>
						<view class="d-flex a-center j-sb w-100">
							<picker @change="bindPickerChange(li,'sku',$event)" :value="li.sku" :range="skuArr">
								<view class="d-flex a-center j-sb selected-area">
									{{skuArr[li.sku]}}
									<uni-icons type="down" size="12" color="#999999"></uni-icons>
								</view>
							</picker>
							<picker @change="bindPickerChange(li,'active',$event)" :value="li.active" :range="activeArr">
								<view class="d-flex a-center j-sb reight-selected-area">
									{{activeArr[li.active]}}
									<uni-icons type="down" size="12" color="#FF6F2D"></uni-icons>
								</view>
							</picker>
						</view>
						<!-- <view class="d-flex a-center j-sb">
							<view class="main-color">
								￥<text class="font-md">{{li.nowPrice}}</text>
								<text class="gray-color font ml-1 line-through"> ￥{{li.olPrice}}</text>
							</view>
							<uni-number-box v-model="li.num" :min="1"></uni-number-box>
						</view> -->
						<view class="main-color">
							￥<text class="font-md">{{li.nowPrice}}</text>
							<text class="gray-color font ml-1 line-through"> ￥{{li.olPrice}}</text>
						</view>
						<view class="d-flex j-end mt--4">
							<uni-number-box v-model="li.num" :min="1"></uni-number-box>
						</view>
					</view>

				</view>
			</view>
		</view>

		<view class="fixedBtm border-top">
			<view class=" d-flex a-center j-sb">
				<label for="" @tap="selAllChange">
					<radio :checked="checkAll" color="#D81828" style="transform:scale(0.9);" />全选
				</label>
				<view class="d-flex a-center">
					<view class=" text-right" v-if="!edit">
						<view class="line-h-sm">
							<text class="gray-color font">不含运费</text>
							<text class="font32">合计:</text>
							<text class="main-color">￥
								<text class="font-md">{{totalPrice}}</text>
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
					<view class="btn ml-2" @tap="toChange">
						{{edit?"删除":"去结算"}}
					</view>
				</view>
			</view>
			<uv-safe-bottom></uv-safe-bottom>
		</view>
		<uv-safe-bottom></uv-safe-bottom>
		<shop-pop ref="popBtm" :totalPrice="totalPrice" />
	</view>
</template>

<script setup>
	import shopPop from './shop-pop.vue';

	import { computed } from 'vue';
	const props = defineProps([""])

	const checkAll = ref(false);
	const edit = ref(false);
	const skuArr = ref(["M", "S", "XL", "XXL"]);
	const activeArr = ref(["满300减40活动", "满800减40活动"]);

	const cartArr = ref([{
			name: "商品1",
			checked: false,
			sku: 0,
			active: 0,
			nowPrice: "28.6",
			olPrice: "33.2",
			num: 1,
			id: 1
		},
		{
			name: "商品2",
			checked: false,
			sku: 1,
			active: 1,
			nowPrice: "28.6",
			olPrice: "33.2",
			num: 1,
			id: 2
		}
	])

	// 全选
	function selAllChange({ detail }) {
		checkAll.value = !checkAll.value;

		cartArr.value.forEach(item => {
			item.checked = checkAll.value
		})
	}
	// 单选
	function selShop(item, index) {
		item.checked = !item.checked
		checkAll.value = cartArr.value.filter(({ checked }) => checked === false).length === 0
	}
	// 总价内容
	const totalPrice = computed(() => {
		let total = 0.0
		cartArr.value.forEach(({ checked, nowPrice, num }) => {
			if (checked) {
				try {
					total += Number(nowPrice) * num
				} catch (err) {}
			}
		})
		return Number(total).toFixed(2)
	})

	function toChange() {
		let array = cartArr.value.filter(({ checked }) => checked === true).length;
		if (!array) return showToast("请选择商品")
		if (edit.value) {
			cartArr.value = cartArr.value.filter(({ checked }) => checked === false)
			showToast("删除")
		} else {
			uni.navigateTo({
				url: "/pagePackage/placeOrder/placeOrder"
			})
		}
	}

	function bindPickerChange(li, key, e) {
		console.log(li, e);
		li[key] = e.detail.value
	}
	const popBtm = ref()

	function shopop() {
		popBtm.value.showPop()
	}

	defineExpose({})
</script>
<style>
	page {
		background-color: #F2F2F2;
	}
</style>
<style lang="scss" scoped>
	.cart {
		padding-bottom: 120rpx;
		.shop {
			background: #fff;
			margin-bottom: 16rpx;
			padding: 30rpx 20rpx;
			display: flex;
			align-items: center;

			.selected-area {
				height: 40rpx;
				background: #F7F7F7;
				border-radius: 4rpx;
				font-weight: 400;
				font-size: 24rpx;
				color: #999999;
				line-height: 40rpx;
				padding: 0 8rpx;
			}

			.reight-selected-area {
				font-size: 24rpx;
				color: #FF6F2D;
				padding: 0 8rpx;
				line-height: 34rpx;
				border-radius: 4rpx;
				border: 1rpx solid #FF6F2D;
			}
		}

		.fixedBtm {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: #fff;
			padding: 20rpx 30rpx;
			z-index: 9999999999999;

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