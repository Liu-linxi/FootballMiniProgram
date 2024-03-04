<template>
	<view class="content mb-4">
		<vear-carousel :img-list="data" url-key="src"/>


	</view>
</template>

<script setup>
	import { computed } from 'vue';
	const data = ref([
		{ src: "https://cdn.pixabay.com/photo/2016/07/18/04/19/canton-1525284_1280.jpg" },
		{ src: "https://cdn.pixabay.com/photo/2016/07/18/04/19/canton-1525284_1280.jpg" },
		{ src: "https://cdn.pixabay.com/photo/2016/07/18/04/19/canton-1525284_1280.jpg" },
		{ src: "https://cdn.pixabay.com/photo/2016/07/18/04/19/canton-1525284_1280.jpg" },
		{ src: "https://cdn.pixabay.com/photo/2016/07/18/04/19/canton-1525284_1280.jpg" }
	])
	const currentIndex = ref(0)

	function swiperChange(event) {
		console.log(event);
		currentIndex.value = event.detail.current
	}
</script>

<style lang="scss" scoped>
	.content {
		// overflow: hidden;
	}
</style>