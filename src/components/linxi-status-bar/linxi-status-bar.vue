<template>
	<view class="">
		<view class="status">
			<view :style="{lineHeight:heightLine+'px',height:heightLine+'px',paddingTop:statusBarHeight+'px'}">
				{{title}}
			</view>
		</view>
		<view class="main-bg-color" :style="{lineHeight:heightLine+'px',height:heightLine+'px',paddingTop:statusBarHeight+'px'}">
		</view>
	</view>
</template>

<script setup>
	const props=defineProps({
		title:{
			type:String,
			default:"河南嵩山龙门"
		}
	})
	const info = uni.getSystemInfoSync()
	const statusBarHeight = info.statusBarHeight;
	// #ifdef MP
	let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
	const heightLine = menuButtonInfo.height + (menuButtonInfo.top - info.statusBarHeight) * 2;
	// #endif
	// #ifndef MP
	const heightLine = 80
	// #endif
</script>

<style lang="scss" scoped>
	.status{
		background-color: #D81828;
		text-align: center;
		color: #FFFFFF;
		position: fixed;
		width: 100%;
		z-index: 10;
	}
</style>