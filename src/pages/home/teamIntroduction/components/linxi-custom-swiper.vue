<template>
	<view class="swiper-container">
		<view v-if="list && list.length > 0" :style="{ height: height + 'rpx', width: width ? width + 'rpx' : '100%' }" class="swiper-box" @touchstart="touchStart" @touchend="touchEnd">
			<view class="swiper-item" v-for="(item, index) in list" :key="index" :style="{
          transform: styleList[index]?.transform,
          'z-index': styleList[index]?.zIndex,
          opacity: styleList[index]?.opacity,
          display: styleList[index]?.display
        }">
				<view @click="itemClick(index)" class="wrap" :style="{ width: showNum == 5 && list.length >= 5 ? '260rpx' : '348rpx' }">
					<image :id="index"  class="image" :src="item.imgUrl"></image>
					<!-- <view v-if="isObj(item) && item.imgDesc" :class="['image-desc', descAniType, { curr: curr == index }]">{{ item.imgDesc }} </view> -->
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
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			/**calc(100% - )
			 * 图片url列表，内部结构为Object，示例{"imgUrl":"http://www.abc.com/a.jpg","imgDesc":"我是描述文字"}
			 */
			list: {
				type: Array,
				default: []
			},
			/**
			 * swiper高度--单位rpx
			 */
			height: {
				type: Number,
				default: 356
			},
			/**
			 * 显示图片个数，仅支持3或5，默认3
			 */
			showNum: {
				type: Number,
				default: 5
			},
			/**
			 * swiper宽度--单位rpx
			 */
			width: {
				type: Number,
				default: undefined
			},
			/**
			 * 是否自动播放
			 */
			autoPlay: {
				type: Boolean,
				default: false
			},
			/**
			 * 自动播放间隔毫秒
			 */
			autoPlayInterval: {
				type: Number,
				default: 5000
			},
			/**
			 * 是否显示轮播指示点
			 */
			showDot: {
				type: Boolean,
				default: true
			},
			/**
			 * 图片描述文字动画类型：slideFromRight、slideFromBottom、scaleX、scaleY
			 */
			descAniType: {
				type: String,
				default: 'slideFromRight'
			},
			/**
			 * 指示点未选中背景色，支持css颜色值及渐变
			 */
			dotColor: {
				type: String,
				default: '#FFFFFF'
			},
			/**
			 * 指示点选中背景色，支持css颜色值及渐变
			 */
			dotSelectedColor: {
				type: String,
				default: '#FF6699'
			}
		},
		data() {
			return {
				curr: 0,
				/**
				 * 开始触摸点坐标
				 */
				start: {
					x: 0,
					y: 0
				},
				/**
				 * 每个item样式列表
				 */
				styleList: [],
				timer: undefined
			}
		},
		created() {
			this.isObj({})
			this.initSwiper()
		},
		watch: {
			list(newVal, oldVal) {
				this.curr = 0
				this.start = {
					x: 0,
					y: 0
				}
				this.styleList = []
				this.closeTimer()
				this.initSwiper()
			}
		},
		methods: {
			//初始化swiper
			initSwiper() {
				if (this.list && this.list.length > 0) {
					this.list.forEach((item, index) => {
						this.styleList.push(this.addStyle(index))
					})
					this.openTimer()
				}
			},

			//开启自动定时器
			openTimer() {
				if (this.autoPlay === true && this.list.length > 1) {
					this.timer = setInterval(() => {
						this.curr = this.curr == this.list.length - 1 ? 0 : this.curr + 1
						this.toSlideLeft()
					}, this.autoPlayInterval)
				}
			},
			//关闭自动定时器
			closeTimer() {
				if (this.autoPlay === true && this.list.length > 1) {
					clearInterval(this.timer)
					this.timer = undefined
				}
			},
			/**
			 * 计算每个item样式
			 * @param {Object} idx
			 */
			addStyle(idx) {
				const len = this.list.length
				let sn = this.showNum == 5 && this.list.length >= 5 ? 2 : 1
				if (idx > len / 2) {
					//这里是数组后一半的item放在左边,平移位置由远到近，例如共6个，后2个处理在这里
					var left = len - idx
					return {
						transform: 'scale(' + (1 - left / 10) + ') translate(-' + left * 273 + 'rpx,0px)',
						// transform: 'scale(' + (1 - left / 10) + ') translate(-' + left * 420 + 'rpx,0px)',
						zIndex: 100 - left,
						// opacity: 0.8 / left,
						opacity:1,
						display: idx >= len - sn ? 'block' : 'none'
					}
				} else {
					//这里是数组前一半item放在右边，平移位置由近到远，例如共6个，前4个处理在这里，这里第一个元素始终放在中间位置
					return {
						// transform: 'scale(' + (1 - idx / 10) + ') translate(' + idx * 420 + 'rpx,0px)',
						transform: 'scale(' + (1 - idx / 10) + ') translate(' + idx * 273 + 'rpx,0px)',
						zIndex: 100 - idx,
						// opacity: 0.8 / (idx === 0 ? 0.8 : idx),
						opacity:1,
						display: idx > sn ? 'none' : 'block'
					}
				}
			},
			/**
			 * 触摸开始
			 * @param {Object} e
			 */
			touchStart(e) {
				this.start.x = e.changedTouches[0] ? e.changedTouches[0].pageX : 0
				this.start.y = e.changedTouches[0] ? e.changedTouches[0].pageY : 0
				this.closeTimer()
			},
			/**
			 * 触摸结束
			 * @param {Object} e
			 */
			touchEnd(e) {
				var len = this.styleList.length
				var touchIdx = Number(e.target.id)
				let tx = e.changedTouches[0].pageX - this.start.x
				let ty = e.changedTouches[0].pageY - this.start.y
				if (Math.abs(tx) > Math.abs(ty)) {
					//左右方向滑动
					if (tx === 0) {
						//点击事件拦截
						this.openTimer()
						return
					}
					if (tx < 0) {
						// 向左滑动--手指向左滑动
						this.curr = touchIdx === len - 1 ? 0 : touchIdx + 1
						this.toSlideLeft()
					} else if (tx > 0) {
						// 向右滑动--手指向右滑动
						this.curr = touchIdx === 0 ? len - 1 : touchIdx - 1
						this.toSlideRight()
					}
				} else {
					//这里就不处理上下方向的事件了，有此需求的同仁可以在这里写逻辑
					//上下方向滑动
					if (tx === 0) {
						//点击事件拦截
						return
					}
					if (ty < 0) {
						// 向上滑动
					} else if (ty > 0) {
						// 向下滑动
					}
				}
				this.openTimer()
			},
			// 向左滑动--手指向左滑动
			toSlideLeft() {
				var newStyleList = JSON.parse(JSON.stringify(this.styleList))
				var last = [newStyleList.pop()]
				newStyleList = last.concat(newStyleList)
				this.styleList = newStyleList
				//触发change事件
				this.$emit('change', this.curr)
			},
			// 向右滑动--手指向右滑动
			toSlideRight() {
				var newStyleList = JSON.parse(JSON.stringify(this.styleList))
				var first = [newStyleList.shift()]
				newStyleList = newStyleList.concat(first)
				this.styleList = newStyleList
				//触发change事件
				this.$emit('change', this.curr)
			},
			/**
			 * 当前item点击返回索引下标
			 * @param {Object} idx
			 */
			itemClick(idx) {
				this.$emit('click', idx)
			},
			//是否为对象
			isObj(o) {
				try {
					return typeof o === 'object' && o !== null
				} catch (e) {
					return false
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-container {
		.swiper-box {
			position: relative;
			top: -5rpx;
			.swiper-item {
				height: 100%;
				width: 100%;
				position: absolute;
				top: 0;
				left: 0;
				transition: all 0.5s;


				//需要缩放动画的话注释下方放开这个
				.wrap {
					height: 100%;
					margin: 2rpx auto;
					position: relative;
					overflow: hidden;
					border-radius: 6rpx;
					box-shadow: 0 0 10rpx 0rpx rgba(0, 0, 0, .2);
					line-height: 0;
					background-color: #fff;
					.name {
						opacity: 1;
						width: 100%;
						z-index: 100;
						right: 0;
						left: 0rpx;
						height: 90rpx;
						position: absolute;
						bottom: -1rpx;
						background-color: #E52119;
						-webkit-clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
						clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
						border-radius: 0 0 6rpx 6rpx;
						display: flex;
						align-items: center;
						color: #FFF;
					}
					.image {
						display: block;
						height: 382upx;
						width: 100%;
					}

				}
			}
		}
	}
</style>