<template>
	<view class="content">
		<view class="text-center font-md font-weight">
			远征观战
		</view>
		<view class="subTitle font-weight text-letter1">
			11月4日I山东泰山VS河南队远征报名
		</view>
		<view class="d-flex a-center j-sb font-weight my-1">
			<view class="main-color ">
				￥ 50 
			</view>
			<view class="main-color">
				<text class="gray-color" v-show="li==1">已截止</text>
				<text class="main-color" v-show="li==2">未开始</text>
				<text class="green-color" v-show="li==3">进行中</text>
			</view>
		</view>
		<view class="">
			<view class="d-flex a-center" v-for="(item,index) in 4" :key="index">
				<image src="" class="iconImg" mode=""></image>
				<text class="gray ml-1">报名:</text>
				<text class=" ml-1" :class="index==3?'green-color':'gray'"> 2023/10/29 12:00-2023/11/03 12:008</text>
			</view>
		</view>
		<view class="gray mt-2" style="text-indent: 2em;">
			根据山东赛区客队球迷管理要求，现将有关观赛事宜通知如下: 【集合时间地点】
			11月4日13:00，济南奥体中心体育场南门 【核销换票】
			13:00起在南门有序排队扫现场工作人员二维码核销后，领取纸质门票，13:30起持身份证原件(或电子身份证)入场 【注意事项】
			15点停止核销换票，过时不再等候，请务必合理安排时间，及时换票
			【观赛须知】
			1、身高1米2以下儿童免票，当天大幅度降温，注意防寒保暖。
			2、充电宝、水杯、食品、打火机、长柄雨伞等一切可燃可掷物品均不能带入，场内有售水和食品，可依需购买;
			3、比赛中文明观赛不得有挑衅、辱骂他人、打斗等违法行为，服从现场安保人员和其他工作人员的指挥。比赛结束后，等待现场公安通知有序离场。
			4、其他事宜可随时联系河南足球俱乐部工作人员 康杰<text class="green-color">18538229938</text>王宇珂18638600110
			
			感谢您的配合，为河南，共战斗!
		</view>
		<image src="" style="width: 100%;" class="mt-2 main-bg-color"  mode="widthFix"></image>
	</view>
</template>

<script setup>
	const li=ref(3)
</script>

<style lang="scss" scoped>
	.content{
		.subTitle{
			font-size: 32rpx;
		}
		.iconImg{
			width: 32rpx;
			height: 32rpx;
			background-color:#E52119 ;
		}
		.gray{
			color: #656565;
		}
	}
</style>