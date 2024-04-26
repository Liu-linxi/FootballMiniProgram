<template>
  <view class="registmember">
    <uni-popup ref="popup" type="center">
      <view class="">
        <view class="top">
          <view class="green"></view>
          <view class="black">
            <image src="@/static/icon/logo.png" style="width: 108rpx;height: 100rpx;" class="mt-3 ml-3" mode=""></image>
            <view class="">
              <view class="mt-5 ml-4 text-white">开通会员尊享权益</view>
              <view class="mt-3 ml-4 text-white text-right" style="font-size: 40rpx;">365天</view>
            </view>
          </view>
        </view>
        <view class="bttom">
          <view class=" font-md text-center text-white mt-5">
            河南嵩山龙门专属会员
          </view>
          <view class="btnWh font32" @tap="toRegist">
            马上注册
          </view>
        </view>
        <view class="btn mt-2">
          <uni-icons @tap="closepop" type="closeempty" size="24" color="#FFFFFF"></uni-icons>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script setup>
const popup = ref()
const useUserInfo = useUserInfoStore()
const { userInfo } = storeToRefs(useUserInfo)
uni.$on('showRegisterPopup', () => {
	if (userInfo.value.openid) showpop()
})
function showpop() {
  nextTick(() => {
    popup.value.open()
  })
}

function closepop() {
  popup.value.close()
}

function toRegist() {
  uni.navigateTo({
    url: '/pages/registeredMember/registeredMember',
		success() {
			closepop()
		}
  })
}
defineExpose({ showpop })
</script>

<style lang="scss" scoped>
.registmember {
  .top {
    width: 550rpx;
    height: 226rpx;
    background: #ffffff;
    border-radius: 200rpx 200rpx 0 0;

    .green {
      position: relative;
      width: 430rpx;
      height: 246rpx;
      border-radius: 20rpx;
      margin-left: 72rpx;
      background: linear-gradient(90deg, #c9d6d3 0%, #13a654 30%, #91cf60 100%);
    }

    .black {
      position: relative;
      top: -236rpx;
      width: 449rpx;
      border-radius: 40rpx;
      margin-left: 32rpx;
      transform: rotate(-4deg);
      height: 273rpx;
      background: linear-gradient(270deg, #5c5660 0%, #39343b 100%);
      display: flex;
    }
  }

  .bttom {
    position: relative;
    width: 550rpx;
    height: 290rpx;
    background: #D81828;
    border-top: 7rpx solid #ffffff;

    .btnWh {
      width: 290rpx;
      line-height: 88rpx;
      margin: 40rpx auto 0;
      color: #D81828;
      background: #ffffff;
      border-radius: 44rpx;
      text-align: center;
    }
  }

  .btn {
    display: flex;
    justify-content: space-around;
  }
}
</style>