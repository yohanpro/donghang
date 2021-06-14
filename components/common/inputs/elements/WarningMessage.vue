<template>
  <div class="warning-message__wrapper">
    <div
      v-show="isWarningShown"
      class="warning-message"
      v-text="warningMessage"
    />
  </div>
</template>

<script>
export default {
  name: 'WarningMessage',
  props: {
    isWarningShown: {
      type: Boolean,
      default: false,
    },
    warningMessage: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.warning-message__wrapper {
  position: absolute;
  min-height: 1.25rem;
  .warning-message {
    margin-top: .25rem;
    font-size: 14px;
    color: $strawberry;
  }
}
</style>
