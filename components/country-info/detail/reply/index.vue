<template>
  <section class="reply">
    리플라이
  </section>
</template>

<script>
export default {
  name: 'DetailReply',
  props: {
    replys: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
}
</script>
