<template>
	<view class="newsDetail">
		<view class="d-flex a-center j-sb">
			<view class="font-weight font-md">
				少年球员招募公告
			</view>
			<view class="text-center" @tap="shareBtn">
				<image src="@/static/home/share.png" style="width: 42rpx;height: 42rpx;" class="" mode=""></image>
				<view class="line-h font gray">分享</view>
			</view>
		</view>
		<view class="gray-color">
			发布时间：2024-01-06 12:21
		</view>
		<view class="text">
			根据山东赛区客队球迷管理要求，现将有关观赛事宜通知如下: 【集合时间地点】
			11月4日13:00，济南奥体中心体育场南门 【核销换票】
			13:00起在南门有序排队扫现场工作人员二维码核销后，领取纸质门票，13:30起持身份证原件(或电子身份证)入场 【注意事项】
			15点停止核销换票，过时不再等候，请务必合理安排时间，及时换票
			【观赛须知】
			3、比赛中文明观赛不得有挑衅、辱骂他人、打斗等违法行为，服从现场安保人员和其他工作人员的指挥。比赛结束后，等待现场公安通知有序离场。
			以上为演示文字
		</view>

		<uni-popup ref="shareRef" type="share" safeArea>
			<view class="btmContent rounded py-5 px-3">
				<view class="d-flex a-center j-sa mb-2">
					<view class="item text-center">
						<image src="@/static/home/weChat.png" class="item-img"  mode=""></image>
						<view>微信</view>
					</view>
					<view class="item text-center">
						<image src="@/static/home/circleWixin.png" class="item-img"  mode=""></image>
						<view>朋友圈</view>
					</view>
				</view>
				<linxi-divider></linxi-divider>
				<view class="text-center pt-3" @tap="shareRef.close()">
					取消
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	const shareRef = ref()


	function shareBtn() {
		shareRef.value.open()
	}
</script>

<style lang="scss" scoped>
	.newsDetail {
		padding: 20rpx;

		.gray {
			color: #656565;
		}

		.text {
			color: #656565;
			text-indent: 2em;
		}
		.btmContent{
			border-radius: 22rpx 22rpx 0rpx 0rpx;
			background: #FFFFFF;
			.item{
				.item-img{
					width: 80rpx;
					height: 80rpx;
				}
			}
		}
	}
</style>