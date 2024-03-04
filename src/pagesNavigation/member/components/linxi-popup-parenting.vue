<template>
	<view class="parenting">
		<uni-popup ref="popup" type="center">
			<view class="popupContent">
				<view class="text-center">
					<image src="@/static/member/card.png" style="width: 100rpx;height: 100rpx;" class="pt-3" mode=""></image>
				</view>
				<view class="font34 font-weight text-center">
					需要你填写参加的儿童信息
				</view>
				<view class="text-center gray-color">
					需要你填写参加的儿童信息
				</view>
				<view class="px-3 mt-2" >
					<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" label-width="80">
						<uni-forms-item label="儿童姓名" name="name" class="border-top">
							<uni-easyinput v-model="valiFormData.name" :clearable="false" :inputBorder="false" placeholder="请填写姓名"  maxlength="7" />
						</uni-forms-item>
						<uni-forms-item label="身份证号" name="idCard" class="border-top pt-1">
							<uni-easyinput v-model="valiFormData.idCard" :clearable="false" :inputBorder="false" placeholder="请输入身份证号" maxlength="18" />
						</uni-forms-item>
						<uni-forms-item label="与本人关系" name="relation" class="border-top pt-1">
							<uni-data-select class="text-right" v-model="valiFormData.relation" :clear="false" :localdata="range" placeholder="请选择与本人关系"></uni-data-select>
						</uni-forms-item>
					</uni-forms>
				</view>
				<view class="px-5">
					<linxi-button class="btn mt-2" fontSize="36rpx" line-height="80rpx" @tap="submit" :isShadow="false">提交</linxi-button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import { valiFormData, rules,range } from "./linxi-popup-parenting.js"
	const valiForm = ref()

	function submit() {
		valiForm.value.validate().then(res => {
			console.log('success', res);
			uni.showToast({
				title: `校验通过`
			})
			console.log(valiFormData);
		}).catch(err => {
			console.log('err', err);
		})
	}

	const popup = ref();

	function showpop() {
		popup.value.open()
	}

	function closepop() {
		popup.value.close()
	}
	defineExpose({ showpop })
</script>

<style lang="scss" scoped>
	.parenting {
		.popupContent {
			width: 698rpx;
			height: 782rpx;
			background: #FFFFFF;

			.border-top {
				border-color: #F1F1F1;
			}
		}
	}
</style>