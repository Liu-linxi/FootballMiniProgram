<template>
	<view class="mail">
		<view class="list">
			<view v-for="li in 2" :key="li">
				<view class="green-color d-flex a-center my-1" :class="li==1?'':'flex-row-reverse'">
					{{li==1?'我':'管理员'}} 
					<text>：</text>
					<text class="mx-2">2023-10-24  16:25:20</text>
				</view>
				<view class="">
					<view class="pandetail mt-1">
						很多人所谓的追逐梦想，就是不想要辛苦努力地付出，还可以轻松自由地生活。
					</view>
				</view>
			</view>
			<view class="textarea mt-3">
				<uni-easyinput placeholderStyle="color:#999999" :inputBorder="false" type="textarea" v-model="value" placeholder="请输入您想要咨询的内容"></uni-easyinput>
			</view>
		</view>
		<view class="bottom">
			<view class="d-flex a-center j-sb row">
				<linxi-button class="button" lineHeight="80rpx" fontSize="28rpx">提交</linxi-button>
			</view>
		</view>
	</view>
</template>

<script setup>
	const value = ref()
</script>

<style lang="scss" scoped>
	.mail {
		padding:  54rpx 38rpx 146rpx;
		
		.list{
			.pandetail{
				background: #F5F5F5;
				color: #999999;
				line-height: 40rpx;
				text-align: left;
				padding:  20rpx 30rpx;
				border-radius: 20rpx;
			}
		}
		
		
		.textarea {
			:deep(.uni-easyinput__content-textarea) {
				background-color: #F6F6F6;
				padding: 10rpx;
				border-radius: 10rpx;
			}

			:deep(.uni-easyinput__content-textarea) {
				margin: 0;
			}
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