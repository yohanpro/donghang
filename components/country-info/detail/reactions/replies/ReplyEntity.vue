<template>
  <div class="reply-entity">
    <div>{{ reply.text }}</div>
  </div>
</template>

<script>
export default {
  name: 'ReplyEntity',
  components: {
  },
  props: {
    reply: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
