<template>
  <section class="reactions">
    <Quickbar />
  </section>
</template>

<script>
export default {
  name: 'Reactions',
  components: {
    Quickbar: () => import('~/components/common/quickbar'),
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
