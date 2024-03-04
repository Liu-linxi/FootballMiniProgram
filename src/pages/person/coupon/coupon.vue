<template>
	<view class="coupon">
		<view class="d-flex a-center text-center main-bg-color tab">
			<view class="w-50" v-for="(li,index) in tabArr" :key="li.name" @tap="changeTab(index)">
				<image :src="li.icon" mode="" class="iconImg"></image>
				<view class="text-white font mt-1" :class="{choose:tabIndex===index}">
					{{li.name}}
				</view>
			</view>
		</view>
		<view class="tabPan">
			<view class="font32 font-weight border-bottom pb-2 mt-2">
				{{tabIndex===0?'送优惠券':'生日特权'}}
			</view>
			<view class="gray-color mt-2">
				{{tabIndex===0?'成为会员，即可享受以下优惠券':'会员生日当天享生日特权'}}
			</view>
			<view class="d-flex a-center flex-wrap j-sb mt-3" v-if="tabIndex===0">
				<view class="tiocket" v-for="li in 2" style="background-image: url('/static/person/ticket3.png');">
					<view class="top">
						无门槛
					</view>
					<view class="text-white font text-center mt-1">
						洗车券
					</view>
					<view class="font text-white text-center line-h-lg">
						— 尊贵会员特享 —
					</view>
				</view>
			</view>
			<view class="font mt-1" v-if="tabIndex===1">
				生日当天官方商城赠送生日礼券，名字与同天生日球员一起出现在官方生日海报。
			</view>
		</view>
	</view>
</template>

<script setup>
	const tabArr = ref([
		{ name: "优惠券", icon: "/static/person/ticket1.png" },
		{ name: "生日特权", icon: "/static/person/ticket2.png" }
	])
	
	const tabIndex=ref(0)
	function changeTab(index){
		tabIndex.value=index
	}
</script>

<style lang="scss" scoped>
	.coupon {
		.tab {
			padding: 50rpx 0 100rpx;
			.iconImg {
				width: 76rpx;
				height: 76rpx;
				border-radius: 50%;
			}
			.choose{
				position: relative;
				&:after{
					content: '';
					position: absolute;
					width: 58rpx;
					height: 4rpx;
					background: #FFFFFF;
					border-radius: 2rpx;
					bottom: -15rpx;
					left: calc(50% - 29rpx);
				}
			}
		}
		.tabPan{
			border-radius: 40rpx 40rpx 0 0;
			margin-top: -40rpx;
			background: #FFFFFF;
			padding: 30rpx 40rpx;
		}
		.tiocket{
			width: 300rpx;
			height: 185rpx;
			// background-color: #E52119;
			// background-image: url("~@/static/person/ticket1.png");
			background-repeat: no-repeat;
			background-size: 100%;
			position: relative;
			.iamghe{
				position: absolute;
				width: 64rpx;
				height: 64rpx;
				left: 14rpx;
				top: 0;
			}
			.top{
				font-size: 20rpx;
				color: #875E2B;
				text-align: center;
			}
		}
	}
</style>