<template>
	<swiper class="image-container" previous-margin="230rpx" next-margin="230rpx" circular :autoplay="false" @change="swiperChange">
		<swiper-item :class="currentIndex == index ? 'swiper-item' : 'swiper-item-side'" v-for="(item, index) in imgList" :key="item[urlKey]"  class="iamge">
			<image @click="clickImg(item)" :class="currentIndex == index ? 'item-img' : 'item-img-side'" :src="item[urlKey]" lazy-load :style="dontFirstAnimation ? 'animation: none;' : ''"></image>
			<view class="name line-h ">
				<view class="flex-shrink text-center" style="width: 50%;">
					中锋
				</view>
				<view class="border-left flex-shrink text-center" style="border-color: #E7E7E7;width: 50%;">
					<view class="" v-if="'保罗迪巴拉'.length>3">
						<view class="">
							{{'保罗迪巴拉'.substr(0,2)}}
						</view>
						<view class="">
							{{'保罗迪巴拉'.substr(2)}}
						</view>
					</view>
					<view class="" v-else>
						保罗迪
					</view>
				</view>
			</view>
		</swiper-item>
	</swiper>
</template>
<script>
	export default {
		props: {
			imgList: {
				type: Array,
				default () {
					return []
				}
			},
			urlKey: {
				type: String,
				default () {
					return ''
				}
			},
		},
		data() {
			return {
				currentIndex: 0,
				dontFirstAnimation: true
			}
		},
		methods: {
			swiperChange(e) {
				this.dontFirstAnimation = false
				this.currentIndex = e.detail.current
			},
			clickImg(item) {
				this.$emit('selected', item, this.currentIndex)
			}
		}
	}
</script>
<style scoped lang="scss">
	.iamge {
		position: relative;
	
		.name {
			width: 99%;
			z-index: 2;
			right: 0;
			left: 0rpx;
			height: 90rpx;
			position: absolute;
			bottom: 8rpx;
			background-color: #E52119;
			-webkit-clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
			clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
			border-radius: 0 0 6rpx 6rpx;
			display: flex;
			align-items: center;
			animation: btm-mini .3s;
			color: #FFF;
		}
	}
	.image-container {
		width: 100%;
		height: 380rpx;
	}

	.item-img {
		display: block;
		width: 260rpx;
		height: 364rpx;
		border-radius: 6rpx;
		animation: to-big .3s;
		flex-shrink: 0;
		box-shadow: 0 0upx 10upx 3upx rgba(0, 0, 0, 0.5) !important;
	}

	.swiper-item {
		position: relative;
		flex-shrink: 0;
		width: 270rpx;
		height: 380rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		text-align: center;

	}

	.item-img-side {
		display: block;
		flex-shrink: 0;
		width: 100%;
		height: 324rpx;
		border-radius: 6rpx;
		animation: to-mini .3s;
	}

	.swiper-item-side {
		flex-shrink: 0;
		width: 220rpx;
		height: 324rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		.name{
			bottom: 28rpx;
			animation: btm-big .3s;
		}
	}
	@keyframes btm-mini {
		from {
			bottom: 28rpx;
		}

		to {
			bottom: 8rpx;
		}
	}

	@keyframes btm-big {
		from {
			bottom: 8rpx;
		}

		to {
			bottom: 28rpx;
		}
	}
	@keyframes to-mini {
		from {
			height: 356rpx;
		}

		to {
			height: 324rpx;
		}
	}

	@keyframes to-big {
		from {
			height: 324rpx;
		}

		to {
			height: 356rpx;
		}
	}

	
</style>