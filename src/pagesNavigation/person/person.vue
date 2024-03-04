<template>
	<view>
		<view class="person">
			<linxi-avatar :type="1"/>
			<linxi-order :type="0"/>
			<linxi-list/>
		</view>


	</view>
</template>

<script setup>
	import linxiAvatar from './components/linxi-avatar.vue';
	import linxiOrder from './components/linxi-order.vue';
	import linxiList from './components/linxi-list.vue';
</script>

<style lang="scss" scoped>
	.person {
		padding: 20rpx;
	}
</style>