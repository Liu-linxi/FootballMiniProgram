<template>
	<view class="row3">
		<view class="font-weight px-3 pt-2">
			订单类型：<text class="green-color">商城购物</text>
		</view>
		<view class="item">
			<view v-for="(item,index) in 2" class="card " :key="index">
				<view class="d-flex a-center py-2 " :class="{'border-bottom':index<1}">
					<image src="" style="width: 200rpx;height: 200rpx;" class="main-bg-color flex-shrink rounded-sm" mode=""></image>
					<view class="d-flex w-100 flex-column j-sb ml-2">
						<view class="truncate2 font-weight" style="font-size: 30rpx;">
							河南FC卫衣2023年秋款圆领经典卫衣河南FC卫衣2023年秋款圆领经典卫衣河南FC卫衣2023年秋款圆领经典卫衣河南FC卫衣2023年秋款圆领经典卫衣
						</view>
						<view class="d-flex j-sb a-center">
							<view class="">
								<view class="gray-color font">
									XL
								</view>
								<view class="font main-color">
									￥<text class="font-md font-weight">28.6</text>
								</view>
							</view>
							<view class="gray-color">
								X1
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps([""])
	
	defineExpose({})
</script>

<style lang="scss" scoped>
	.row3{
		margin: 20rpx 28rpx;
		background-color: #fff;
		border-radius: 10rpx;
		.item{
			padding: 0 38rpx 12rpx;
		}
		.card{
			height: 241rpx;
		}
	}
</style>