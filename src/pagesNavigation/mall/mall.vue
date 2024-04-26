<template>
	<view>
		<view class="mall">
			<view class="d-flex a-center">
				<view class="w-100">
					<uni-search-bar @confirm="search" v-model="searchValue" cancelButton="none" placeholder="搜索商品">
					</uni-search-bar>
				</view>
				<image src="@/static/mall/ticket.png" style="width: 72rpx;height: 72rpx;" class="" mode="" @tap="tocop"></image>
			</view>
			<view class="screen  d-flex a-center mb-2 j-sa">
				<view :class="index===screenIndex?'active':''" v-for="(item,index) in screen" :key="item" @tap="changeScreen(index)" class="d-flex a-center topTag">
					{{item}}
					<!-- <view class="d-flex flex-column line-h" v-if="index==2">
						<uni-icons type="up" size="10"></uni-icons>
						<uni-icons type="down" size="10"></uni-icons>
					</view> -->
				</view>
			</view>
			<view class="shop">
				<view class="detail " v-for="li in 9" @tap="toDetail">
					<view class="text-center position-relative">
						<image src="" style="width: 316rpx;height: 336rpx;" class="bg-danger" mode=""></image>
						<view v-if="li==3" class="top-0 left-0 position-absolute right-0 border-0 d-flex a-center j-center" style="width: 316rpx;height: 336rpx;background-color: rgba(0, 0, 0, 0.2);">
							<image src="/static/mall/Chime.png" style="width: 160rpx;height: 136rpx;" class="" mode=""></image>
						</view>
					</view>
					<view class=" d-flex flex-column j-sa" style="min-height: 150rpx;">
						<view class="font mt-1">
							嵩山龙门战队马克杯
						</view>
						<view class="font" style="color: #FF6F2D;">
							领券无门槛减10
						</view>
						<view class="d-flex j-sb">
							<view class="">
								<text class="main-color font-md font-weight"> ￥ 49</text>
								<text class=" text-light-muted font ml-2" style="text-decoration: line-through;">￥90</text>
							</view>
							<!-- <text class=" gray-color font ml-2"> 已售16件</text> -->
							<uni-icons type="cart" size="28" class="line-h ml-4" color="#02873F"></uni-icons>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="position-fixed" @tap="toCart">
			<image src="/static/mall/cart.png" style="width: 117rpx;height: 117rpx;" mode=""></image>
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
	function toCart(){
		uni.navigateTo({
			url:"/pagePackage/shop-cart/shop-cart"
		})
	}
	function toDetail(){
		uni.navigateTo({
			url:"/pagePackage/shop-detail/shop-detail"
		})
	}
	function tocop(){
		uni.navigateTo({
			url:"/pagePackage/coupon-center/coupon-center"
		});
	}
</script>

<style lang="scss" scoped>
	.mall {
		padding: 20rpx;
		// background: linear-gradient(180deg, #FFFFFF 0%, #EDEDED 16%, #E8E8E8 100%);

		.screen {
			.topTag{
				color: rgba(255, 255, 255, 0.7);
			}
			.active{
				color: rgba(255, 255, 255, 1);
			}
		}

		.shop {
			padding-bottom: 40rpx;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 12rpx;

			.detail {
				background-color: #FFFFFF;
				padding: 14rpx;

			}
		}
	}
	.position-fixed{
		bottom: 200rpx;
		right: 30rpx;
	}
</style>