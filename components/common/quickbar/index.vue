<template>
  <div class="quickbar border pt-2 pb-2">
    <slot name="question" />
    <slot name="replies" />
  </div>
</template>

<script>
export default {
  name: 'Quickbar',
  props: {
    replies: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
.quickbar {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
