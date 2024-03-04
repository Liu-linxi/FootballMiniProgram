<template>
	<view class="my-picker">
		<picker @change="bindPickerChange" :range="range" :range-key="rangeKey" :value="index">
			<view class="lineInput" :class="{'gray-color':currentValue== ''}">
				{{currentValue||placeholoder}}
				<view class="triangle"></view>
			</view>
		</picker>
	</view>
</template>

<script>
	export default {
		name: "myPicker",
		props: {
			value: String | Number,
			range: Array,
			rangeKey: {
				type: String,
				default: ""
			},
			placeholoder: {
				type: String,
				default: "请选择",
			},
			choose:String,
		},
		data() {
			return {
				index: -1
			}
		},
		mounted(){
			this.index = this.rangeKey ? this.range.findIndex(item => item[this.rangeKey] == this.choose) : this.range.findIndex(item => item == this.choose);
		},
		computed: {
			currentValue() {
				return this.index == -1 ? "" : this.rangeKey ? this.range[this.index][this.rangeKey] : this.range[this.index]
			}
		},
		methods: {
			bindPickerChange(e) {
				this.index = e.detail.value;
				// let currentValue = this.rangeKey ? this.range[this.index][this.rangeValue] : this.range[this.index];
				this.$emit('update:modelValue', this.currentValue);
			}
		}
	}
</script>

<style scoped lang="scss">
	.lineInput {
		position: relative;
		height: 70rpx;
		line-height: 70rpx;
		padding: 0 20rpx;
		background-color: #F6F6F6;

		.triangle {
			position: absolute;
			right: 10rpx;
			top: 25rpx;
			width: 30rpx;
			height: 20rpx;
			clip-path: polygon(51% 100%, 0 0, 100% 0);
			background-color: #009A63;
		}
	}
</style>