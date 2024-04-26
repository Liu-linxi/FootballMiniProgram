<template>
  <view class="registmember a">
    <uni-popup ref="popup" type="center">
      <view class="">
        <view class="popupContent">
          <view class="title">
            龙门大会员
          </view>
          <view class="text-center font mt-2">
            河南嵩山龙门专属会员
          </view>
          <view class="card">
            <view class="d-flex a-center pt-3" style="height: 96rpx;">
              <image src="@/static/icon/logo.png" style="width: 100rpx;height: 96rpx;margin: 26rpx 22rpx;" mode=""></image>
              <text class="text-white">开通会员尊享权益</text>
            </view>
          </view>
          <view class="overflow-hidden rounded-circle" style="margin: 43rpx 154rpx 0;">
            <linxi-button fontSize="32rpx" lineHeight=" 88rpx" @tap="toRegist">马上注册</linxi-button>
          </view>
        </view>
        <view class="btn" @tap="closepop">
          <uni-icons type="closeempty" size="18" color="#FFFFFF"></uni-icons>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script setup>
const popup = ref()
const useUserInfo = useUserInfoStore()
const { userInfo } = storeToRefs(useUserInfo)
onMounted(() => {
  uni.$on('showRegisterPopup', () => {
    if (userInfo.value.openid) showpop()
  })
})
onBeforeUnmount(() => {
  uni.$off('showRegisterPopup')
})
function showpop() {
  popup.value.open()
}

function closepop() {
  popup.value.close()
}

function toRegist() {
  uni.navigateTo({
    url: '/pages/registeredMember/registeredMember',
  })
}
defineExpose({ showpop })
</script>

<style lang="scss" scoped>
.registmember {
  .popupContent {
    width: 598rpx;
    height: 694rpx;
    background: linear-gradient(0, #ffffff 0%, #fffcec 100%);
    border-radius: 30rpx;

    .title {
      font-size: 48rpx;
      color: #000000;
      line-height: 48rpx;
      text-align: center;
      padding-top: 96rpx;
    }

    .card {
      width: 462rpx;
      height: 256rpx;
      background: linear-gradient(270deg, #5c5660 0%, #39343b 100%);
      border-radius: 20rpx;
      margin-left: 68rpx;
      margin-top: 35rpx;
    }
  }

  .btn {
    width: 88rpx;
    height: 88rpx;
    line-height: 88rpx;
    margin: 30rpx auto 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    text-align: center;
  }
}
</style>