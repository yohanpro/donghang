<template>
  <article class="article">
    <p class="article__title">
      {{ articleObj.title }}
    </p>
  </article>
</template>

<script>
export default {
  name: 'ArticleEntity',
  props: {
    articleObj: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.article {
  width: 100%;
  height: 13rem;
  border-bottom: var(--border-light-gray);
  background-color: #fff;
  padding: 1rem 1.5rem;

  .article__title {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
