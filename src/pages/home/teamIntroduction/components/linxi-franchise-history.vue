<template>
	<view class="content main-pink-color p-2 mt-3">
		<view class="d-flex j-center">
			<view class="d-flex a-center">
				<image src="@/static/icon/logo.png" style="width: 60rpx;height: 56rpx;" mode=""></image>
				<view class="ml-2 font-weight">
					球队<text class="main-color">历史</text>
				</view>
			</view>
		</view>
		<view class="mt-2">
			{{shoTxt}}
			<text class="main-color" @tap="change">…{{shoInf?"收起":"更多"}}</text>
		</view>
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app';
import { watch } from 'vue';
	const intro = ref("河南嵩山龙门足球俱乐部是由建业住宅集团（中国）有限公司与河南省足球协会合作组建的一个足球俱乐部，是河南省唯一的职业足球俱乐部。1999年1月建业集团买断河南省体委持有的股份，俱乐部成为建业集团旗下的独资企业，球队成立至今未更换过俱乐部后台老板，是中国足球超级联赛16支参赛球队之一");
	const shoTxt = ref("");
	const shoInf = ref(false)
	
	
	watch(shoInf,(newVal)=>{
		if (newVal) {
			shoTxt.value = intro.value
		} else {
			shoTxt.value = intro.value.substr(0, 30);
		}
	}, { immediate: true })
	function change() {
		shoInf.value = !shoInf.value
	}
</script>

<style lang="scss" scoped>
	.content {}
</style>