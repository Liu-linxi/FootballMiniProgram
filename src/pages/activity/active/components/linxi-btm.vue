<template>
	<view class="">
		<view class="button" :style="`padding-bottom:${safeHeight}rpx`">
			<linxi-button class="btn"  v-show="status==0" @tap="signUp">报名</linxi-button>
			<linxi-button class="btn"  v-show="status==1" @tap="clockIn">打卡</linxi-button>
			<linxi-button class="btn" type="gray" v-show="status==2" @tap="signUp">已截止</linxi-button>
			<linxi-button class="btn" type="green" v-show="status==3" @tap="signUp">打卡成功</linxi-button>
		</view>
		<view class="100%" :style="`height:${safeHeight+130}rpx`"></view>
	</view>
</template>

<script setup>
	const props = defineProps({
		status: {
			type: Number,
			default: 0
		}
	})

	const info = uni.getSystemInfoSync();
	const safeHeight = info.safeAreaInsets.bottom 
	
	const emits=defineEmits(["signUp","clockIn"])
	function signUp(){
		emits("signUp")
	}
	function clockIn(){
		emits("clockIn")
	}
</script>

<style lang="scss" scoped>
	.button {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 130rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		.btn {
			width: 664rpx;
		}
	
	}
</style>