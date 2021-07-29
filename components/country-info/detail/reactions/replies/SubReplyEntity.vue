<template>
  <div class="subReply-entity">
    <div>{{ subReply.text }}</div>
  </div>
</template>

<script>
export default {
  name: 'SubReplyEntity',
  props: {
    subReply: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
