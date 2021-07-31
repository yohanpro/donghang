<template>
  <div class="subReply-entity ml-8 mb-2">
    <div class="wrapper flex flex-col w-full">
      <User :user-id="subReply.subReplyWriterId" />
      <p class="mt-2 text-xl">
        {{ subReply.text }}
      </p>
      <div class="mt-1 flex items-center text-gray-500">
        <p class="mr-4">
          좋아요
          <span class="ml-1">
            1
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubReplyEntity',
  components: {
    User: () => import('~/components/common/user'),
  },
  props: {
    subReply: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
