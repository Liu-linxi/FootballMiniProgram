<template>
	<view class="evaluate">
		<view class="text-center" style="font-size: 40rpx;">
			请对商品作出评价！
		</view>
		<view v-for="(li,index) in arr" :key="index" class="pb-3 mt-2">
			<view class="font-weight">
				商品信息：
			</view>
			<view class="d-flex a-center py-2 ">
				<image src="" style="width: 200rpx;height: 200rpx;" class="main-bg-color flex-shrink rounded-sm" mode=""></image>
				<view class="d-flex w-100 flex-column j-sb ml-2">
					<view class="truncate2 font-weight" style="font-size: 30rpx;">
						河南FC卫衣2023年秋款圆领经典卫衣河南FC卫衣2023年秋款圆领经典卫衣河南FC卫衣2023年秋款圆领经典卫衣河南FC卫衣2023年秋款圆领经典卫衣
					</view>
					<view class="d-flex j-sb a-center">
						<view class="">
							<view class="gray-color">
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
			<view class="d-flex a-center j-center mt-4">
				<uni-rate v-model="li.rate" :margin="8" size="30"/>
			</view>
			<view class="d-flex a-center mt-3">
				<image @tap="li.anonymous=!li.anonymous" :src="`/static/mall/${li.anonymous?'checkboxed':'checkbox'}.png`" style="width: 60rpx;height: 60rpx;" mode=""></image>
				<view class="ml-2 font" style="color: #190446;">对此次评价进行匿名</view>
			</view>
			<view class="mt-1">
				<uv-textarea v-model="li.txt" count placeholder="请输入内容" maxlength="200" height="160"></uv-textarea>
			</view>
			

		</view>
		<uv-safe-bottom></uv-safe-bottom>
		<view class="btmGrou bg-white">
			<view class="btm">
				提交评价
			</view>
			<uv-safe-bottom></uv-safe-bottom>
		</view>
	</view>
</template>

<script setup>
	const arr = ref([{
			rate: 2,
			anonymous: true,
			txt: ""
		},
		{
			rate: 1,
			anonymous: false,
			txt: ""
		},
		{
			rate: 3,
			anonymous: true,
			txt: ""
		},
	])
</script>

<style lang="scss" scoped>
	.evaluate {
		padding: 46rpx 50rpx 120rpx;

		.btmGrou {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			padding: 20rpx 48rpx 10rpx;

			.btm {
				background: #E52119;
				border-radius: 51rpx;
				line-height: 80rpx;
				text-align: center;
				color: #FFF;
			}
		}

	}
</style>