<template>
	<view>
		<view class="home">
			<swiper-row />
			<linxi-title-nav class="mt-2" title="新闻速递" secTitle="更多新闻" @tap="tonews" />
			<linxi-news-republic />
			<swiper class="swiperImg mb-4" circular autoplay :interval="3000" :duration="500">
				<swiper-item v-for="(item,index) in bannerList" :key="index">
					<image :src="item.imgSrc" class="swiperImg" mode="" @tap="toTeamInf"></image>
				</swiper-item>
			</swiper>
			<linxi-title-nav class="mt-2" title="热门活动" secTitle="更多活动" @tap="toActives" />
			<linxi-activi-list @toActiveDetail="toActiveDetail" />
		</view>
		<linxi-registered-member1 ref="registered" />
	</view>
</template>

<script setup>
	import swiperRow from './components/swiperRow.vue';
	import linxiNewsRepublic from './components/linxi-news-republic.vue';
	import linxiRegisteredMember from './components/linxi-registered-member.vue';
	import linxiRegisteredMember1 from './components/linxi-registered-member1.vue';
	import { onLoad } from '@dcloudio/uni-app';
	
	const home = useHomeStore()
	// home.pinia_home_bannerList()
	
	
	const bannerList = ref([
		{ "imgSrc": "https://cdn.pixabay.com/photo/2016/07/18/04/19/canton-1525284_1280.jpg" },
		{ "imgSrc": "https://cdn.pixabay.com/photo/2022/04/27/12/30/switzerland-7160290_1280.jpg" },
		{ "imgSrc": "https://cdn.pixabay.com/photo/2017/09/05/17/28/guangzhou-2718517_1280.jpg" }
	])
	
/* 	const registered = ref();
	onLoad(() => {
		nextTick(() => {
			registered.value.showpop()
		})
	}) */


	function toTeamInf() {
		uni.navigateTo({
			url: "/pages/home/teamIntroduction/teamOverview"
		})
	}

	function tonews() {
		uni.navigateTo({
			url: "/pages/home/newsList/newsList"
		})
	}

	function toActives() {
		uni.reLaunch({
			url: "/pagesNavigation/activity/activity"
		})
	}

	function toActiveDetail() {
		uni.navigateTo({
			url: "/pages/activity/active/active"
		})
	}
</script>

<style lang="scss" scoped>
	.home {
		padding: 20rpx;

		.swiperImg {
			height: 220rpx;
			width: 100%;
			border-radius: 15rpx;
		}
	}
</style>