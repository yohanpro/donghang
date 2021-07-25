<template>
  <section class="reactions">
    <Quickbar :total-replies="totalReplies" />
    <div class="mt-4">
      <CommentsOrder
        :selected-order-type="selectedOrderType"
        :order-types="orderTypes"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Reactions',
  components: {
    Quickbar: () => import('./quickbar'),
    CommentsOrder: () => import('~/components/common/ordering/CommentsOrder'),
  },
  props: {
    reactionObj: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  data () {
    return {
      orderTypes: [
        {
          title: '등록순',
          orderBy: 'date',
        },
        {
          title: '최신순',
          orderBy: 'latest',
        },
      ],
      selectedOrderType: 'date',
    }
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
  methods: {
    handleOrderReplies (order) {
      this.selectedOrderType = order
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
