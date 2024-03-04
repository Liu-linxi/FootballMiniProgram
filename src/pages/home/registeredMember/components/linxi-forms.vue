<template>
	<view class="linxiFroms">
		<uni-forms ref="valiForm" :rules="rules" :modelValue="formData">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput v-model="formData.name" :clearable="false" :inputBorder="false" placeholder="请填写真实姓名" maxlength="7" />
			</uni-forms-item>
			<uni-forms-item label="身份证号" name="idCard">
				<uni-easyinput v-model="formData.idCard" type="idcard" :clearable="false" :inputBorder="false" placeholder="请填写身份证号" maxlength="18" />
			</uni-forms-item>
			<uni-forms-item label="联系方式" name="phone">
				<uni-easyinput v-model="formData.phone" :clearable="false" :inputBorder="false" placeholder="请填写联系方式" maxlength="11" />
			</uni-forms-item>

			<uni-forms-item label="出生日期" name="birthday">
				<uni-datetime-picker type="date" v-model="formData.birthday">
					<view class="lineInput" :class="{'gray-color':!formData.birthday}">
						{{formData.birthday||"请选择"}}
						<view class="triangle"></view>
					</view>
				</uni-datetime-picker>
			</uni-forms-item>
			<uni-forms-item label="性别" name="sex">
				<linxi-picker v-model="formData.sex" :range="array" choose='男'/>
			</uni-forms-item>
			<uni-forms-item label="来自哪里" name="area">
				<linxi-picker v-model="formData.area" :range="array"/>
			</uni-forms-item>
			<uni-forms-item label="学历" name="study">
				<linxi-picker v-model="formData.study" :range="pickArray" range-key="name"/>
			</uni-forms-item>
			<uni-forms-item label="家庭情况" name="family">
				<linxi-picker v-model="formData.family" :range="pickArray" range-key="name"/>
			</uni-forms-item>
			<uni-forms-item label="职业" name="job">
				<linxi-picker v-model="formData.job" :range="pickArray" range-key="name"/>
			</uni-forms-item>
			<uni-forms-item label="年收入" name="income">
				<linxi-picker v-model="formData.income" :range="pickArray" range-key="name"/>
			</uni-forms-item>
		</uni-forms>
	</view>
</template>

<script>
	import linxiPicker from './linxi-picker.vue';
	import  {array,formData,rules,pickArray} from './linxi-forms.js';
	export default {
		components:{
			linxiPicker
		},
		options: {
			styleIsolation: 'shared',
		},
		props: {
		},
		data() {
			return {
				array,formData,rules,pickArray
			}
		},
		methods: {
			bindPickerChange(e) {
				this.formData.sex = e.detail.value
			},
			submit() {
				console.log('success', this.formData);
				this.$refs.valiForm.validate().then(res => {
					console.log('success', res);
					uni.showToast({
						title: `校验通过`
					})
				}).catch(err => {
					console.log('err', err);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.linxiFroms {
		padding: 20rpx 100rpx 0 60rpx;

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


		:deep(.uni-forms-item__label) {
			font-weight: bold;
			color: #101010;
			font-size: 32rpx;
			width: 170rpx !important;
		}

		:deep(uni-easyinput__content-input) {
			padding: 0 !important;
		}

		:deep(.uni-textarea-textarea) {
			padding-left: 20rpx;
		}

		:deep(.uni-forms-item) {
			margin-bottom: 18px;
		}

		:deep(.uni-easyinput__content-input) {
			background: #F6F6F6;
			border-radius: 10rpx;
		}

		:deep(.is-disabled .uni-easyinput__placeholder-class[data-v-af395001]) {
			color: #999;
		}

	}
</style>