<template>
  <section class="reactions">
    <Quickbar :total-replies="totalReplies" />
    <div class="mt-4">
      <CommentsFilter />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Reactions',
  components: {
    Quickbar: () => import('./quickbar'),
    CommentsFilter: () => import('~/components/common/filters/CommentsFilter.vue'),
  },
  props: {
    reactionObj: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  computed: {
    totalReplies () {
      const { replies } = this.reactionObj
      const replyTotal = replies.length
      const subReplyTotal = replies.reduce((total, current) => {
        total += current.subReplies.length
        return total
      }, 0)
      return replyTotal + subReplyTotal
    },
  },
}
</script>

<style lang="scss" scoped>
.reactions {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;
}
</style>
