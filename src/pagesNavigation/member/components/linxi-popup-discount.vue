<template>
	<view class="discount">
		<uni-popup ref="popup" type="bottom">
			<view class="popupContent">
				<view class="title">
					门票9折
				</view>
				<view class="detail">
					购买单场球票优先抢购，9折优惠资格；购买专属区域年卡及优惠资格；
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
	.discount{
		.popupContent{
			height: 318rpx;
			background: #FFFFFF;
			border-radius: 22rpx 22rpx 0rpx 0rpx;
			padding: 0 100rpx;
			.title{
				padding-top: 46rpx;
				font-weight: 500;
				font-size: 32rpx;
				color: #656565;
				text-align: center;
			}
			.detail{
				margin-top: 32rpx;
				text-align: center;
				color: #8E8E8E;
			}
		}
	}
</style>