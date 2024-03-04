<template>
	<!-- #ifdef MP-WEIXIN -->
	<page-meta :page-style="'overflow:'+(pageMetaShow?'hidden':'visible')"></page-meta>
	<!-- #endif -->
	<view class="content">
		<linxi-detail />
		<linxi-btm :status="1" @signUp="signUp" @clockIn="clockIn" />

		<linxi-entry ref="entryRef" @change="change"/>
		<linxi-clockIn ref="clockInRef"  @change="change"/>
	</view>
</template>

<script setup>
	import linxiDetail from './components/linxi-detail.vue';
	import linxiBtm from './components/linxi-btm.vue';
	import linxiEntry from './components/linxi-entry.vue';
	import linxiClockIn from './components/linxi-clockIn.vue';
	const entryRef = ref();
	const clockInRef=ref();
	
	function signUp() {
		entryRef.value.open()
	}

	function clockIn() {
		clockInRef.value.open()
	}
	const pageMetaShow=ref(false)
	function change(e) {
		pageMetaShow.value = e.show
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 20rpx 20rpx 0;
		 :deep(.uni-forms-item__label) {
		 	font-weight: bold;
		 	color: #101010;
		 	font-size: 32rpx;
		 	width: 170rpx !important;
		 }
		 
		 :deep(uni-easyinput__content-input) {
		 	padding: 0 !important;
		 }
		 
		 :deep(.uni-textarea-textarea) {
		 	padding-left: 20rpx;
		 }
		 
		 :deep(.uni-forms-item) {
		 	margin-bottom: 18px;
		 }
		 
		 :deep(.uni-easyinput__content-input) {
		 	background: #F6F6F6;
		 	border-radius: 10rpx;
		 }
		 :deep(.uni-easyinput__content-textarea){
			 background-color:#F6F6F6;
			 padding-left: 20rpx;
			 border-radius: 10rpx;
		 }
		
	}
</style>