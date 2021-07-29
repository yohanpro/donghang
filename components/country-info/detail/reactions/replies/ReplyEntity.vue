<template>
  <div class="reply-entity">
    <div class="wrapper flex flex-col w-full">
      <User :user-id="reply.writerId" />
      <p>
        {{ reply.text }}
      </p>
    </div>
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
    User: () => import('~/components/common/user'),
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

<style lang="scss" scoped>
.reply-entity {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
