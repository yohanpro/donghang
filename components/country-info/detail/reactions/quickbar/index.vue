<template>
  <div class="quickbar border pt-2 pb-2">
    <div class="reply ml-4">
      <img
        class="w-6 mr-1"
        src="~/assets/images/icons/message.svg"
      >
      댓글 {{ totalReplies }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quickbar',
  props: {
    totalReplies: {
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

.reply {
  display: flex;
  align-items: center;
}
</style>
