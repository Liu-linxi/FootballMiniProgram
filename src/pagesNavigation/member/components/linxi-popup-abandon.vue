<template>
	<view class="">
		<uni-popup ref="popup" type="center">
			<view class="popupContent">
				<view class="text-center mt-5 font font-md font-weight line-h">
					真的要放弃购买会员吗？
				</view>
				<view class="font mt-3 text-center">
					您可能会错过以下权益
				</view>
				<scroll-view scroll-y="true" class="scroll-Y">
					<view class="grid_pop">
						<view class="grid_item" v-for="li in 10">
							<image src="" style="width: 72rpx;height: 72rpx;" class="main-bg-color rounded-circle" mode=""></image>
							<view class="font text-nowrap mt-2">
								商城8.5折
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="btm">
					<linxi-button class="rounded-circle" color=" #656565" borderRadius="40rpx" fontSize="28rpx" lineHeight="80rpx" type="popgray" @click="closepop">残忍放弃</linxi-button>
					<linxi-button class="rounded-circle" borderRadius="40rpx" fontSize="28rpx" lineHeight="80rpx" @click="closepop">继续支付</linxi-button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	const popup = ref();
	
	function showpop(){
		popup.value.open()
	}
	function closepop(){
		popup.value.close()
	}
	defineExpose({showpop})
</script>

<style lang="scss" scoped>
	.popupContent{
		width: 598rpx;
		height: 664rpx;
		background: linear-gradient( 0, #FFFFFF 0%, #FFFCEC 100%);
		border-radius: 20rpx;
		padding: 40rpx;
		line-height: 1;
		.scroll-Y{
			margin-top: 60rpx;
			height: 290rpx;
			.grid_pop{
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-gap:30rpx 0;
				.grid_item{
					text-align: center;
				}
			}
		}
		.btm{
			margin-top: 60rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.rounded-circle{
				width: 278rpx;
			}
		}
	}
</style>