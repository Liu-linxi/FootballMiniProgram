<template>
	<view class="perSon">
		<uni-forms ref="valiForm" :rules="rules" :modelValue="formData">
			<uni-forms-item label="账号密码" name="">
				<view class="lineInput d-flex flex-row-reverse">
					<uni-icons type="right" size="15"></uni-icons>
				</view>
			</uni-forms-item>
			<uni-forms-item label="头像" name="">
				<view class="d-flex a-center j-end">
					<view class="">
						<uni-file-picker  limit="1" :del-icon="false" :imageStyles="imageStyles" file-mediatype="image">选择</uni-file-picker>
					</view>
					<uni-icons type="right" size="15"></uni-icons>
				</view>
			</uni-forms-item>
			<uni-forms-item label="昵称" name="name">
				<view class="d-flex a-center">
					<uni-easyinput v-model="formData.name" :clearable="false" :inputBorder="false" placeholder="请填写真实姓名" maxlength="7" />
					<image src="@/static/person/edit.png" style="width: 40rpx;height: 40rpx;" mode=""></image>
				</view>
			</uni-forms-item>
			<uni-forms-item label="真实姓名" name="realName">
				<view class="d-flex a-center">
					<uni-easyinput v-model="formData.realName" type="idcard" :clearable="false" :inputBorder="false" placeholder="请填写真实姓名" maxlength="18" />
					<image src="@/static/person/edit.png" style="width: 40rpx;height: 40rpx;" mode=""></image>
				</view>
			</uni-forms-item>
			<uni-forms-item label="身份证号" name="idCard">
				<view class="d-flex a-center">
					<uni-easyinput v-model="formData.idCard" type="idcard" :clearable="false" :inputBorder="false" placeholder="请填写身份证号" maxlength="18" />
					<image src="@/static/person/edit.png" style="width: 40rpx;height: 40rpx;" mode=""></image>
				</view>
			</uni-forms-item>
			<uni-forms-item label="联系方式" name="phone">
				<view class="d-flex a-center">
					<uni-easyinput v-model="formData.phone" :clearable="false" :inputBorder="false" placeholder="请填写联系方式" maxlength="11" />
					<image src="@/static/person/edit.png" style="width: 40rpx;height: 40rpx;" mode=""></image>
				</view>
			</uni-forms-item>
		</uni-forms>





		<view class="bottom">
			<view class="d-flex a-center j-sb row">
				<linxi-button class="button" lineHeight="80rpx" fontSize="28rpx">提交</linxi-button>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { checkIdCard } from '@/utils/verify.js'
	const imageStyles = ref({
		width: 60,
		height: 60,
		border: {
			radius: '50%'
		}
	})
	const formData = ref({
		name: '',
		phone: '',
		idCard: "",
	})
	const rules = ref({
		name: {
			rules: [{
				required: true,
				errorMessage: '姓名不能为空'
			}, {
				minLength: 1,
				maxLength: 7,
				errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
			}]
		},
		phone: {
			rules: [{
				required: true,
				errorMessage: '联系方式不能为空'
			}, {
				pattern: /^1[3456789]\d{9}$/,
				errorMessage: '手机号输入不正确'
			}]
		},
		idCard: {
			rules: [{
				required: true,
				errorMessage: '身份证号不能为空'
			}, {
				format: 'idCard',
				validateFunction: function(rule, value, data, callback) {
					if (checkIdCard(value, 1) == "验证成功") {
						return true
					} else {
						callback(checkIdCard(value, 1))
					}
				}
			}]
		},
	})
</script>

<style lang="scss" scoped>
	.perSon {
		padding: 40rpx 32rpx;

		.lineInput {
			position: relative;
			height: 70rpx;
			line-height: 70rpx;
			padding: 0 20rpx;
		}

		:deep(.uni-forms-item__label) {
			font-weight: bold;
			color: #666666;
			font-size: 32rpx;
			width: 170rpx !important;
		}

		:deep(.uni-input-wrapper, .uni-input-form) {
			text-align: right;
		}

		:deep(.uni-easyinput__content-input) {
			text-align: right;
		}


		.bottom {
			background-color: #FFFFFF;
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			height: 146rpx;
			width: 100%;

			.row {
				height: 100rpx;

				.button {
					width: 100%;
					margin: 0 38rpx;
					height: 80rpx;
					border-radius: 40rpx;
					overflow: hidden;
				}
			}
		}
	}
</style>