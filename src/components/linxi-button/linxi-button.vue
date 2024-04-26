<template>
  <view>
    <view :class="['linxi-button btn', type,{shadow:isShadow}]" :hover-class="`${type}Hover`" :style="{fontSize,lineHeight,borderRadius,color}">
      <slot></slot>
    </view>
  </view>
</template>

<script>
export default {
  name: 'linxButton',
  props: {
    type: {
      type: String,
      default: 'red',
    },
    fontSize: {
      type: String,
      default: '36rpx',
    },
    lineHeight: {
      type: String,
      default: '70rpx',
    },
    borderRadius: {
      type: String,
      default: '4rpx',
    },
    color: {
      type: String,
      default: '#FFFFFF',
    },
    isShadow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.linxi-button {
  width: 100%;
  text-align: center;
  letter-spacing: 4rpx;
  font-weight: bold;

  &.shadow {
    box-shadow: 0rpx 4rpx 18rpx 0rpx rgba(127, 127, 127, 0.5);
  }

  &.red {
    background: rgba(229, 33, 25, 1);
  }

  &.redHover {
    background: rgba(229, 33, 25, 0.8);
  }

  &.gray {
    background: rgba(172, 172, 172, 1);
  }

  &.grayHover {
    background: rgba(172, 172, 172, 0.8);
  }

  &.popgray {
    background-color: rgba(245, 246, 250, 1);
  }

  &.popgrayHover {
    background-color: rgba(245, 246, 250, 0.8);
  }

  &.green {
    background: rgba(0, 154, 99, 1);
  }

  &.greenHover {
    background: rgba(0, 154, 99, 1);
  }
  &.blue {
    background: rgba(63, 109, 177, 1);
  }

  &.blueHover {
    background: rgba(63, 109, 177, 0.8);
  }
}
</style>