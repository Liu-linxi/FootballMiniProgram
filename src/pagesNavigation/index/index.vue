<template>
	<view class="">
		<linxi-status-bar v-if="showIndex!=2" :title="title" />
		<template v-if="showIndex==0">
			<Home />
		</template>
		<template v-if="showIndex==1">
			<Activity />
		</template>
		<template v-if="showIndex==2">
			<Member />
		</template>
		<template v-if="showIndex==3">
			<Mall />
		</template>
		<template v-if="showIndex==4">
			<Person />
		</template>
		<tabbar :current="0" :onePage="true" @change="change" />
	</view>
</template>

<script setup>
	import Home from "@/pagesNavigation/home/home"
	import Activity from "@/pagesNavigation/activity/activity"
	import Member from "@/pagesNavigation/member/member"
	import Mall from "@/pagesNavigation/mall/mall"
	import Person from "@/pagesNavigation/person/person"
	const showIndex = ref(0)
	const title = ref("河南嵩山龙门");
	async function change(index) {
		switch (index) {
			case 0:
				title.value = "河南嵩山龙门";
				break;
			case 1:
				title.value = "活动";
				break;
			case 3:
				title.value = "商城";
				break;
			case 4:
				title.value = "";
				break;
		}
		showIndex.value = index
	}
</script>

<style lang="scss" scoped>
	.content {}
</style>