<template>
	<view class="content">
		<uni-popup ref="popup" type="center" @change="change">
			<view class="popupContent">
				<view class=" p-5">
					<view class="text-center font-md font-weight mb-4">
						填写报名信息
					</view>
					<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
						<uni-forms-item label="姓名" name="name">
							<uni-easyinput v-model="valiFormData.name" :clearable="false" :inputBorder="false" placeholder="请输入姓名" primaryColor="#E52119" maxlength="7" />
						</uni-forms-item>
						<uni-forms-item label="联系方式" name="phone">
							<uni-easyinput v-model="valiFormData.phone" :clearable="false" :inputBorder="false" placeholder="请输入联系方式" primaryColor="#E52119" maxlength="11" />
						</uni-forms-item>
						<uni-forms-item label="身份证号" name="idCard">
							<uni-easyinput v-model="valiFormData.idCard" type="idcard" :clearable="false" :inputBorder="false" placeholder="请输入身份证号" primaryColor="#E52119" maxlength="18" />
						</uni-forms-item>
						<uni-forms-item label="备注" name="remark">
							<uni-easyinput type="textarea" v-model="valiFormData.remark" class="w-100" :inputBorder="false" placeholder="请输入备注" primaryColor="#E52119" maxlength="200" />
						</uni-forms-item>
					</uni-forms>

				</view>
				<view class="btm-button d-flex">
					<linxi-button class="btn mr-1" fontSize="25" type="gray" line-height="76rpx" @tap="canel">取消</linxi-button>
					<linxi-button class="btn ml-5" fontSize="25" line-height="76rpx" @tap="submit">确定</linxi-button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import { checkIdCard } from '@/utils/verify.js'
	import { nextTick } from 'vue';
	const popup = ref();
	const valiForm = ref()
	const initData = reactive({
		valiFormData: {
			name: '',
			phone: '',
			idCard: "",
			remark: '',
		},
		// 校验规则
		rules: {
			name: {
				rules: [{
					required: true,
					errorMessage: '姓名不能为空'
				}, {
					minLength: 1,
					maxLength: 7,
					errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
				}]
			},
			phone: {
				rules: [{
					required: true,
					errorMessage: '联系方式不能为空'
				}, {
					pattern:/^1[3456789]\d{9}$/,
					errorMessage: '手机号输入不正确'
				}]
			},
			idCard: {
				rules: [{
					required: true,
					errorMessage: '身份证号不能为空'
				}, {
					format: 'idCard',
					validateFunction: function(rule, value, data, callback) {
						if (checkIdCard(value, 1) == "验证成功") {
							return true
						} else {
							callback(checkIdCard(value, 1))
						}
					}
				}]
			}
		},
	})
	
	const { valiFormData, rules } = toRefs(initData)

	function submit() {
		uni.navigateTo({
			url:"/pages/activity/active/suborder"
		})
		valiForm.value.validate().then(res => {
			console.log('success', res);
			uni.showToast({
				title: `校验通过`
			})
		}).catch(err => {
			console.log('err', err);
		})
	}


	function open() {
		popup.value.open()
	}

	function canel() {
		popup.value.close()
	}
	const emit = defineEmits(["change"])

	function change(e) {
		emit("change", e)
	}
	defineExpose({
		open
	})
</script>

<style lang="scss" scoped>
	.content {
		.popupContent {
			width: 660rpx;
			height: 904rpx;
			background: #FFFFFF;
			border-radius: 4rpx;
			border: 2rpx solid #979797;

			
			
			.btm-button {
				padding-left: 140rpx;

				.btn {
					width: 166rpx;
				}
			}
		}
	}
</style>