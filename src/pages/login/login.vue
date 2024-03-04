<template>
	<view class="login">
		<view class="bglogin" style="background-image: url('/static/icon/login.png');">
			<view class="title">
				欢迎登录
			</view>
			<view class="logo">
				<image src="/static/icon/login2.png" style="width: 140rpx;height: 140rpx;" mode=""></image>
			</view>
			<view class="btnlogin rounded-circle overflow-hidden">
				<linxi-button type="blue" fontSize="32rpx" lineHeight="100rpx">微信手机号一键登录</linxi-button>
			</view>
		</view>
		<view class="d-flex a-center j-sa gray-color mt-3">
			<label>
				<checkbox :checked="checkbox1" style="transform:scale(0.7)" />
				同意《服务协议》《隐私政策》
			</label>
		</view>
	</view>
</template>

<script setup>
	const checkbox1 = ref(false)
</script>

<style>
	page {
		background: #F6F8FA;
	}
</style>

<style lang="scss" scoped>
	.login {
		.bglogin {
			min-height: 1054rpx;
			background-repeat: no-repeat;
			background-size: 750rpx 1054rpx;

			.title {
				padding-top: 228rpx;
				margin-left: 32rpx;
				font-weight: bold;
				font-size: 58rpx;
				color: #1E2121;
				line-height: 86rpx;
			}

			.logo {
				text-align: center;
				margin-top: 320rpx;
			}

			.btnlogin {
				margin: 102rpx 62rpx 0;
			}
		}

	}
</style>