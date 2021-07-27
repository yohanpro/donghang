<template>
  <div class="replies">
    <ReplyEntity
      v-for="reply in repliesObj"
      :key="reply.id"
      :reply="reply"
    />
  </div>
</template>

<script>
export default {
  name: 'Replies',
  components: {
    ReplyEntity: () => import('./ReplyEntity'),
  },
  props: {
    repliesObj: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.replies {
  padding: 0.5rem 1rem;
}
</style>
