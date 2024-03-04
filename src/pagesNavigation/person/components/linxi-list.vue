<template>
	<view class="list">
		<view class="d-flex a-center j-sb " :class="{boderbtm:index+1<listArr.length}" v-for="(li,index) in listArr" :key="li.name" @tap="navagiteToNewPage(li.url)">
			<view class="title">
				{{li.name}}
			</view>
			<uni-icons type="right" size="14" color="#C5C8CB"></uni-icons>
		</view>
	</view>
</template>

<script setup>
	const listArr = ref([
		{ name: "个人信息",url: "/pages/person/perInfo/perInfo" },
		{ name: "我的优惠券", url: "/pages/person/coupon/coupon" },
		{ name: "我的优惠券" },
		{ name: "商家联盟" },
		{ name: "站内信" ,url: "/pages/person/mail/mail"},
		{ name: "商户合作" },
		{ name: "我的积分",url: "/pages/person/integral/integral" },
	])

	function navagiteToNewPage(url) {
		if (!url) return;
		uni.navigateTo({ url })
	}
</script>

<style lang="scss" scoped>
	.list {
		font-size: 30rpx;
		line-height: 1;
		padding: 0 44rpx;
		margin-top: 30rpx;

		.title {
			padding: 30rpx 0;
			font-weight: 400;
			font-size: 30rpx;
			color: #1C2023;
		}

		.boderbtm {

			border-bottom: 2rpx solid #E3E4E5;
		}
	}
</style>