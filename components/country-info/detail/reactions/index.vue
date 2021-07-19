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
