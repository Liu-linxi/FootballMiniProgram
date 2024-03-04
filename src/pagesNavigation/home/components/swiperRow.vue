<template>
	<view>
		<linxi-swiper-dot :swiperList="bannerList" imgField="imgSrc" @tap="swiperItemClick"></linxi-swiper-dot>
	</view>
</template>

<script setup>
	const bannerList = ref([
		{ "imgSrc": "https://cdn.pixabay.com/photo/2016/07/18/04/19/canton-1525284_1280.jpg" },
		{ "imgSrc": "https://cdn.pixabay.com/photo/2022/04/27/12/30/switzerland-7160290_1280.jpg" },
		{ "imgSrc": "https://cdn.pixabay.com/photo/2017/09/05/17/28/guangzhou-2718517_1280.jpg" }
	])

	function swiperItemClick(item) {

		console.log('点击轮播图条目 = ' , item);
		// uni.showModal({
		// 	title: '点击轮播图条目',
		// 	content: '点击轮播图条目 = ' + JSON.stringify(item)
		// })
	}
</script>