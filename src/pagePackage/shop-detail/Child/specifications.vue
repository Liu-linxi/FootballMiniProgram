<template>
	<view class="specifications">
		<uni-popup ref="popup" type="bottom" :safe-area="false" @change="popChange">
			<view class="bg-white content">
				<view class="d-flex a-center">
					<image src="" class="img rounded-sm" mode=""></image>
					<view class="d-flex flex-column j-sa ml-2">
						<view class="main-color">
							￥<text style="font-size: 52rpx;">49</text>
						</view>
						<view class=" font gray-color" style="text-decoration: line-through;">
							¥80
						</view>
					</view>
				</view>
				<view class="my-4">
					颜色（3）
				</view>
				<view class="grid3">
					<view @click="colSkuIndex=index" class="line-h rounded-sm overflow-hidden colorborder" v-for="(item,index) in colSku" :key="index" :class="{colorChose:colSkuIndex==index}">
						<image src="" class="img" mode=""></image>
						<view class="text-center itemColor">
							{{item}}
						</view>
					</view>
				</view>
				<view class="my-4">
					尺码（3）
				</view>
				<view class="d-flex a-center">
					<view class="itemColor wid1" @click="sizeSkuIndex=index" v-for="(item,index) in sizeSku" :key="index" :class="{colorChose:sizeSkuIndex==index}">
						{{item}}
					</view>
				</view>
				<view class="d-flex j-sb my-4">
					数量
					<uni-number-box v-model="vModelValue" :min="1"></uni-number-box>
				</view>

				<view class="d-flex a-center j-sb">
					活动选择
					<picker @change="bindPickerChange" :value="active" :range="activeArr">
						<view class="d-flex a-center j-sb reight-selected-area">
							{{activeArr[active]}}
							<uni-icons type="down" size="12" color="#FF6F2D"></uni-icons>
						</view>
					</picker>
				</view>

				<view class="d-flex a-center j-end">
					<view class="text-white btn">
						<view class="w-50 text-center left" @click="closePopup">加入购物车</view>
						<view class="w-50 text-center right">立即购买</view>
					</view>
				</view>
				<uv-safe-bottom></uv-safe-bottom>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	const props = defineProps(["sku"])

	const colSku = ref(["白色A", "红色", "白色B"])
	const colSkuIndex = ref(0);

	const sizeSku = ref(["小号", "中号", "大号"])
	const sizeSkuIndex = ref(0);

	const vModelValue = ref(1)
	const popup = ref()


	const emit = defineEmits(["update:sku"])

	function popChange({ show }) {
		if (!show) {
			emit('update:sku', `${colSku.value[colSkuIndex.value]}/${sizeSku.value[sizeSkuIndex.value]}`);
			console.log(sizeSku.value[sizeSkuIndex.value], colSku.value[colSkuIndex.value]);
		}
	}

	function showPopup() {
		popup.value.open()
	}

	function closePopup() {
		emit('update:sku', `${colSku.value[colSkuIndex.value]}/${sizeSku.value[sizeSkuIndex.value]}`);
		popup.value.close()
	}

	const active = ref(0)
	const activeArr = ref(["满300减40活动", "满800减40活动"]);
	function bindPickerChange(e) {
		active.value = e.detail.value
	}

	defineExpose({ showPopup })
</script>

<style lang="scss" scoped>
	.specifications {
		.content {
			background: #FFF;
			border-radius: 20rpx 20rpx 0 0;
			padding: 30rpx;

			.img {
				width: 200rpx;
				height: 200rpx;
				background-color: #FF4444;
			}

			.grid3 {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 44rpx;
			}

			.itemColor {
				line-height: 48rpx;
				text-align: center;
				background: #F2F2F2;
				font-weight: 500;
				font-size: 24rpx;
				color: #323233;
			}

			.colorborder {
				border: 1rpx solid #F2F2F2;
			}

			.wid1 {
				width: 132rpx;
				border-radius: 24rpx;
				margin-right: 20rpx;
				border: 1rpx solid #F2F2F2;
			}

			.colorChose {
				border-color: #ED1B2E;
				background: #FCEDEB;

				.itemColor {
					background: #FCEDEB;
				}
			}

			.btn {
				line-height: 80rpx;
				display: flex;
				align-items: center;
				text-align: center;
				text-wrap: nowrap;
				width: 452rpx;
				margin-top: 80rpx;

				.left {
					line-height: 80rpx;
					background: #1C262D;
					border-radius: 40rpx 0rpx 0rpx 40rpx;
				}

				.right {
					line-height: 80rpx;
					background: #FF4444;
					border-radius: 0rpx 40rpx 40rpx 0rpx;
				}
			}
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
</style>