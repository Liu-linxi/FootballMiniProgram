<template>
	<view>
		<view class="mall">
			<view class="d-flex a-center">
				<view class="w-100">
					<uni-search-bar @confirm="search" v-model="searchValue" cancelButton="none" placeholder="搜索商品">
					</uni-search-bar>
				</view>
				<image src="" style="width: 60rpx;height: 56rpx;" class="bg-danger" mode=""></image>
			</view>
			<view class="screen  d-flex a-center j-sa">
				<view :class="index===screenIndex?'main-color':'gray'" v-for="(item,index) in screen" :key="item" @tap="changeScreen(index)" class="d-flex a-center">
					{{item}}
					<view class="d-flex flex-column line-h" v-if="index==2">
						<uni-icons type="up" size="10"></uni-icons>
						<uni-icons type="down" size="10"></uni-icons>
					</view>
				</view>
			</view>
			<view class="shop">
				<view class="detail " v-for="li in 10">
					<view class="text-center">
						<image src="" style="width: 316rpx;height: 336rpx;" class="bg-danger" mode=""></image>
					</view>
					<view class="font mt-1">
						嵩山龙门战队马克杯
					</view>
					<view class="">
						<text class="main-color font-md font-weight"> ￥ 49</text>
						<text class=" gray-color font ml-2"> 已售16件</text>
						<uni-icons type="cart" size="28" class="line-h ml-4" color="#02873F"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const screen = ref(["综合", "销量", "价格", "上新"])
	const screenIndex = ref(0)
	const searchValue = ref("")

	function changeScreen(index) {
		screenIndex.value = index;
		search()
	}

	function search() {

	}
</script>

<style lang="scss" scoped>
	.mall {
		padding: 20rpx;
		background: linear-gradient(180deg, #FFFFFF 0%, #EDEDED 16%, #E8E8E8 100%);

		.screen {}

		.shop {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 12rpx;

			.detail {
				background-color: #FFFFFF;
				padding: 14rpx;

			}
		}
	}
</style>