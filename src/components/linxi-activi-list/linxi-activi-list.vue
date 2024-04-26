<template>
	<view class="block">
		<view class="d-flex a-center main-pink-color" v-for="li in activityList" :key="li.id" @tap="toActiveDetail(li.id)">
			<image :src="li.smallPic" style="width:240rpx;height: 200rpx;" class="main-bg-color flex-shrink"></image>
			<view class="right ml-4 overflow-hidden">
				<view class="title truncate2 ">
					{{li.title}}
				</view>
				<view class="secTitle truncate">
					{{li.abstractWord}}
				</view>
				<view class="smlTitle d-flex a-center j-sb">
					<view>报名{{li.applicants}}/{{li.preset}}</view>
					<view class="mr-2">
						<text class="main-color" v-show="li.activityStatus==0">报名未开始</text>
						<text class="gray-color" v-show="li.activityStatus==1">报名已截止</text>
						<text class="green-color" v-show="li.activityStatus==2">报名进行中</text>
						<text class="gray-color" v-show="li.activityStatus==3">活动已结束</text>
						<text class="gray-color" v-show="li.activityStatus==4">活动未开始</text>
						<text class="green-color" v-show="li.activityStatus==5">活动进行中</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps(["activityList"])
	const emit = defineEmits(['toActiveDetail'])

	function toActiveDetail(id) {
		emit("toActiveDetail", id)
	}
</script>

<style lang="scss" scoped>
	.block {
		margin: 24rpx 0 0rpx;

		.d-flex {
			margin-top: 14rpx;

			.right {
				width: 100%;

				.title {
					font-size: 32rpx;
					color: #171717;
					font-weight: 500;
				}

				.secTitle {
					font-weight: 400;
					color: #292929;
				}

				.smlTitle {
					font-size: 24rpx;
					font-weight: 400;
					color: #8A8A8A;
				}
			}
		}
	}
</style>