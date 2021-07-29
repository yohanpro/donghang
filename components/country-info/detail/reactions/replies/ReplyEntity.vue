<template>
  <div class="reply-entity">
    <div>{{ reply.text }}</div>
    <div v-if="hasSubReply">
      <SubReplyEntity
        v-for="subReply in reply.subReplies"
        :key="subReply.id"
        :sub-reply="subReply"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReplyEntity',
  components: {
    SubReplyEntity: () => import('./SubReplyEntity'),
  },
  props: {
    reply: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    hasSubReply () {
      return this.reply.subReplies.length > 0
    },
  },
}
</script>
