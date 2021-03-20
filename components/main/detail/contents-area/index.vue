<template>
  <section class="contents-area__container">
    <div class="contents-area__main-text">
      {{ detailObj.content }}
    </div>
    <div class="contents-area__address">
      <p>장소</p>
      <p>{{ detailObj.address }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentsArea',
  props: {
    detailObj: {
      type: Object,
      default: () => {},
    },
  },
  data () {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.contents-area {
  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  &__main-text {
    padding: 1rem 2rem;
    font-size: 1.6rem;
    white-space: pre-line;
    word-break: break-word;
  }
  &__address {
    padding: 1rem 2rem;
    font-size: 1.6rem;
    flex-wrap: nowrap;

    p {
      font-weight: 300;
    }
    p:first-child {
      font-weight: bold;
    }
  }
}
</style>
