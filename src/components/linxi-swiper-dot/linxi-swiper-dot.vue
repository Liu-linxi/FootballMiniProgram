<template>
	<view class="swiper-box">
		<swiper class="swiper" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="500" :circular="true" @change="change">
			<swiper-item v-for="(item,index) in swiperList" :key="item.id||index">
				<view class="swiper-item" @click.stop="swiperItemClick(item)">
					<image style="width: 100%;height: 200px;" :src="item[imgField]" mode="" lazy-load="true" :data-index="index" @tap="previewPhoto"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- dots -->
		<view class="dtos">
			<view class="dto" :class="{'dto-active':index===currIndex}" v-for="(item,index) in swiperList" :key="index">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 轮播图数组
			swiperList: {
				type: Array,
				default: []
			},
			// 图片字段
			imgField: {
				type: String,
				default: 'imgSrc'
			},
			isPreview: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				currIndex: 0,
			};
		},
		methods: {
			change(s) {
				this.currIndex = s.detail.current;
			},
			swiperItemClick(item) {

				this.$emit("swiperItemClick", item);

			},
			/* 预览照片 */
			previewPhoto(e) {
				if (!this.isPreview) return;
				let index = e.currentTarget.dataset.index;
				let list = this.swiperList.map((item, index) => {
					return item[this.imgField];
				});

				uni.previewImage({
					current: list[index],
					urls: list,
					longPressActions: {
						itemList: ['保存图片'],
						success: function(res) {

							uni.getImageInfo({
								src: list[res.index],
								success: function(image) {
									uni.saveImageToPhotosAlbum({
										filePath: image.path,
										success: function() {
											uni.showToast({
												title: '图片保存成功',
												icon: 'none',
												duration: 3000
											});
										}
									});
								}
							});
						}
					}
				});
			},


		}
	}
</script>

<style lang="scss" scoped>
	.swiper-box {
		width: 100%;
		height: auto;
		background: #fff;
	}

	.swiper {
		margin-left: 3vw;
		width: 94vw;
		height: 200px;
		margin: 0 auto;
	}

	.swiper-item {
		width: 100%;
		height: 200px;
	}

	.dtos {
		display: flex;
		justify-content: center;
		margin-top: 22upx;
		height: 16px;

		.dto {
			width: 14upx;
			height: 14upx;
			border-radius: 500upx;
			background: #E81026;
			margin: 0 7upx;
			transition: width 0.5s;
		}

		.dto-active {
			background: #FFDADA;
			width: 32upx;
		}
	}
</style>