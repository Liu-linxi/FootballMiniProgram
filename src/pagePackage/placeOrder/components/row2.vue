<template>
	<view class="row2">
		<view v-for="(item,index) in 3" class="card " :key="index">
			<view class="d-flex a-center py-2 " :class="{'border-bottom':index<2}">
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
</template>

<script setup>
	const props = defineProps([""])
	
	defineExpose({})
</script>

<style lang="scss" scoped>
	.row2{
		background-color: #FFF;
		padding: 12rpx 38rpx;
		margin: 28rpx;
		.card{
			height: 241rpx;
		}
	}
</style>