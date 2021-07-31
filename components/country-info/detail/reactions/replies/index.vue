<template>
  <div class="replies">
    <ReplyEntity
      v-for="reply in repliesObj"
      :key="reply.id"
      :reply="reply"
      :post-writer="postWriter"
    />
  </div>
</template>

<script>
export default {
  name: 'Replies',
  components: {
    ReplyEntity: () => import('./entity/ReplyEntity'),
  },
  props: {
    repliesObj: {
      type: Array,
      default: () => [],
    },
    postWriter: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.replies {
  padding: 0.5rem 1rem;
}
</style>
