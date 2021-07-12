<template>
  <article
    class="article"
    @click="goToArticleDetail"
  >
    <div class="article__tags">
      <p
        v-for="tag in articleObj.tags"
        :key="tag"
        class="tag"
      >
        {{ tag }}
      </p>
    </div>
    <p class="article__title">
      {{ articleObj.title }}
    </p>
    <p class="article__content">
      {{ articleObj.content }}
    </p>
  </article>
</template>

<script>
import { shortenText } from '~/utils/helplers'
import { getArticleStatus } from '~/utils/main-aritcle-helper'

export default {
  name: 'ArticleEntity',
  props: {
    articleObj: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    shortenText,
    getArticleStatus,
    goToArticleDetail () {
      const { country, id } = this.articleObj
      this.$router.push(`/country-info/${country}/${id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.article {
  width: 100%;
  height: 13rem;
  background-color: #fff;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  border: none;
  display: flex;
  flex-direction: column;

  &__tags {
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    .tag {
      background-color: #eee;
      padding: 0.1rem 0.5rem;
      color: rgba(0, 0, 0, 0.87);
      font-size: 1rem;
    }
    .tag:not(:last-child) {
      margin-right: 1rem;
    }
  }
  &__title {
    margin-top: 0.5rem;
    font-size: 1.3rem;
    font-weight: bold;
  }
}
</style>
