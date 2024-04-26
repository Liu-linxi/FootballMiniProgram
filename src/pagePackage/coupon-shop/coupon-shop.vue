<template>
	<view class="shop">
		<uv-sticky>
			<view class="bg-white w-100">
				<uni-nav-bar @clickLeft="back" leftIcon="left" leftWidth="80rpx" rightWidth="160rpx" :border="false" :statusBar="true" color="#FFFFFF" backgroundColor="#D81828">
					<view class="d-flex bg-white input-view a-center">
						<uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
						<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词" @confirm="confirm" />
					</view>
				</uni-nav-bar>
				<view class="tags">
					<view class="tips">
						满200元打8折
					</view>
				</view>
				<view class="screen  d-flex a-center py-1 j-sa">
					<view :class="index===screenIndex?'active':''" v-for="(item,index) in screen" :key="item" @tap="changeScreen(index)" class="d-flex a-center topTag">
						{{item}}
						<view class="d-flex flex-column line-h" v-if="index==2">
							<uni-icons type="up" size="10"></uni-icons>
							<uni-icons type="down" size="10" class="mt--1"></uni-icons>
						</view>
					</view>
				</view>
			</view>
		</uv-sticky>
		
		<view class="">
			<view v-for="(item,index) in 30" :key="index" class="card">
				<image src="" style="width: 200rpx;height: 200rpx;" class="main-bg-color flex-shrink rounded-sm" mode=""></image>
				<view class="d-flex flex-column j-sa w-100 ml-2">
					<view class="truncate">
						嵩山龙门战队马克杯
					</view>
					<view class="font" style="color: #FF6F2D;">
						领券200元打8折
					</view>
					<view class="">
						<text class="font-md main-color font-weight">￥ 49.00</text>
						<text class="font ml-1" style="color: #B0B0B0;text-decoration: line-through;">￥80.00</text>
					</view>
					<view class="d-flex j-sb a-center">
						<view class="font" style="color: #B0B0B0;" >
							已售16件
						</view>
						<uni-icons type="cart" size="28" class="line-h ml-4" color="#02873F"></uni-icons>
					</view>
				</view>
			</view>
			<view class="text-center gray-color">
				到底了～
			</view>
			<uv-safe-bottom></uv-safe-bottom>
		</view>
		
		<view class="btmFix bg-white">
			<view class="d-flex a-center j-sb">
				<view class="">
					<view class="font-weight">
						小记:￥190.00
					</view>
					<view class="gray-color font">
						再买￥10.00元可享受8折优惠
					</view>
				</view>
				<view class="btn" @tap="toCart">
					去购物车
				</view>
			</view>
			<uv-safe-bottom></uv-safe-bottom>
		</view>
		
	</view>
</template>

<script setup>
	const props = defineProps([""])
	const screen = ref(["综合", "销量", "价格", "上新"])
	const screenIndex = ref(0)
	const searchValue = ref("")

	function changeScreen(index) {
		screenIndex.value = index;
		confirm()
	}

	function confirm() {
		uni.showToast({
			title: '搜索'
		})
	}
	
	function toCart(){
		uni.navigateTo({
			url:"/pagePackage/shop-cart/shop-cart"
		})
	}
	
	function back() {
		uni.navigateBack()
	}
	defineExpose({})
</script>

<style lang="scss" scoped>
	.shop {
		$nav-height: 30px;
		padding-bottom: 120rpx;
		.input-view {
			/* #ifndef APP-PLUS-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			// width: 500rpx;
			flex: 1;
			background-color: #f8f8f8;
			height: $nav-height;
			border-radius: 15px;
			padding: 0 15px;
			flex-wrap: nowrap;
			margin: 7px 0;
			line-height: $nav-height;
		}
		
		.tags{
			border-bottom: 20rpx solid #F9F9F9;
			padding: 16rpx 38rpx;
			.tips{
				line-height: 78rpx;
				background: #FEE9E8;
				border-radius: 16rpx;
				margin: 0 auto;
				color: #ED1B2E;
				text-align: center;
			}
			
			
			
			
		}
		.screen {
			border-bottom: 8rpx solid #F9F9F9;
			.topTag{
				color: #A5A5A5;
			}
			.active{
				color:#D81828;
			}
		}
		.card{
			width: 690rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(220,220,220,0.5);
			border-radius: 20rpx;
			padding: 16rpx;
			margin: 16rpx;
			display: flex;
			align-self: center;
		}
		.btmFix{
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			padding: 20rpx 40rpx 0;
			box-shadow: 0rpx 0rpx 8rpx 0rpx rgba(203,203,203,0.5);
			.btn{
				width: 208rpx;
				line-height: 80rpx;
				background: #FF4444;
				border-radius: 40rpx;
				text-align: center;
				color: #FFFFFF;
			}
		}
	}
</style>