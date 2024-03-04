<template>
	<view class="titleNav">
		<view class="title">
			{{title}}
		</view>
		<view class="secTitle" v-if="secTitle">
			{{secTitle}}
			<image src="@/static/home/home_icon2.png" style="width:40rpx ;height: 40rpx;margin-left: 8rpx;" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			title:{
				type: String,
				default: "主标题",
			},
			secTitle:{
				type: String,
				default: "",
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.titleNav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #454545;
		line-height: 1;
		
		.title {
			font-size: 36rpx;
			font-weight: bold;
			position: relative;

			&:after {
				content: '';
				display: block;
				position: absolute;
				width: 30rpx;
				height: 30rpx;
				right: -23rpx;
				top: -15rpx;
				background-image: url("~@/static/home/home_icon1.png");
				background-repeat: no-repeat;
				background-size: 30rpx 30rpx;
			}
		}

		.secTitle {
			display: flex;
			align-items: center;
		}
	}
</style>