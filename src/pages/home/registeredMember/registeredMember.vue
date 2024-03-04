<template>
	<view class="pb-5">
		<view class="font32 text-center font-weight pt-4">
			填写基本信息
		</view>
		<linxi-forms ref="linxiForm" />
		<view class="text-center">
			<label class="font gray-color">
				<radio :checked="check" color="#E52119" style="transform: scale(0.6);" />已阅读并同意 <text class="main-color">《河南嵩山龙门隐私政策》</text>
			</label>
		</view>
		<view class="px-5">
			<linxi-button class="btn mt-2" fontSize="36rpx" line-height="96rpx" @tap="submit" :isShadow="false">立即加入</linxi-button>
		</view>
	</view>
</template>

<script setup>
	import linxiForms from './components/linxi-forms.vue';
	const linxiForm = ref()
	const check=ref(false)
	function submit() {
		if(check.value)return linxiForm.value.submit()
		showToast("请先勾选协议")
	}
</script>

<style scoped lang="scss">


</style>