<template>
  <view>
		<view class="activity">
		  <linxi-tab/>
			<linxi-activi-list @toActiveDetail="toActiveDetail"/>
		</view>
  </view>
</template>

<script setup>
import tabbar from '@/components/tabbar/tabbar.vue'
import linxiTab from './components/linxi-tab.vue';
function toActiveDetail(){
	uni.navigateTo({
		url:"/pages/activity/active/active"
	})
}
</script>

<style lang="scss" scoped>
	.activity{
		padding: 20rpx;
	}
</style>

