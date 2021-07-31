<template>
  <div class="reply-entity flex flex-col">
    <div class="wrapper flex flex-col w-full">
      <User :user-id="reply.writerId" />
      <p class="mt-2 text-xl">
        {{ reply.text }}
      </p>
      <div class="mt-2 flex items-center text-gray-500">
        <p class="mr-4">
          좋아요
          <span class="ml-1">
            1
          </span>
        </p>
        <p>답글쓰기</p>
      </div>
    </div>
    <div
      v-if="hasSubReply"
      class="w-full mt-4"
    >
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
  margin-bottom: 2rem;
  margin-left: 0.5rem;
}
</style>
