import { checkIdCard } from '@/utils/verify.js'
const data = {
	array: ['男', '女'],
	formData: {
		name: '',
		phone: '',
		idCard: "",
	},
	pickArray: [
		{ name: "办公", value: "1" },
		{ name: "洽谈", value: "2" },
		{ name: "会议", value: "3" }
	],

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
				pattern: /^1[3456789]\d{9}$/,
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
		},
		birthday: {
			rules: [{
				required: true,
				errorMessage: '请选择出生日期'
			}]
		},
		sex: {
			rules: [{
				required: true,
				errorMessage: '请选择性别'
			}]
		},
		/* area: {
			rules: [{
				required: true,
				errorMessage: '请选择来自哪里'
			}]
		},
		study:{
			rules: [{
				required: true,
				errorMessage: '请选择学历'
			}]
		},
		family:{
			rules: [{
				required: true,
				errorMessage: '请选择家庭情况'
			}]
		},
		job:{
			rules: [{
				required: true,
				errorMessage: '请选择职业'
			}]
		},
		income:{
			rules: [{
				required: true,
				errorMessage: '请选择年收入'
			}]
		}, */
	},
}
export const { array, formData, rules,pickArray } = data