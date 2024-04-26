<template>
	<view>
		<view class="tabbar position-relative" :style="{height:`${tabHeight}px`,backgroundSize:`100vw ${safeAreaHeight}px`}">
			<view class="d-flex a-center " :style="'height:'+safeAreaHeight+'px;'">
				<view class="tabbar-item " v-for="(item,index) in dataList" :class="{active:current===index}" :key="index" @tap="selectTab(index)">
					<image v-if="item.icon" :src="current===index?item.iconed:item.icon" mode="" class="img"  :class="{centerImg:index===2}"></image>
					<image v-if="index===2" src="" class="img"  ></image>
					<view class="mt-1"  :class="{centertitle:index===2}">
						{{item.name}}
					</view>
				</view>
				<view class="position-absolute bottom-0 left-0 right-0" style="background-color: rgba(237, 27, 46, 1);" :style="{height:`${safeAreaInsetsBtm}px`}">
				</view>
			</view>

		</view>
		<view :style="`height:${tabHeight}px`"></view>
	</view>
</template>

<script setup>
import { showToast } from '@/utils/uni-interactive';
	const dataList = ref([{
			name: "首页",
			icon: "/static/components/tabbar/home.png",
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
			iconed: "/static/components/tabbar/membered.png",
		},
		{
			name: "商城",
			icon: "/static/components/tabbar/mall.png",
			iconed: "/static/components/tabbar/malled.png",
		}, {
			name: "我的",
			icon: "/static/components/tabbar/person.png",
			iconed: "/static/components/tabbar/personed.png",
		}
	])
	const emits = defineEmits(["change"]);
	let current = ref(0)
	uni.$on("tabChange",(num)=>{
		selectTab(num)
	})
	function selectTab(index) {
		current.value = index;
		emits("change", index)
	}
	const info = uni.getSystemInfoSync()
	const safeAreaInsetsBtm=ref(info.safeAreaInsets.bottom)
	const tabHeight = computed(() => {
		if (info.safeAreaInsets.bottom) return 100;
		return 66;
	})
	const safeAreaHeight = computed(() => {
		if (info.safeAreaInsets.bottom) return 100 - info.safeAreaInsets.bottom
		return 66;
	})
	onBeforeUnmount(()=>{
		uni.$off("tabChange")
	})
</script>

<style lang="scss" scoped>
	.tabbar {
		width: 750rpx;
		position: fixed;
		z-index: 1;
		bottom: 0;
		background-image: url("https://file.pdsdh.cn/images/tab_bg_20240401144930A521.png");
		background-repeat: no-repeat;
		border-radius: 30rpx 30rpx 0 0;
		filter: drop-shadow(0rpx -3rpx 10rpx rgba(34,9,9,0.8));
		color: rgba(255,255,255,0.7);
		// background-color: rgba(237, 27, 46, 1);
		font-size: 20rpx;
		line-height: 1;

		.tabbar-item {
			width: 150rpx;
			text-align: center;
			flex-shrink: 0;
			padding-top: 10rpx;

			&.active {
				color: #FFFFFF;
			}

			.img {
				width: 54rpx;
				height: 54rpx;
			}

			.centerImg {
				position: absolute;
				top: 18rpx;
				left: 50%;
				transform: translate(-50%, -50%);
				// display: block;
				text-align: center;
				width: 92rpx;
				height: 92rpx;
			}
			.centertitle{
				// padding-top: 50rpx;
			}
		}
	}
</style>