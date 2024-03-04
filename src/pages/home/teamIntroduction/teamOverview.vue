<template>
	<view class="teamOverview">
		<view class="d-flex a-center j-sb" @tap="toIntor">
			<view class="w-33"></view>
			<view class="text-center w-33">
				<text class="title">球队介绍</text>
			</view>
			<view class="secTitle w-33">
				查看更多
				<image src="@/static/home/home_icon2.png" style="width:40rpx ;height: 40rpx;margin-left: 8rpx;" mode=""></image>
			</view>
		</view>
		<view class="" style="overflow: hidden;width: 710rpx !important;">
			<linxi-custom-swiper :list="data" />
		</view>
		<linixi-team-introduction/>
		<view class="text-center">
			<text class="title">俱乐部介绍</text>
		</view>
		<linxi-collaborating-sponsors/>
		<linxi-franchise-history/>
	</view>
</template>

<script setup>
	import linxiFranchiseHistory from './components/linxi-franchise-history.vue';
	import linixiTeamIntroduction from './components/linixi-team-introduction.vue';
	import linxiCollaboratingSponsors from './components/linxi-collaborating-sponsors.vue';
	import linxiCustomSwiper from './components/linxi-custom-swiper.vue';
	
	const data = ref([
		{ imgUrl: "https://cdn.pixabay.com/photo/2016/07/18/04/19/canton-1525284_1280.jpg" },
		{ imgUrl: "https://cdn.pixabay.com/photo/2022/04/27/12/30/switzerland-7160290_1280.jpg"},
		{ imgUrl: "https://cdn.pixabay.com/photo/2017/09/05/17/28/guangzhou-2718517_1280.jpg" },
		{ imgUrl: "https://cdn.pixabay.com/photo/2016/07/18/04/19/canton-1525284_1280.jpg" },
		{ imgUrl: "https://cdn.pixabay.com/photo/2016/07/18/04/19/canton-1525284_1280.jpg" }
	])
	
	function toIntor(){
		uni.navigateTo({
			url: "teamIntroduction"
		})
	}
</script>

<style lang="scss" scoped>
	.teamOverview{
		padding: 20rpx;
		.title {
			font-size: 36rpx;
			font-weight: bold;
			position: relative;
		
			&:after {
				content: '';
				display: block;
				position: absolute;
				width: 30rpx;
				height: 30rpx;
				right: -23rpx;
				top: -15rpx;
				background-image: url("~@/static/home/home_icon1.png");
				background-repeat: no-repeat;
				background-size: 30rpx 30rpx;
			}
		}
		.w-33{
			width: 33.33%;
		}
		.secTitle {
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}
	}
</style>