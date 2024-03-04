<template>
	<view>
		<view class="tabbar " :style="'height:'+tabHeight+'rpx;'">
			<view class="d-flex a-center" :style="'height:'+safeAreaHeight+'rpx;'">
				<view class="tabbar-item" v-for="(item,index) in dataList" :class="{active:current===index}" :key="index" @tap="selectTab(index)">
					<image v-if="item.icon" :src="current===index?item.iconed:item.icon" mode="widthFix" class="img" :class="{centerImg:index===2}"></image>
					<view class="mt-1">
						{{item.name}}
					</view>
				</view>
			</view>

		</view>
		<view :style="`height:${tabHeight+19}rpx`"></view>
	</view>
</template>

<script setup>
	const poros = defineProps({
		onePage: {
			type: Boolean,
			default: false
		}
	})

	const dataList = ref([{
			name: "首页",
			icon: "/static/components/tabbar/homed.png",
			iconed: "/static/components/tabbar/homed.png",
		},
		{
			name: "活动",
			icon: "/static/components/tabbar/activity.png",
			iconed: "/static/components/tabbar/activityed.png",
		},
		{
			name: "会员",
			icon: "/static/components/tabbar/member.png",
			iconed: "/static/components/tabbar/member.png",
		},
		{
			name: "商城",
			icon: "/static/components/tabbar/mall.png",
			iconed: "/static/components/tabbar/mall.png",
		}, {
			name: "我的",
			icon: "/static/components/tabbar/person.png",
			iconed: "/static/components/tabbar/person.png",
		}
	])
	const emits = defineEmits(["change"]);
	let current = ref(0)

	function selectTab(index) {
		if (poros.onePage) {
			current.value = index;
			emits("change", index)
			return
		}
	}
	const info = uni.getSystemInfoSync()
	const tabHeight = computed(() => {
		if (info.safeAreaInsets.bottom) return 200;
		return 132;
	})
	const safeAreaHeight = computed(() => {
		if (info.safeAreaInsets.bottom) return 200 - info.safeAreaInsets.bottom * 2
		return 132;
	})
</script>

<style lang="scss" scoped>
	.tabbar {
		width: 750rpx;
		background-color: #fff;
		position: fixed;
		z-index: 1;
		bottom: 0;
		background-image: url("~@/static/components/tabbar/tabbg.svg");
		background-repeat: no-repeat;
		background-size: 750rpx;
		color: #333333;
		font-size: 20rpx;
		line-height: 1;

		.tabbar-item {
			width: 150rpx;
			text-align: center;
			flex-shrink: 0;
			padding-top: 10rpx;

			&.active {
				color: #E52119;
			}

			.img {
				width: 52rpx;
				height: 52rpx;
			}

			.centerImg {
				display: inline-block;
				position: relative;
				margin-top: -38rpx;
				width: 90rpx;
				height: 90rpx;
			}
		}
	}
</style>