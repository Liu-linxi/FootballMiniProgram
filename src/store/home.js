import { getGoodsInfo } from "@/api/home"
import { defineStore } from "pinia"

const homeOptions = {
  state() {
    return {
			name:"测试"
    }
  },
  getters: {},
  actions: {
    async pinia_home_bannerList() {
			let res= await getGoodsInfo()
    },
    async pinia_home_showList() {
    }
  }
}

export const useHomeStore = defineStore('home', homeOptions)
export default useHomeStore
