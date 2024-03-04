import { reactive, toRefs } from 'vue';
import { checkIdCard } from '@/utils/verify.js'
const initData = reactive({
	valiFormData: {
		name: '',
		idCard: "",
		relation: ""
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
		relation: {
			rules: [{
				required: true,
				errorMessage: '请选择与本人关系'
			}]
		}

	},
	range: [
		{ value: 0, text: "篮球" },
		{ value: 1, text: "足球" },
		{ value: 2, text: "游泳" },
	]
})

const { valiFormData, rules,range } = toRefs(initData)
export { valiFormData, rules,range }